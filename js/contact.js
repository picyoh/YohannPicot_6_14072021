function createFormModal(phName){
    document.querySelector('main').setAttribute('aria-hidden', 'true');
    
    const formModal = `
    <div class="modal" role="dialog" aria-describedby="">
        <form method="post" action="" class="form-modal">
            <h1>Contactez-moi <br>${phName}</h1>
            <label for="firstName">Prénom</label>
            <input type="text" id="firstName" minlength="2" maxlength="20" aria-labelledby="prenom" aria-describedby="entrez votre prénom" required>
            <label for="lastName">Nom</label>
            <input type="text" id="lastName" minlength="2" maxlength="20" aria-labelledby="nom" aria-describedby="entrez votre nom" required>
            <label for="email">Email</label>
            <input type="email" id="email" aria-labelledby="email" aria-describedby="entrez votre email" required>
            <label for="message">Votre Message</label>
            <textarea id="message"></textarea>
            </fieldset>
            <button class="submit">Envoyer</button>
            <a class="closeModal" aria-label="fermer la modale"></a>
        </form>
        </div>
    </div>
    `;

    document.querySelector('body').insertAdjacentHTML('beforeend', formModal);
    checkContact();
}

function checkContact(){
 
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
    });

}