function savePlayer(){

    localStorage.setItem(
        "midnightPlayer",
        JSON.stringify(player)
    );

}

function loadPlayer(){

    const save =
      localStorage.getItem("midnightPlayer");

    if(!save) return;

    Object.assign(
      player,
      JSON.parse(save)
    );

}