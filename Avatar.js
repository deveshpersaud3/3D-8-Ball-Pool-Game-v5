function buyAvatar(id){

    const avatar =
      avatars.find(a=>a.id===id);

    if(!avatar) return;

    if(player.coins < avatar.price){

        alert("Not enough coins");

        return;
    }

    addCoins(-avatar.price);

    player.inventory.avatars.push(id);

    savePlayer();

    renderAvatarShop();

}