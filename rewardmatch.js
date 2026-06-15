function rewardVictory(type){

    const reward =
      MATCH_REWARDS[type];

    addCoins(reward.coins);

    awardXP(reward.xp);

    showRewardPopup(
      reward.coins,
      reward.xp
    );

}