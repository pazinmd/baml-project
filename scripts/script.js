const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//// 1. Объявляем переменные

//popupImage variables
const popupImage = document.querySelector(".popup-picture-viewer");
const popupImageCloseButton = popupImage.querySelector(".popup__close-button");
const popupImageCaption = popupImage.querySelector(".popup__figure-caption");
const popupImagePicture = popupImage.querySelector(".popup__figure-image");

const popupAddPlace = document.querySelector(".popup-add-card");
const formAddPlace = document.querySelector('.popup__form[name="cards-add"]');
const popupAddPlaceSubmitButton = popupAddPlace.querySelector(
  ".popup__save-button"
);

//profile edit variables
const popupProfileEdit = document.querySelector(".popup-profile-edit");

// profile info edit variables
const profileInfoEditButton = document.querySelector(".profile__info-edit");
const profileInfoCloseButton = popupProfileEdit.querySelector(
  ".popup__close-button"
);

const inputCaption = document.querySelector(".popup__input_data-caption");
const profileEditSaveButton = document.querySelector(".popup__save-button");
const inputName = document.querySelector(".popup__input_data-name");
const formProfileEdit = document.querySelector(
  '.popup__form[name="profile-edit"]'
);
const nameInput = formProfileEdit.querySelector(".popup__input_data-name");
const captionInput = formProfileEdit.querySelector(
  ".popup__input_data-caption"
);
const profileName = document.querySelector(".profile__info-name");
const profileCaption = document.querySelector(".profile__info-caption");

// template variables
const cardTemplate = document.querySelector(".template-card").content;
const cardsContainer = document.querySelector(".cards");

//profile add picture var
const addPlaceAddButton = document.querySelector(".profile__add-picture");
const addPlaceCloseButton = popupAddPlace.querySelector(".popup__close-button");

//// 2. Пишем функции обработчики

// Создаем функцию по открытию попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
// Создаем функцию по закрытию попапов
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// функции по открытию и закрытию попапа добавления карточек
function openAddPlacePopup() {
  openPopup(popupAddPlace);
}

function closeAddPlacePopup() {
  closePopup(popupAddPlace);
}

// Функция по открытию попапа с изображением в режиме просмотра
function openCard(event) {
  openPopup(popupImage);
  const srcOfEvent = event.target.src;
  const altOfEvent = event.target.alt;
  const card = event.target.closest(".card");
  const cardCaption = card.querySelector(".card__info-name");
  popupImageCaption.textContent = cardCaption.textContent;
  popupImagePicture.src = srcOfEvent;
  popupImagePicture.alt = altOfEvent;
  event.stopPropagation();
}

// Функция для нажатия крестика в попапе с просмотром.
function closeImagePopup() {
  closePopup(popupImage);
}

// функция по открытия попапа редактирования информации
function openProfileEdit() {
  openPopup(popupProfileEdit);
  inputName.value = document.querySelector(".profile__info-name").textContent;
  inputCaption.value = document.querySelector(
    ".profile__info-caption"
  ).textContent;
}
// функция по закрытию попапа редактирования информации без изменений
function closePopupProfileEdit() {
  closePopup(popupProfileEdit);
}

// функция для отправки значений name и caption по нажатию кнопки сохранить в форме по редактированию информации
function saveProfileInfo(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCaption.textContent = captionInput.value;
  closePopup(popupProfileEdit);
}

// функция создания карточки из template в HTML. Пишем функцию создания карточек.
function createCard(name, link, prepend = false) {
  let newElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardImage = newElement.querySelector(".card__image");
  let cardName = newElement.querySelector(".card__info-name");
  let delCard = newElement.querySelector(".card__delete-button");
  cardImage.addEventListener("click", openCard);

  newElement
    .querySelector(".card__info-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__info-like_liked");
    });

  delCard.addEventListener("click", function () {
    newElement.remove();
  });

  cardImage.src = link;
  cardImage.alt = "Изображение " + name;
  cardName.textContent = name;

  if (prepend) {
    cardsContainer.prepend(newElement);
  } else {
    cardsContainer.appendChild(newElement);
  }
}

// пишем функцию по добавлению карточек
function addCard() {
  for (let i = 0; i < initialCards.length; i++) {
    const data = initialCards[i];
    const name = data.name;
    const link = data.link;
    createCard(name, link, (prepend = false));
  }
}

// функция для добавления карточек из соответствующего попапа

function addCustomCard(event) {
  event.preventDefault();
  const nameOfPlace = formAddPlace.querySelector(
    ".popup__input_place-name"
  ).value;
  const linkOfImage = formAddPlace.querySelector(
    ".popup__input_place-link"
  ).value;
  createCard(nameOfPlace, linkOfImage, (prepend = true));
  closeAddPlacePopup();
  event.target.reset();
}

// слушатели

// слушаем нажатие кнопки редактировать и закрыть форму редактирования
profileInfoEditButton.addEventListener("click", openProfileEdit);

// слушаем нажатие кнопки сохранить
formProfileEdit.addEventListener("submit", saveProfileInfo);

// слушаем нажатие кнопки по добавлению пользовательской картинки на страницу
formAddPlace.addEventListener("submit", addCustomCard);

//слушаем нажатие на закрытие карточки
popupImageCloseButton.addEventListener("click", closeImagePopup);

// слушаем нажатие на закрытие попапа с редактированием информации о пользователе
profileInfoCloseButton.addEventListener("click", closePopupProfileEdit);

// слушатели нажатий на открыть и закрыть форму добавления карточек
addPlaceAddButton.addEventListener("click", openAddPlacePopup);

// слушаем нажатие на крестик в форме добавления карточек
addPlaceCloseButton.addEventListener("click", closeAddPlacePopup);
// добавляем карточки в проект
addCard();
