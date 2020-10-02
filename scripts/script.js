let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__close');
let profileAdd = document.querySelector('.profile__edit');

let modalForm = document.querySelector('.modal__form');

let nameInput = document.querySelector('.input_name');
let jobInput = document.querySelector('.input_job');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function handleForm(e) {
    e.preventDefault();

    
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closeModal(e);
}

function openModal(e) {
    e.preventDefault();

    
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    modal.style.display = "flex";
}

function closeModal(e) {
    e.preventDefault();

    modal.style.display = "none";
}

modalForm.addEventListener("submit", handleForm);

profileAdd.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal)