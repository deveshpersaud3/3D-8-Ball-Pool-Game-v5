function equipTitle(id){

    if(!ownsTitle(id)) return;

    player.equippedTitle = id;

    updateDashboard();

    savePlayer();

}