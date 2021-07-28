const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const cards = document.querySelector('.cards');
let tagList = [];

// request JSON

const requestURL = '/json/FishEyeData.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    // get Json
    const fullJson = request.response;
    // get photographers from jsonObj
    const photographers = fullJson['photographers'];
    const medias = fullJson['media'];
    populatePhotographers(photographers);
    console.log(photographers);
    createPersonalPage(photographers, medias);
}

// MAIN

// populate PhotographerCards
function populatePhotographers(photographers){
    // create card for each
    for(const index in photographers){
        
        let photograph = photographers[index];    
        let newPhotographer = new Photographer(photograph.name, photograph.id, photograph.city, photograph.country, photograph.tags, photograph.tagline, photograph.price, photograph.portrait);
        newPhotographer.createCard();
        
        let indexTags = photographers[index].tags;

        // append to tabList
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
}


// PERSOPAGE

function removeContent(){

    let title = document.querySelector('h1');
    main.removeChild(title);
    header.removeChild(nav);
    
    while (cards.firstChild) {
        cards.removeChild(cards.lastChild);
    }
    
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }   
}

function createSelectMenu(){

    let filters = ['Popularité','Date','Titre'];
    let selectedFilter;
    
    (selectedFilter == undefined)
     ? selectedFilter = 'Titre'
     : selectedFilter = document.querySelector(".selectedFilter");
    
    filters = filters.filter(item => item !== selectedFilter);
    console.log(filters); 

    const selectMenu = `
            <div class="selectMenu">
                <p>Trier par</p>
                <ul>
                    <li>
                        <a class="selectedFilter">${selectedFilter}</a><button></button><i class="fas fa-angle-down"></i>
                        <ul>
                            <li><a>${filters[0]}</a></li>
                            <li><a>${filters[1]}</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            `;
    cards.insertAdjacentHTML('beforebegin', selectMenu);
}

// photographer page
function createPersonalPage(photographers, medias){
    let photographerCard = document.querySelectorAll('.photographerCard');
    
    for(let i = 0; i < photographerCard.length; i++){
        // event listener
        photographerCard[i].addEventListener('click', (event) => {
            event.stopPropagation();
            removeContent();
            
            let newBanner = new Photographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait); 
            newBanner.createBanner();
            
            // get the clicked photographer
            let eventPhotographer = photographerCard[i];
            console.log(eventPhotographer);        
            // id
            let eventId = eventPhotographer.id;
            // name
            let eventName = eventPhotographer.getAttribute('name');
            // convert to firstName for photos path
            let eventNameSplit = eventName.split(' ');
            let eventFirstname = eventNameSplit[0].replace('-', ' ');
            
            // create selectMenu
            createSelectMenu();
            
            // boucle pour medias
            for(let i = 0; i < medias.length; i++){
                let media = medias[i];
                let mediaPhotographerId = medias[i].photographerId;

                if(mediaPhotographerId == eventId){
                    let newMedias = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
                    // console.log(newMedias);
                    newMedias.createCard(eventFirstname);
                }
            }
        });
    }
}

// reload page on logo click
logo.addEventListener('click', function(){
    window.location.reload();
});

// reload when hash is undefined
window.addEventListener('hashchange', function(e){
    console.log('coucou');
    if(window.location.hash == ''){
        window.location.reload();
    }
});