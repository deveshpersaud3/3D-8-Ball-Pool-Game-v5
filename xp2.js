function awardXP(amount){

    player.xp += amount;

    while(
       player.xp >= xpRequired(player.level)
    ){

        player.xp -= xpRequired(player.level);

        player.level++;

        levelUp();
    }

    updateDashboard();

    savePlayer();

}