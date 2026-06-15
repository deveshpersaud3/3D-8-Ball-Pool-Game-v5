function updateDashboard(){

 document.getElementById(
   "coinAmount"
 ).innerText =
 player.coins;

 document.getElementById(
   "playerLevel"
 ).innerText =
 "Level " + player.level;

 const percent =
 (player.xp /
 xpRequired(player.level))
 * 100;

 document.getElementById(
   "xpFill"
 ).style.width =
 percent + "%";

}