import supabase from '../configs/supabaseConfig.js';


export default async function updateUsageLog(userId, subscriptionId, timeInSeconds) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
  
    const { error } = await supabase
      .rpc('update_usage_log', {
        p_user_id: userId,
        p_subscription_id: subscriptionId,
        p_year: currentYear,
        p_month: currentMonth,
        p_time: timeInSeconds
      });
  
    if (error){
      console.log("UpdateUsage Log Error: ", error);
      throw error;
    }
}