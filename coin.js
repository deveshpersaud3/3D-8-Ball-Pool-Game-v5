function addCoins(amount){

    player.coins += amount;

    updateDashboard();

    savePlayer();

}