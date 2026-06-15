function equipAvatar(id){

    if(!ownsAvatar(id)) return;

    player.equippedAvatar = id;

    updateDashboard();

    savePlayer();

}