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

        const card = `
        <a class=imgCard>
            <div class="imgCard__container">
            ${(this.image == undefined) 
                ? `<video class="imgCard__container__img controls preload="metadata">
                    <source 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.video}#t=0.1" type="video/mp4">
                    </video>` 
                : `<img class="imgCard__container__img" 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image}">`
            }
            </div>
            <span class="imgCard__title">
                <p>${this.title}</p>
                <p>${this.likes} <i class="fas fa-heart"></i></p>
            </span>
        </a>
        `;

        cards.insertAdjacentHTML('afterbegin', card);
    }
}
