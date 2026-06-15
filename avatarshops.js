function renderAvatarShop(){

    const shop =
      document.getElementById(
        "shopContent"
      );

    if(!shop) return;

    shop.innerHTML = "";

    avatars.forEach(avatar=>{

        const owned =
          ownsAvatar(avatar.id);

        shop.innerHTML += `

        <div class="shop-item">

            <h3>${avatar.id}</h3>

            <p>${avatar.rarity}</p>

            <p>${avatar.price}</p>

            <button
             onclick="${
              owned
              ?
              `equipAvatar('${avatar.id}')`
              :
              `buyAvatar('${avatar.id}')`
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