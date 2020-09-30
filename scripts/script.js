let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__close');
let profileAdd = document.querySelector('.profile__edit');

let modalSubmit = document.querySelector(".modal__submit"); 


let modalForm = document.querySelector('.modal__form');

let nameInput = document.querySelector('.modal__input_name');
let jobInput = document.querySelector('.modal__input_job');

let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function handleForm(e) {
    e.preventDefault();

    modal.classList.toggle("modal_open")

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

modalForm.addEventListener("submit", handleForm);

profileAdd.addEventListener("click", modalToggle);
modalClose.addEventListener("click", modalToggle)

