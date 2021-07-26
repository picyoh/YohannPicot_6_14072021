const cards = document.querySelector('.cards');
class Medias{
    constructor(date, id, image, video, likes, photographerId, price, tags, title){
        this.date = date;
        this.id = id;
        this.image = image;
        this.video = video;
        this.likes = likes;
        this.photographerId = photographerId;
        this.price = price;
        this.tags = tags;
        this.title = title;
    }

    createCard(eventFirstname){
        // create card
        let card = document.createElement('a');
        card.className = 'imgCard';
        // create Img container
        let imgContainer = document.createElement('div');
        imgContainer.className = 'imgCard__container'
        card.appendChild(imgContainer);
        // create Img
        let imgTag = document.createElement('img');
        imgTag.className = 'imgCard__container__img';
        imgTag.src = '/images/FishEye_Photos/Sample_Photos/' + eventFirstname + '/' + this.image;
        // video exception
        if (this.image == undefined){
            imgTag.src = imgTag.src = '/images/FishEye_Photos/Sample_Photos/' + eventFirstname + '/' + this.video;
        }

        imgContainer.appendChild(imgTag);
        // create title
        let titleTag = document.createElement('p');
        titleTag.className = 'imgCard__title';
        titleTag.textContent = this.title;
        card.appendChild(titleTag);

        // create likes
        let likesTag  = document.createElement('p');
        likesTag.className = 'imgCard__likes';
        likesTag.textContent = this.like + '&#xf004';
        card.appendChild(likesTag);
        
        cards.appendChild(card);
    }
}

export {Medias};