const main = document.querySelector('main');
const nav = document.querySelector('nav');

// import classes
import {Photographer, tagList} from "./modules/Photographer.js";
import {Medias} from "./modules/Medias.js";

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
    getMedias(medias);
    
}

// main page
// populate PhotographerCards
function populatePhotographers(photographers){

    // create card for each
    for(const index in photographers){
        let photograph = photographers[index];    
        let newPhotographer = new Photographer(photograph.name, photograph.id, photograph.city, photograph.country, photograph.tags, photograph.tagline, photograph.price, photograph.portrait);
        newPhotographer.createCard();
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


// photographer page
// garder jusqu'au click
function getMedias(medias){
    
    let photoCard = document.querySelectorAll('.photographersCard');
    
    for(let i = 0; i < photoCard.length; i++){
        // event listener
    photoCard[i].addEventListener('click', (event, medias) => {
        event.stopPropagation();
        let eventPhotographer = photoCard[i];
        console.log(eventPhotographer);

        compareIds(eventPhotographer);
    });
}

    function compareIds(eventPhotographer){

        removeCardsContent(eventPhotographer);
        
        let eventId = eventPhotographer.value;
        console.log(eventId);
        let eventName = eventPhotographer.id;
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
    }

}

function removeCardsContent(eventPhotographer){

    while (main.firstChild) {
        main.removeChild(main.lastChild);
    }
    
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }

    let cards = document.createElement('div');
    cards.className = 'cards';
    createPersonalPage(eventPhotographer);
}

function createPersonalPage(eventPhotographer){
    
    // create banner
    let banner = document.createElement('div');
    banner.className = 'banner';
    main.appendChild(banner);
    
    // get n append personal Banner
    let personalBanner = eventPhotographer;
    banner.appendChild(personalBanner); 
}
