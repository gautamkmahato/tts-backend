import supabase from '../configs/supabaseConfig.js';


export default async function checkUserLimit(userId, audioDuration) {
  try {
    // Get current month and year
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    // Get user's active subscription and plan details
    const { data: subscription, error: subscriptionError } = await supabase
      .from('subscriptions')
      .select(`id,
        plans (
          time_limit
        )
      `)
      .eq('user_id', userId)
      .eq('status', 'active')
      .single();

    if (subscriptionError || !subscription) {
      throw new Error('No active subscription found');
    }
    console.log(subscription.plans.time_limit);

    // Get current month's usage
    // const { data: usage, error: usageError } = await supabase
    //   .from('usage_logs')
    //   .select('minutes_used')
    //   .eq('user_id', userId)
    //   .eq('year', currentYear)
    //   .eq('month', currentMonth)
    //   .single();

    
    let { data: usage, error } = await supabase
    .from('usage_logs')
    .select('*')
    .eq('user_id', userId)
    .eq('year', currentYear)
    .eq('month', currentMonth)
    .single()
            


    console.log("usage: ", usage)
    const currentUsage = usage?.time_used || 0;
    const monthlyLimit = subscription.plans.time_limit;
    console.log("currentUsage: ", currentUsage);
    console.log("monthlyLimit: ", monthlyLimit)

    // Assuming each generation takes 1 minute (adjust based on your needs)
    // const estimatedMinutes = 1;

    if (currentUsage + audioDuration > monthlyLimit) {
      return {
        canGenerate: false,
        remainingTime: monthlyLimit - currentUsage,
        subscription_id: subscription.id
      };
    }

    return {
      canGenerate: true,
      remainingTime: monthlyLimit - currentUsage,
      subscription_id: subscription.id
    };
  } catch (error) {
    throw error;
  }
}

