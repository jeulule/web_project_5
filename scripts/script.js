let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__close');
let profileAdd = document.querySelector('.profile__edit');

let modalForm = document.querySelector('.modal__form');

let nameInput = document.querySelector('.modal__input_name');
let jobInput = document.querySelector('.modal__input_job');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function handleForm(e) {
    e.preventDefault();

    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    closeModal(e);
}

function openModal() {
    
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    if(modal.classList.contains("modal__none")){
    modal.classList.remove("modal__none");
    }
    modal.classList.add("modal__open");
}

function closeModal() {

    if(modal.classList.contains("modal__open")) {
        modal.classList.remove("modal__open")
    }
    modal.classList.add("modal__none")
}

modalForm.addEventListener("submit", handleForm);

profileAdd.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal)