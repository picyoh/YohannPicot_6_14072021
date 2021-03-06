// PERSOPAGE

let mediasArray = [];
let likes;
let eventFirstname;
let indexMediaArray;

function createSelectMenu(selectedFilter){
    
    let filters = ['Popularit√©','Date','Titre'];
    
    (selectedFilter == undefined)
    ? selectedFilter = 'Titre'
    : selectedFilter;
    
    filters = filters.filter(item => item !== selectedFilter);
    
    const selectMenuMarkup = `
        <span class="selectMenu">
            <p id="selectMenu">Trier par</p>
            <button aria-haspopup="listbox"
            aria-labelledby="selectMenu"     
            class="selectMenu__button">
                <ul role="listbox">
                    <li>
                        <a class="selectMenu__filters" id="selectedFilter" role="listbox" tabindex="0" 
                        aria-activedescendant="selectMenu__filters">${selectedFilter}
                        <span class="fas fa-angle-down" role="presentation"></i></a>
                    <ul tabindex="-1" aria-labelledby="selectMenu">
                        <li><a class="selectMenu__filters" role="option">${filters[0]}</a></li>
                        <li><a class="selectMenu__filters" role="option">${filters[1]}</a></li>
                    </ul>
                </li>
            </ul>
            </button>
        </span>

        `;
    cards.insertAdjacentHTML('beforebegin', selectMenuMarkup);
}

function createPersonalPage(photographers, medias){

    let photographerCard = document.querySelectorAll('.photographerCard');
    for(let i = 0; i < photographerCard.length; i++){
        // event listener
        photographerCard[i].children[0].addEventListener('click', (event) => {
            
            event.stopPropagation();
            // remove title & nav &  linkMain
            let title = document.querySelector('h1');
            document.querySelector('main').removeChild(title);
            linkMainTag = document.querySelector('.linkMain');
            document.querySelector('header').removeChild(nav);
            document.querySelector('header').removeChild(linkMainTag);
            removeContent();
            
            let picturesNumber = 0;
            let nLikes = 0;
            // let totalLikes = 0;

            // get the clicked photographer
            let eventPhotographer = photographerCard[i];
            // id
            let eventId = eventPhotographer.id;
            // name
            let eventName = eventPhotographer.getAttribute('name');
            // convert to firstName for photos path
            let eventNameSplit = eventName.split(' ');
            eventFirstname = eventNameSplit[0].replace('-', ' ');
            
            createSelectMenu();
            
            // boucle pour medias
            for(let i = 0; i < medias.length; i++){
                let media = medias[i];
                // totalLikes += media.likes;
                let mediaPhotographerId = media.photographerId;

                // sorts medias / id
                if(mediaPhotographerId == eventId){
                    let newMedias = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title, media.alt);
                    newMedias.createCard(eventFirstname);

                    // set mediasArray
                    mediasArray.push(newMedias);

                    picturesNumber++; 
                    // add likes
                    nLikes += media.likes;
                }
            }

            let newBanner = new Photographer(photographers[i].name, photographers[i].id, photographers[i].city, photographers[i].country, photographers[i].tags, photographers[i].tagline, photographers[i].price, photographers[i].portrait, photographers[i].alt); 
            newBanner.createBanner(picturesNumber, nLikes);
            listenPersonalPage();
        });
    }

}
