function accesKeys(){
    let aria = document.querySelector('body').getAttribute('aria-hidden');
    console.log(aria);


    if (aria == null){
        console.log('acces');
        window.addEventListener('keyup', (e)=> {
        getAccesCode(e);
        console.log(e.key);
        console.log(document.activeElement);
    });

        function getAccesCode(e){
            switch(e.key) {
                case 'ArrowLeft':
                    e.key('Tab') = true;
                    break;
                case 'ArrowDown':
                    break;
                case 'ArrowRight':
                    break;
                case 'ArrowUp':
                    break;
                case 'Enter':
                    e.preventDefault();
                    document.activeElement.click();
                    break;
                case 'Escape':
                    e.preventDefault();
                    document.referrer;

            }
        }
    } 
}

function nextField(){

}

function previousField(){

}