const cards = document.querySelector('.cards');
export let tagList =[];

export class Photographer{
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
        const markup = `
        <div id= "${this.name}" class="photographerCard" value=${this.id}>
            <a class="photographersCard__link">
                <div class="photographerCard__link__container">
                    <img class="photographersCard__link__container__img" 
                    src="/images/FishEye_Photos/Sample_Photos/Photographers ID Photos/${this.portrait}">
                </div>
                <h2 class="photographersCard__link__name">${this.name}</h2>
            </a>
            <p class="photographersCard__loca">${this.city}, ${this.country}</p>
            <p class="photographersCard__tagline">${this.tagline}</p>
            <p class="photographersCard__price">${this.price}€/jours</p>
            <ul class="tags>
            ${this.tags.map(tag => `
            <li class="">#${tag}</li>
          `).join('')}
            </ul>
        </div>
        `;      
    // // create card Container
    //     let card = document.createElement('div');
    //     card.id = this.name;
    //     card.value = this.id;
    //     card.className = 'photographersCard';
    //     cards.appendChild(card);

    // // create photographerslink
    //     let photographersLink = document.createElement('a');
    //     photographersLink.className = 'photographersCard__link';
    //     photographersLink.href = '#';

    // // createImg

    //     let imgContainer = document.createElement('div');
    //     imgContainer.className = 'photographersCard__link__container';
    //     let img = document.createElement('img');
    //     img.className = 'photographersCard__link__container__img';
    //     img.src = '/images/FishEye_Photos/Sample_Photos/Photographers ID Photos/' + this.portrait;
    //     imgContainer.appendChild(img);
    //     photographersLink.appendChild(imgContainer);

    // // createNameTag
    //     let nameTag = document.createElement('h2');
    //     nameTag.className = 'photographersCard__link__name';
    //     nameTag.textContent = this.name;
    //     photographersLink.appendChild(nameTag);

    // // append photographersLink
    //     card.appendChild(photographersLink);

    // // createLocalisation
    //     let loca = document.createElement('p');
    //     loca.className = 'photographersCard__loca';
    //     loca.textContent = this.city + ', ' + this.country;
    //     card.appendChild(loca);
    
    // // createTagline
    //     let taglineTag = document.createElement('p');
    //     taglineTag.className = 'photographersCard__tagline';
    //     taglineTag.textContent = this.tagline; 
    //     card.appendChild(taglineTag);
    
    // // createPrice
    //     let priceTag = document.createElement('p');
    //     priceTag.className = 'photographersCard__price';
    //     priceTag.textContent = this.price + '€/jours';
    //     card.appendChild(priceTag);
    
    // createTagcloud
        // let tagsContainer = document.createElement('ul');
        // tagsContainer.className = 'tags';
        // for (let i = 0; i < this.tags.length; i++){
        //     // create Link
        //     let tagsBorder = document.createElement('a');
        //     tagsBorder.className = 'tags__border';
        //     tagsBorder.href='#';
        
        //     // create li
        //     let tagLi = document.createElement('li');
        //     tagLi.textContent = '#' + this.tags[i];
        //     tagLi.className = 'tags__border__text';
        //     tagsBorder.appendChild(tagLi);

        //     tagsContainer.appendChild(tagsBorder);

        //     // append to tabList
        //     if (!tagList.includes(this.tags[i])){
        //         tagList.push(this.tags[i]);
        //     }
        // }

        // tagsContainer.className = 'tags';
        // card.appendChild(tagsContainer);

    }
}
