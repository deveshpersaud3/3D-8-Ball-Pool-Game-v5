function rewardLevelUnlocks(){

    switch(player.level){

        case 5:

            player.inventory.titles.push(
              "challenger"
            );

            break;

        case 10:

            player.inventory.cues.push(
              "midnight_gold"
            );

            break;

        case 25:

            player.inventory.titles.push(
              "bank_king"
            );

            break;
    }

}