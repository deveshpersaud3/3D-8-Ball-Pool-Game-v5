function equipCue(id){

    if(!ownsCue(id)) return;

    player.equippedCue = id;

    savePlayer();

}