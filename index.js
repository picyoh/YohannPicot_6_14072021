const nav = document.querySelector('nav');
const cards = document.querySelector('.cards');

// request JSON

const requestURL = 'json/FishEyeData.json';
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
    createPersonalPage(photographers, medias);
}

function removeContent(){

    while (cards.firstChild) {
        cards.removeChild(cards.lastChild);
    }
    
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }   
}
