function claimDailyReward(){

 const reward =
 DAILY_REWARDS[
 player.dailyLogin.streak
 ];

 addCoins(reward);

 player.dailyLogin.streak++;

 savePlayer();

}