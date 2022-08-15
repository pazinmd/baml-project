console.log("Всё сработало!");
// начало работы с формой по редактированию имени и подписи
const profileInfoEditButton = document.querySelector(".profile__info-edit");
const profileInfoCloseButton = document.querySelector(
  ".popup__close-button-profile"
);
let popupProfileEdit = document.querySelector(".popup__profile-edit");
let inputCaption = document.querySelector(".popup__input_data-caption");
let inputName = document.querySelector(".popup__input_data-name");

function popupProfileCloseClick() {
  popupProfileEdit.style.visibility = "hidden";
  popupProfileEdit.style.opacity = "0";
}

function popupProfileEditClick() {
  popupProfileEdit.style.visibility = "visible";
  popupProfileEdit.style.opacity = "1";
  inputName.value = document.querySelector(".profile__info-name").textContent;
  inputCaption.value = document.querySelector(
    ".profile__info-caption"
  ).textContent;
}

profileInfoEditButton.addEventListener("click", popupProfileEditClick);
profileInfoCloseButton.addEventListener("click", popupProfileCloseClick);

// Конец работы с формой по редактированию имени и подписи

// начало работы с формой по редактированию имени и подписи

const addPlaceAddButton = document.querySelector(".profile__add-picture");
const addPlaceCloseButton = document.querySelector(
  ".popup__close-cards-add-button"
);
let popupAddPlace = document.querySelector(".popup__add-place");

function popupAddPlaceClick() {
  popupAddPlace.style.visibility = "visible";
  popupAddPlace.style.opacity = "1";
}

function popupAddPlaceCloseClick() {
  popupAddPlace.style.visibility = "hidden";
  popupAddPlace.style.opacity = "0";
}

addPlaceAddButton.addEventListener("click", popupAddPlaceClick);
addPlaceCloseButton.addEventListener("click", popupAddPlaceCloseClick);

// Удаляем карточки

function delHandler(event) {
  const placesList = document.querySelector("section.cards");
  placesList.removeChild(event.target.parentNode);
  event.stopPropagation();
}

document.querySelectorAll(".card__delete-button").forEach((item) => {
  item.addEventListener("click", delHandler);
});


