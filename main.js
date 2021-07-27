const main = document.querySelector('main');
const nav = document.querySelector('nav');
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

// main page

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
    
    // get nav
    let navTag =  document.querySelector('nav');
    // create ul
    let tagsContainer = document.createElement('ul');
    tagsContainer.className = 'tags';
    for (let i = 0; i < tagList.length; i++){
        // create Link
        let tagsBorder = document.createElement('a');
        tagsBorder.className = 'tags__border';
        tagsBorder.href='#';
        // create li
        let tagLi = document.createElement('li');
        tagLi.textContent = '#' + tagList[i];
        tagLi.className = 'tags__border__text';
        tagsBorder.appendChild(tagLi);

        tagsContainer.appendChild(tagsBorder);
    }
    navTag.appendChild(tagsContainer);
}

function removeCardsContent(){
    
    while (cards.firstChild) {
        cards.removeChild(cards.lastChild);
    }
    
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }   
}

// photographer page
function createPersonalPage(photographers, medias){
    let photographerCard = document.querySelectorAll('.photographerCard');
    
    for(let i = 0; i < photographerCard.length; i++){
        // event listener
        photographerCard[i].addEventListener('click', (event) => {
            event.stopPropagation();
            removeCardsContent();
            
            let eventPhotographer = photographerCard[i];
            console.log(eventPhotographer);
            console.log(photographers);
            let eventId = eventPhotographer.id;
            console.log(eventId);
            
            let eventName = eventPhotographer.getAttribute('name');
            console.log(eventName);
            
            let eventNameSplit = eventName.split(' ');
            let eventFirstname = eventNameSplit[0];
            console.log(eventFirstname);
            
            // boucle pour medias
            for(let i = 0; i < medias.length; i++){
                let media = medias[i];
                let mediaPhotographererId = medias[i].photographerId;
                if(mediaPhotographererId == eventId){
                    let newMedias = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
                    console.log(newMedias);
                    newMedias.createCard(eventFirstname);
                }
            }
        });
    }
}
