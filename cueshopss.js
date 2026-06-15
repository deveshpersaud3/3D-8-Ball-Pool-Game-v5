function renderCueShop(){

    const shop =
      document.getElementById(
        "shopContent"
      );

    if(!shop) return;

    shop.innerHTML = "";

    cues.forEach(cue=>{

        const owned =
          ownsCue(cue.id);

        shop.innerHTML += `

        <div class="shop-item">

            <h3>${cue.name}</h3>

            <p>${cue.rarity}</p>

            <p>${cue.price} Coins</p>

            <button
             onclick="${
               owned
               ?
               `equipCue('${cue.id}')`
               :
               `buyCue('${cue.id}')`
             }"
            >

            ${
             owned
             ?
             "Equip"
             :
             "Buy"
            }

            </button>

        </div>

        `;

    });

}