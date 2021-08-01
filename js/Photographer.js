class Photographer{
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
    
    createCard(){
        const card = `
        <div id= "${this.id}" class="photographerCard" name="${this.name}">
            <a class="photographerCard__link" href="#${(this.name).replace(' ', '_')}">
                <div class="photographerCard__link__container">
                    <img class="photographerCard__link__container__img" 
                    src="FishEye_Photos/Sample_Photos/Photographers ID Photos/${this.portrait}">
                </div>
                <h2 class="photographerCard__link__name">${this.name}</h2>
            </a>
            <p class="photographerCard__loca">${this.city}, ${this.country}</p>
            <p class="photographerCard__tagline">${this.tagline}</p>
            <p class="photographerCard__price">${this.price}€/jour</p>
            <ul class="tags">
            ${this.tags.map(tag => `
            <a class="tags__border">
            <li class="tags__border__text">#${tag}</li>
            </a>
          `).join('')}
            </ul>
        </div>
        `;   
        cards.insertAdjacentHTML('beforeend', card);
    }

    createBanner(pictureNumbers, nLikes){

        const banner = `
        <div class="banner">
            <h1>${this.name}</h1>
            <p class="banner__loca">${this.city}, ${this.country}</p>
            <p class="banner__tagline">${this.tagline}</p>
            <ul class="tags">
            ${this.tags.map(tag => `
            <a class="tags__border">
            <li class="tags__border__text">#${tag}</li>
            </a>
          `).join('')}
            </ul>
            <button class="contactButton">Contactez-moi</button>
            <div class="banner__container">
                <img class="banner__container__img"
                src="FishEye_Photos/Sample_Photos/Photographers ID Photos/${this.portrait}">
            </div>
        </div>
        `;
        main.insertAdjacentHTML('afterbegin', banner);

        const additional= `
        <div class="additional">
            <p>${pictureNumbers}<i class="far fa-image"></i></p>
            <span>
                <p class="totalLikes">${nLikes}</p>
                <i class="fas fa-heart"></i>
            </span> 
            <p>${this.price}€/jour</p>
            </div>
        </div>
        `;
        cards.insertAdjacentHTML('beforeend', additional);
    }
}
