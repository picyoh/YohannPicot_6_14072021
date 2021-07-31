function createFormModal(phName){
    const formModal = `
    <div class="modal">
        <form class="form-modal">
            <h1>Contactez-moi <br>${phName}</h1>
            <label for="firstName">Prénom</label>
            <input type="text" id="firstName">
            <label for="lastName">Nom</label>
            <input type="text" id="lastName">
            <label for="email">Email</label>
            <input type="text" id="email">
            <label for="message">Votre Message</label>
            <textarea id="message"></textarea>
            <button class="submit">Envoyer</button>
            <a class="closeModal"></a>
        </form>
        </div>
    </div>
    `;

    wrapper.insertAdjacentHTML('afterend', formModal);
}