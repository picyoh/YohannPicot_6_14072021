class Medias{
    constructor(date, id, image, video, likes, photographerId, price, tags, title, alt){
        this.date = date;
        this.id = id;
        this.image = image;
        this.video = video;
        this.likes = likes;
        this.photographerId = photographerId;
        this.price = price;
        this.tags = tags;
        this.title = title;
        this.alt = alt;
    }

    createCard(eventFirstname){

        const card = `
        <a class=mediaCard>
            <div class="mediaCard__container">
            ${(this.image == undefined) 
                ? `<video class="mediaCard__container__img" preload="metadata">
                    <source 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.video}#t=0.1" type="video/mp4">
                    </video>` 
                : `<img class="mediaCard__container__img" 
                        src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image}"
                        alt="${this.alt}"
                        tabindex="0"
                        role="button">`
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

        document.querySelector('main').setAttribute('aria-hidden', 'true');

        const lightboxMarkup = `
        <div class="modal" role="dialog" aria-describedby="lightbox-modal__title">
            <div class="lightbox-modal">
                <a class="lightbox-modal__chevron" tabindex="0" role="button">
                    <i id="left" class="fas fa-chevron-left"></i>
                </a>
                <div class="lightbox-modal__container">
                    ${(this.image == undefined) 
                        ? `<video class="lightbox-modal__container__img" preload="metadata" controls>
                            <source 
                                src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.video}" type="video/mp4">
                            </video>` 
                        : `<img class="lightbox-modal__container__img" 
                                src="FishEye_Photos/Sample_Photos/${eventFirstname}/${this.image}"
                                alt="${this.alt}"
                                tabindex="0">`
                    }
                </div>
                <a class="lightbox-modal__chevron" tabindex="0" role="button">
                    <i id="right" class="fas fa-chevron-right"></i>
                </a>
                <p class="lightbox-modal__title">${this.title}</p>
                <div class="closeModal"></div>
            </div>
        </div>
        `;
        document.querySelector('body').insertAdjacentHTML('beforeend', lightboxMarkup);
        
        // stop scroll
        document.querySelector('body').style.overflow = "hidden";
    }
}