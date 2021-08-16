function accesKeys(){
    let aria = document.querySelector('body').getAttribute('aria-hidden');

    if (aria == null){
        window.addEventListener('keyup', (e)=> {
        getAccesCode(e);
    });

        function getAccesCode(e){
            switch(e.key) {
                case 'Enter':
                    e.preventDefault();
                    document.activeElement.click();
                    break;
                case 'Escape':
                    if(document.querySelector('main').children[0].textContent == "Nos photographes"){
                        e.preventDefault();
                    document.querySelector('.logo').click();
                    }
                    break;
            }
        }
    } 
}
