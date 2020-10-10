let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__close');
let profileAdd = document.querySelector('.profile__edit');

let modalForm = document.querySelector('.modal__form');

let nameInput = document.querySelector('.modal__input_form-name');
let jobInput = document.querySelector('.modal__input_form-job');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function handleForm(e) {
    e.preventDefault();

    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    closeModal();
}

function handleModal() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    modal.classList.toggle("modal_open");
}

modalForm.addEventListener("submit", handleForm);

profileAdd.addEventListener("click", handleModal);
modalClose.addEventListener("click", handleModal)