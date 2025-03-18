import Stripe from 'stripe';
import supabase from "../configs/supabaseConfig.js";
import generateUuid from "../utils/generateUuid.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function paymentController(req, res) {
    try {
        const { userId, email, priceId } = req.body;

        console.log(userId, email, priceId)

        if (!priceId || !userId || !email) {
            return res.status(400).json({ error: 'Missing priceId or userId or email' });
        }

        // Step 1: Search for an existing customer by email
        const customers = await stripe.customers.list({ email });
        let customer = customers.data.length > 0 ? customers.data[0] : null;

        // Step 2: Create customer if not found
        if (!customer) {
            console.log("inside customer creation")
            customer = await stripe.customers.create({
                email,
                metadata: { userId },
            });
        }
        console.log("**************************")
        console.log(customer)
        console.log("**************************")

        // Step 3: Create a checkout session for the customer
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            customer: customer?.id,
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            metadata: customer?.metadata,
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
        });
        
        console.log("==================================")
        console.log(session)
        console.log("==================================")

        res.json({ success: true, sessionUrl: session.url })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export async function paymentWebhook(req, res) {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
        console.log("✅ Webhook event verified:");
    } catch (err) {
        console.error("❌ Webhook verification failed:", err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log("==================================================")
    switch (event.type) {
        case "checkout.session.completed":
            const session = event.data.object;
            console.log(session)
            console.log("✅ Payment successful:");

            if (!session.subscription) {
                console.error("No subscription ID found in session.");
                return res.status(400).json({ error: "No subscription ID found." });
            }

            // ✅ Fetch subscription details
            const subscription = await stripe.subscriptions.retrieve(session.subscription);

            const currentPeriodStart = subscription.current_period_start
                ? new Date(subscription.current_period_start * 1000).toISOString()
                : null;

            const currentPeriodEnd = subscription.current_period_end
                ? new Date(subscription.current_period_end * 1000).toISOString()
                : null;

            const cancelAtPeriodEnd = subscription.cancel_at_period_end || false;

            // Get latest invoice
            const invoice = await stripe.invoices.retrieve(subscription.latest_invoice);

            // Get receipt URL (from the charge object)
            const charge = invoice.charge ? await stripe.charges.retrieve(invoice.charge) : null;

            // Retrieve the payment intent
            const intent = await stripe.charges.retrieve(invoice.charge);

            const uuid = generateUuid();

            const { data, error } = await supabase.from("subscriptions").insert({
                id: uuid,
                session_id: session.id,
                user_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
                clerk_id: session.metadata?.userId,
                plan_id: "11111111-1111-1111-1111-111111111111",
                status: session.status,
                current_period_start: currentPeriodStart,  // Use fixed value
                current_period_end: currentPeriodEnd,  // Use fixed value
                cancel_at_period_end: cancelAtPeriodEnd || false,
                payment_provider: "stripe",
                amount: session.amount_total || 0, // Default to 0 if missing
                currency: session.currency || "USD",
                payment_status: session.payment_status || "pending",
                payment_method: session.payment_method_types?.[0] || "unknown",
                customer_id: session?.customer || null,
                invoice_id: invoice?.id || null,
                receipt_url: charge?.receipt_url || null,
                payment_intent_id: intent?.payment_intent || null,
            }); 

            if (error) {
                console.error("❌ Failed to save payment:", error);
                return res.status(500).json({ received: true, message: "Payment details not saved in DB" });
            }

            console.log("📌 Saved payment to DB:", data);
            break;

        default:
            console.log(`⚠️ Unhandled event type: ${event.type}`);
    }

    res.status(200).json({ received: true, message: "Payment successful, data saved in DB" });
}

export async function getPaymentStatus(req, res) {
    const {userId} = req.body;

    try{
        
        let { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('clerk_id', userId)

        if(error){
            res.status(500).json({status: false, message: 'userId does not exists in DB'})
        }

        console.log(data);

        res.status(200).json({status: true, data: data})

    } catch(err){
        console.log(err)
        res.status(500).json({status: false, message: 'Internal Server error', err})
    }
}

