// variables

const cards = document.querySelector('.cards');
let tagList =[];

class Photograph{
    constructor(name, id, city, country, tags, tagline, price, portrait){
        this.name = name;
        this.id = id;
        this.city = city;
        this.country = country;
        this.tags = tags;
        this.tagline = tagline;
        this.price = price;
        this.portrait = portrait;
    }
    
    createCard() {      
    // create card Container
        let card = document.createElement('div');
        card.id = this.name;
        card.className = 'photographersCard';
        cards.appendChild(card);

    // create photographerslink
        let photographersLink = document.createElement('a');
        photographersLink.className = 'photographersCard__link';
        photographersLink.href = '#';

    // createImg

        let imgContainer = document.createElement('div');
        imgContainer.className = 'photographersCard__link__container';
        let img = document.createElement('img');
        img.className = 'photographersCard__link__container__img';
        img.src = '/images/FishEye_Photos/Sample_Photos/Photographers ID Photos/' + this.portrait;
        imgContainer.appendChild(img);
        photographersLink.appendChild(imgContainer);

    // createNameTag
        let nameTag = document.createElement('h2');
        nameTag.className = 'photographersCard__link__name';
        nameTag.textContent = this.name;
        photographersLink.appendChild(nameTag);

    // append photographersLink
        card.appendChild(photographersLink);

    // createLocalisation
        let loca = document.createElement('p');
        loca.className = 'photographersCard__loca';
        loca.textContent = this.city + ', ' + this.country;
        card.appendChild(loca);
    
    // createTagline
        let taglineTag = document.createElement('p');
        taglineTag.className = 'photographersCard__tagline';
        taglineTag.textContent = this.tagline; 
        card.appendChild(taglineTag);
    
    // createPrice
        let priceTag = document.createElement('p');
        priceTag.className = 'photographersCard__price';
        priceTag.textContent = this.price + '€/jours';
        card.appendChild(priceTag);
    
    // createTagcloud
    // create ul
        let tagsContainer = document.createElement('ul');
        tagsContainer.className = 'tags';
        for (let i = 0; i < this.tags.length; i++){
            // create Link
            let tagsBorder = document.createElement('a');
            tagsBorder.className = 'tags__border';
            tagsBorder.href='#';
            // create Li
            let tagLi = document.createElement('li');
            tagLi.textContent = '#' + this.tags[i];
            tagLi.className = 'tags__border__text';
            tagsBorder.appendChild(tagLi);

            tagsContainer.appendChild(tagsBorder);

            // append to tabList
            if (!tagList.includes(this.tags[i])){
                tagList.push(this.tags[i]);
            }
        }

        tagsContainer.className = 'tags';
        card.appendChild(tagsContainer);
    }
}

class Medias{
    constructor(date, id, image, likes, photographerId, price, tags, title){
        this.date = date;
        this.id = id;
        this.image = image;
        this.likes = likes;
        this.photographerId = photographerId;
        this.price = price;
        this.tags = tags;
        this.title = title;
    }

    createCard(){
        // create card
        let card = document.createElement('a');
        card.className = 'imgCard';
        // create Img
        let imgTag = document.createElement('img');
        imgTag.className = 'imgCard__img';
        imgTag.src = this.image;
        card.appendChild(imgTag);
        // create title
        let titleTag = document.createElement('p');
        titleTag.className = 'imgCard__title';
        titleTag.textContent = this.title;

        // create likes
        let likesTag  = document.createElement('p');
        likesTag.className = 'imgCard__likes';
        likesTag.textContent = this.like + '&#xf004'
    }
}

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

// populate PhotographerCards
function populatePhotographers(photographers){

    // create card for each
    for(const index in photographers){
        let photograph = photographers[index];    
        let newPhotograph = new Photograph(photograph.name, photograph.id, photograph.city, photograph.country, photograph.tags, photograph.tagline, photograph.price, photograph.portrait);
        newPhotograph.createCard();
    }

    //addTagsinNav 
    addTagsNav(tagList);

}

// garder jusqu'au click
function getMedias(medias){
    // console.log(medias[0]);
    let photoCard = document.querySelectorAll('.photographersCard');
    // console.log(photoCard);
    
    // event listener
    photoCard.addEventListener('click', (event, medias) => {
        console.log(this);
        // boucle pour medias
        // for(const index in medias){
        //     let mediaPhotographerId = medias[index].photographerId;
        //     let media = medias[index];
        //     let newMedias = new Medias(media.date, media.id, media.image, media.likes, media.photographerId, media.price, media.tags, media.title);
        //     // Medias.createCard(this.id)
        // }
    });
}

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
