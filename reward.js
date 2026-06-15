function showRewardPopup(coins,xp){

    const popup =
      document.getElementById(
        "rewardPopup"
      );

    document.getElementById(
      "rewardCoins"
    ).innerHTML =
      "+" + coins + " Coins";

    document.getElementById(
      "rewardXP"
    ).innerHTML =
      "+" + xp + " XP";

    popup.classList.add("show");

    setTimeout(()=>{

      popup.classList.remove("show");

    },3000);

}