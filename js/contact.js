function createFormModal(phName){
    const formModal = `
    <div class="modal">
        <form class="form-modal">
            <h1>Contactez-moi <br>${phName}</h1>
            <label for="firstName">Prénom</label>
            <input type="text" id="firstName" minlength="2" maxlength="20" required>
            <label for="lastName">Nom</label>
            <input type="text" id="lastName" minlength="2" maxlength="20" required>
            <label for="email">Email</label>
            <input type="email" id="email" required>
            <label for="message">Votre Message</label>
            <textarea id="message"></textarea>
            <button class="submit">Envoyer</button>
            <a class="closeModal"></a>
        </form>
        </div>
    </div>
    `;

    document.querySelector('.wrapper').insertAdjacentHTML('afterend', formModal);
    checkContact();
}

function checkContact(){
    let inputs = document.querySelectorAll('input');

    for(let input of inputs){
        input.addEventListener('blur', (e)=> {
            
            // let checkInput = e.target.checkValidity();
            // switch (input.id){
            //     case "firstName":
            //     case "lastName":
            //         console.log('nom');
            //         console.log(input.validity.)
            //     break;
            //     case "email":
            //         console.log('mail');
            //     break;
        
            //     default: console.log('erreur dev');
            //     break;
            // }
        });
    }
    
    document.querySelector(".submit").addEventListener('click', (e) => {
        let form = document.querySelector('form');
        let FD = new FormData();
        
        for (let i = 0; i < form.length -1; i++){
            FD.append(form[i].id, form[i].value);
        }
        
        for(let pair of FD.entries()) {
            console.log(pair[0]+ ', '+pair[1]);
        }
        
        e.preventDefault();
        closeModal();
        
        // let XHR = new XMLHttpRequest();

        // XHR.addEventListener('load', function(event) {
        //     alert('Ouais ! Données envoyées et réponse chargée.');
        // });
    
        // XHR.addEventListener('error', function(event) {
        //     alert('Oups! Quelque chose s\'est mal passé.');        
        // });
        
        // XHR.open();
        // XHR.send(FD);
    });

}