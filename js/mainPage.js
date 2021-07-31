// MAIN
let clickedTag;
let navTags;

// populate PhotographerCards
function populatePhotographers(photographers, clickedTag){
    // create card for each
    for(const index in photographers){        
        let photograph = photographers[index];
        let tagExist;
        //si (clickedTag == undefinded || photographer.tags[x]
        for(const tagName of photograph.tags){
            (clickedTag == undefined) ? tagExist = true : (clickedTag == tagName) ? tagExist = true : tagExist;
        }

        if(tagExist){
            let newPhotographer = new Photographer(photograph.name, photograph.id, photograph.city, photograph.country, photograph.tags, photograph.tagline, photograph.price, photograph.portrait);
            newPhotographer.createCard();
        } 
        
        let indexTags = photographers[index].tags;

        // append to tagList
        for(let i = 0; i < indexTags.length; i++){
            if (!tagList.includes(indexTags[i])){
                tagList.push(indexTags[i]);
            } 
        }
    }
    //addTagsinNav 
        addTagsNav(tagList);
}

// create navigation tags
function addTagsNav(tagList){

    const tagsInNav = `
        <ul class="tags">
        ${tagList.map(tag => `
        <li class="tags__border">
            <a class="tags__border__text">#${tag}</a>
        </li>
      `).join('')}
        </ul>
    `;

    nav.insertAdjacentHTML('afterbegin', tagsInNav);
    listenMainPage();
}