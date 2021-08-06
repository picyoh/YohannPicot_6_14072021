// MAIN
let clickedTag;
let navTags;
let tagList = [];

// populate PhotographerCards
function populatePhotographers(photographers, clickedTag){

    // create card for each
    for(const index in photographers){        
        let photograph = photographers[index];
        let tagExist;
        //clicked tag check
        for(const tagName of photograph.tags){
            (clickedTag == undefined) 
                ? tagExist = true 
                : (clickedTag == tagName) 
                ? tagExist = true 
                : tagExist;
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
        listenMainPage(photographers);
}

// create navigation tags
function addTagsNav(tagList){

    const tagsInNav = `
        <ul class="tags">
        ${tagList.map(tag => `
        <li class="tags__border">
            <a class="tags__border__text" href="#${tag}">#${tag}</a>
        </li>
      `).join('')}
        </ul>
    `;

    nav.insertAdjacentHTML('afterbegin', tagsInNav);

}

// listen main page
function listenMainPage(photographers){
    
    navTags = nav.querySelectorAll('.tags__border__text');
    // event sort Tags
    for(tag of navTags) {
        tag.addEventListener('click', (e)=>{
            clickedTag = e.target.textContent.substring(1);
            removeContent();
            populatePhotographers(photographers, clickedTag);
        });
    }
}