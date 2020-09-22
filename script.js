// console.log("welcome to the hotel california")
let modal = document.querySelector(".modal");
let modalClose = document.querySelector('.modal__btn');
let profileAdd = document.querySelector('.profile__edit');

let modalSubmit = document.querySelector(".modal__submit"); 


let modalForm = document.querySelector('.modal__form');

const nameInput = document.querySelector('#modalName');
const jobInput = document.querySelector('#modalJob');

const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function modalToggle() {
    // console.log("open")
    modal.classList.toggle("modal__open")
}

function handleForm(e) {
    e.preventDefault();

    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    modalToggle();
}

modalForm.addEventListener("submit", handleForm);

profileAdd.addEventListener("click", modalToggle);
modalClose.addEventListener("click", modalToggle)

