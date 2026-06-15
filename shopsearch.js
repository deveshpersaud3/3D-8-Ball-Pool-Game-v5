function searchShop(term){

    term = term.toLowerCase();

    return cues.filter(c=>

        c.name
        .toLowerCase()
        .includes(term)

    );

}