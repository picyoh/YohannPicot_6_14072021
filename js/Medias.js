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
        // if(this.id == eventId){

        // }
        const card = `
        <a class=imgCard>
        <img class="imgCard__img" src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image ?? this.video}">
            <p class="imgCard__title">${this.title}</p>
            <p class="imgCard__likes">${this.like}'&#xf004'</p>
        </a>
        `;
        // // create card
        // let card = document.createElement('a');
        // card.className = 'imgCard';
        // // create Img container
        // let imgContainer = document.createElement('div');
        // imgContainer.className = 'imgCard__container'
        // card.appendChild(imgContainer);
        // // create Img
        // let imgTag = document.createElement('img');
        // imgTag.className = 'imgCard__container__img';
        // imgTag.src = '/images/FishEye_Photos/Sample_Photos/' + eventFirstname + '/' + this.image;
        // // video exception
        // if (this.image == undefined){
        //     imgTag.src = imgTag.src = '/images/FishEye_Photos/Sample_Photos/' + eventFirstname + '/' + this.video;
        // }

        // imgContainer.appendChild(imgTag);
        // // create title
        // let titleTag = document.createElement('p');
        // titleTag.className = 'imgCard__title';
        // titleTag.textContent = this.title;
        // card.appendChild(titleTag);

        // // create likes
        // let likesTag  = document.createElement('p');
        // likesTag.className = 'imgCard__likes';
        // likesTag.textContent = this.like + '&#xf004';
        // card.appendChild(likesTag);
        console.log(card)
        cards.insertAdjacentHTML('beforeend', card);
    }
}
