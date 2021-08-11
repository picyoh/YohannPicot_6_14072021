const nav = document.querySelector('nav');
const cards = document.querySelector('.cards');

// request JSON

function loadJson(){
    fetch('json/FishEyeData.json')
    .then(response => response.json())
    .then((response) => {
        // get Json
        const fullJson = response;
        console.log(fullJson);
        // get photographers from jsonObj
        const photographers = fullJson['photographers'];
        const medias = fullJson['media'];
        
        populatePhotographers(photographers);
        createPersonalPage(photographers, medias);
    })
    .catch(error => console.log('erreur json' + error));
}

loadJson();

function removeContent(){

    while (cards.firstChild) {
        cards.removeChild(cards.lastChild);
    }
    
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }   
}
