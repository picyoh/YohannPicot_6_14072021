// listen window

// reload page on logo click
logo.addEventListener('click', function(){
    window.location.reload();
});

// reload when hash is undefined
window.addEventListener('hashchange', function(e){
    if(window.location.hash == ''){
        window.location.reload();
    }
});

// listen main page
function listenMainPage(){
    
    navTags = nav.querySelectorAll('.tags__border__text');
    // event sort Tags
    for(tag of navTags) {
        tag.addEventListener('click', (e)=>{
            clickedTag = e.target.textContent.substring(1);
            removeContent();
            populatePhotographers(photographers, clickedTag);
        });
    }
}

// listen personal page
function listenPersonalPage(){

    // likes increment
    likes = document.querySelectorAll('.likes');
    
    for(like of likes){
        like.addEventListener('click',(e)=>{
            e.target.parentNode.firstChild.textContent++;
            document.querySelector('.totalLikes').textContent++;
        });
    }

    // selectMenu
    selectMenu = document.querySelector('.selectMenu');
    
    selectMenu.addEventListener('click',(e)=> {
        selectedFilter = e.target.textContent;
        sortingMedias(selectedFilter);
    });

    // contact
    let contactButton = document.querySelector('.contactButton');
    
    contactButton.addEventListener('click',(e)=> {
        let phName = document.querySelector('h1').textContent;
        createFormModal(phName);
        closeModal(); 
    });

    // lightbox
    let mediaCardTags = document.querySelectorAll('.mediaCard__container');
    for(mediaCardTag of mediaCardTags){
        mediaCardTag.addEventListener('click', (e)=>{
            let mediaTarget = e.target.parentNode.parentNode;
            console.log(mediaTarget);
            let mediaTitle = mediaTarget.children[1].children[0].textContent;
            console.log(mediaTitle);
            // comparer titre
            for(indexMedia in mediasArray){
                let media = mediasArray[indexMedia];
                let comparedMediaTitle = mediasArray[indexMedia].title;
                if (mediaTitle == comparedMediaTitle){
                    let lightBoxImg = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
                    lightBoxImg.createLightbox(eventFirstname);    
                }
                // récupérer index pour next prev
                indexMediaArray = indexMedia;
                // lightboxControls(indexMediaArray);
            }
        });
        // closeModal();
    }
}

function sortingMedias(selectedFilter){
    console.log(selectedFilter);
    switch(selectedFilter){
        case 'Titre':
            for(obj of mediasArray){
                mediasArray.sort((a, b)=> (b.title).localeCompare(a.title));
            }
            break;

            case 'Popularité':
            for(obj of mediasArray){
                mediasArray.sort((a, b)=> (a.likes) - (b.likes));
            }
            break;

        case 'Date':
            for(obj of mediasArray){
                mediasArray.sort((a, b)=> new Date(b.date) - new Date(a.date));
            }
            break;

        default:
            console.log('erreur sorting medias');
    }
    // remove content
    removeContent();
    // create selectmenu
    main.removeChild(selectMenu);
    createSelectMenu(selectedFilter);
    // createMedias wth mediasArray
    for(index in mediasArray){
        let media = mediasArray[index];
        let newMedias = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
        newMedias.createCard(eventFirstname);
    }
    listenPersonalPage();
}

function lightboxControls(indexMediaArray){
    
    let left = document.querySelector('#left');
    console.log(left);
    left.addEventListener('click',(e)=>{
        indexMediaArray--;
    });

    let right = document.querySelector('#right');
    right.addEventListener('click', (e) => {
        indexMediaArray++;
    });

    let media = mediasArray[indexMediaArray];
    let lightBoxImg = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
    lightBoxImg.createLightbox(eventFirstname);

    listenPersonalPage();  
}

function closeModal(){

    let modalTag = document.querySelector('.modal')
    let closeModalTag = document.querySelector('.closeModal');
        closeModalTag.addEventListener('click', (e) => {
        body.removeChild(modalTag);

    });
}
