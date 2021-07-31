const body = document.querySelector('body');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const cards = document.querySelector('.cards');
const wrapper = document.querySelector('.wrapper');
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
    photographers = fullJson['photographers'];
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
