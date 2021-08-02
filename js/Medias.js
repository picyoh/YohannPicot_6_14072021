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
        <a class=mediaCard>
            <div class="mediaCard__container">
            ${(this.image == undefined) 
                ? `<video class="mediaCard__container__img controls preload="metadata">
                    <source 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.video}#t=0.1" type="video/mp4">
                    </video>` 
                : `<img class="mediaCard__container__img" 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image}">`
            }
            </div>
            <span class="mediaCard__title">
                <p>${this.title}</p>
                <div class="likes"><p>${this.likes}</p><i class="fas fa-heart"></i></div>
            </span>
        </a>
        `;

        cards.insertAdjacentHTML('afterbegin', card);
    }

    createLightbox(eventFirstname){
        
        const lightboxMarkup = `
        <div class="lightbox-modal">
            <a class="lightbox-modal__chevron">
                <i id="left" class="fas fa-chevron-left"></i>
            </a>
            <div class="lightbox-modal__container">
                ${(this.image == undefined) 
                    ? `<video class="lightbox-modal__container__img controls preload="metadata">
                        <source 
                            src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.video}#t=0.1" type="video/mp4">
                        </video>` 
                    : `<img class="lightbox-modal__container__img" 
                            src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image}">`
                }
            </div>
            <a class="lightbox-modal__chevron">
                <i id="right" class="fas fa-chevron-right"></i>
            </a>
            <p class="lightbox-modal__title">${this.title}</p>
            <div class="closeModal"></div>
        </div>
        `;
        document.querySelector('.wrapper').insertAdjacentHTML('afterend', lightboxMarkup);
    }
}
