// listen window

// reload page on logo click
document.querySelector('.logo').addEventListener('click',(e)=>{
    window.location.assign('');
});

// reload when hash is undefined
window.addEventListener('hashchange', (e)=>{
    if(window.location.hash == ''){
        window.location.assign('');
    }
});

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
    selectMenuFilters = document.querySelectorAll('.selectMenu__filters');
    
    for(selectMenuFilter of selectMenuFilters){
        selectMenuFilter.addEventListener('click',(e)=> {
            selectedFilter = e.target.textContent;
            sortingMedias(selectedFilter);
        });
    }

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
            let mediaTitle = mediaTarget.children[1].children[0].textContent;
            // comparer titre
            for(indexMedia in mediasArray){
                let media = mediasArray[indexMedia];
                let comparedMediaTitle = mediasArray[indexMedia].title;
                if (mediaTitle == comparedMediaTitle){
                    let lightBoxImg = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
                    lightBoxImg.createLightbox(eventFirstname);
                    lightboxControls(indexMedia); 
                    closeModal();
                }
            }
        });
    }
}

function sortingMedias(selectedFilter){
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
    let selectMenu = document.querySelector('.selectMenu');
    document.querySelector('main').removeChild(selectMenu);
    createSelectMenu(selectedFilter);
    
    // createMedias wth mediasArray
    for(index in mediasArray){
        let media = mediasArray[index];
        let newMedias = new Medias(media.date, media.id, media.image, media.video,media.likes, media.photographerId, media.price, media.tags, media.title);
        newMedias.createCard(eventFirstname);
    }

    listenPersonalPage();
}

function lightboxControls(indexMedia){
    
    let maxArray = mediasArray.length;
    
    // keyboards events

    window.addEventListener('keyup', (e)=> {
        getKeyboardCode(e);
    });

    function getKeyboardCode(e){
        (e.key == 'ArrowLeft')
        ? movingLeft()
        : (e.key == 'ArrowRight')
            ? movingRight()
            :'';
    }

    // click events
    let left = document.querySelector('#left');
    left.addEventListener('click', (e)=>{
        movingLeft();
    }); 

    let right = document.querySelector('#right');
    right.addEventListener('click', (e)=>{
        movingRight();
    }); 
    
    function movingLeft(){

        (indexMedia > 0)
        ? indexMedia--  
        : indexMedia = maxArray -1;

        switchImages(indexMedia);
    }

    function movingRight(){

        (indexMedia < maxArray -1)
        ? indexMedia++
        : indexMedia = 0;

        switchImages(indexMedia);
    }
}

function switchImages(indexMedia){
    // remove media
    let container = document.querySelector('.lightbox-modal__container');
    let image = container.children[0];
    container.removeChild(image);
    
    let lightbox = document.querySelector('.lightbox-modal');
    let title = document.querySelector('.lightbox-modal__title');
    
    let media = mediasArray[indexMedia];
    title.textContent = media.title;
    
    let newLightboxContent = `
    ${(media.image == undefined) 
        ? `<video class="lightbox-modal__container__img" preload="metadata" controls>
            <source 
                src="FishEye_Photos/Sample_Photos/${eventFirstname}/${media.video}" type="video/mp4">
            </video>` 
        : `<img class="lightbox-modal__container__img" 
                src="FishEye_Photos/Sample_Photos/${eventFirstname}/${media.image}">`
    }`;

    container.insertAdjacentHTML('afterbegin', newLightboxContent);
}



function closeModal(){

    let modalTag = document.querySelector('.modal');
    let closeModalTag = document.querySelector('.closeModal');
    
    closeModalTag.addEventListener('click', (e) => {
        document.querySelector('body').style= '';
        document.querySelector('body').removeChild(modalTag);
    });
}
