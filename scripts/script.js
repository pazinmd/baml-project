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
const closeButtons = document.querySelectorAll(".popup__close-button");
//popupImage variables
const popupImage = document.querySelector(".popup-picture-viewer");
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
const placeNameInput = document.querySelector(".popup__input_place-name");
const placeLinkInput = document.querySelector(".popup__input_place-link");

// template variables
const cardsContainer = document.querySelector(".cards");

//profile add picture var
const addPlaceAddButton = document.querySelector(".profile__add-picture");

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

// функция по открытия попапа редактирования информации
function openProfileEdit() {
  openPopup(popupProfileEdit);
  inputName.value = profileName.textContent;
  inputCaption.value = profileCaption.textContent;
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
  const cardTemplate = document
    .querySelector(".template-card")
    .content.querySelector(".card")
    .cloneNode(true);
  cardTemplate.querySelector(".card__info-name").textContent = name;
  cardTemplate.querySelector(".card__image").src = link;
  cardTemplate.querySelector(".card__image").alt = "Изображение " + name;
  cardTemplate
    .querySelector(".card__info-like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__info-like_liked");
    });
  cardTemplate
    .querySelector(".card__delete-button")
    .addEventListener("click", function () {
      cardTemplate.remove();
    });
  cardTemplate
    .querySelector(".card__image")
    .addEventListener("click", openCard);

  if (prepend) {
    cardsContainer.prepend(cardTemplate);
  } else {
    cardsContainer.appendChild(cardTemplate);
  }
}

// пишем функцию по добавлению карточек
function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    createCard(initialCards[i].name, initialCards[i].link);
  }
}

// функция для добавления карточек из соответствующего попапа

function addCustomCard(event) {
  event.preventDefault();
  createCard(placeNameInput.value, placeLinkInput.value, true);
  closePopup(popupAddPlace);
  event.target.reset();
}
// обрабатываем нажатия на каждый крестик в проекте
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// слушатели

// слушаем нажатие кнопки редактировать и закрыть форму редактирования
profileInfoEditButton.addEventListener("click", openProfileEdit);

// слушаем нажатие кнопки сохранить
formProfileEdit.addEventListener("submit", saveProfileInfo);

// слушаем нажатие кнопки по добавлению пользовательской картинки на страницу
formAddPlace.addEventListener("submit", addCustomCard);

// слушаем открытие формы добавления карточек
addPlaceAddButton.addEventListener("click", openAddPlacePopup);

// добавляем карточки в проект
renderCards();
