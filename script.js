console.log("Всё сработало!");

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
  ];





// Добавляем карточки на страницу. Пишем функцию создания карточек.
function addCard() {

  for (let i = 0; i < initialCards.length; i++) {
      const data = initialCards[i];
      const name = data.name;
      const link = data.link;
      createCard(name, link);
  }
}
// Создаем карточку из template в HTML. Пишем функцию создания карточек.
function createCard (name, link) {
  const cardTemplate = document.querySelector('.template-card').content;
  const cardsContainer = document.querySelector('.cards');
  const newElement = cardTemplate.querySelector('.card').cloneNode(true);
  // console.log(newElement);
  const cardLink = newElement.querySelector('.card__image');
  const cardName = newElement.querySelector('.card__info-name');
  cardLink.src = link;
  cardLink.alt = 'Изображение ' + name;
  cardName.textContent = name;
  cardsContainer.appendChild(newElement);
}
//Вызываем функцию создания карточек в DOM
addCard();
// Конец работы с карточками
//___________________________




// начало работы с формой по редактированию имени и подписи
const profileInfoEditButton = document.querySelector(".profile__info-edit");
const profileInfoCloseButton = document.querySelector(".popup__close-button-profile");
const popupProfileEdit = document.querySelector(".popup__profile-edit");
const inputCaption = document.querySelector(".popup__input_data-caption");
const profileEditSaveButton = document.querySelector('.popup__save-button')
const inputName = document.querySelector(".popup__input_data-name");
//пишем функцию обработчик нажатия кнопки "редактировать"
function popupProfileCloseClick() {
  popupProfileEdit.style.visibility = "hidden";
  popupProfileEdit.style.opacity = "0";
}
//пишем функцию обработчик нажатия кнопки "редактировать"
function popupProfileEditClick() {
  popupProfileEdit.style.visibility = "visible";
  popupProfileEdit.style.opacity = "1";
  inputName.value = document.querySelector(".profile__info-name").textContent;
  inputCaption.value = document.querySelector(".profile__info-caption").textContent;
}
// слушаем нажатие кнопки редактировать и закрыть форму редактирования 
profileInfoEditButton.addEventListener("click", popupProfileEditClick);
profileInfoCloseButton.addEventListener("click", popupProfileCloseClick);
// Конец работы с формой по редактированию имени и подписи
//___________________________




// работа с именем и подписью. обработчик кнопки submit
const formElement = document.querySelector('.popup__form[name="profile-edit"]');
const nameInput = formElement.querySelector('.popup__input_data-name');
const captionInput = formElement.querySelector('.popup__input_data-caption');
const profileName = document.querySelector('.profile__info-name');
const profileCaption = document.querySelector('.profile__info-caption');

// Пишем функцию для отправки значений name и caption по нажатию кнопки сохранить
function formSubmitHandler (evt) {
 evt.preventDefault(); 
profileName.textContent = nameInput.value;
profileCaption.textContent = captionInput.value;
popupProfileEdit.style.visibility = "hidden";
popupProfileEdit.style.opacity = "0";
}
// слушаем нажатие кнопки сохранить
formElement.addEventListener('submit', formSubmitHandler);
// конец работы с именем и подписью. обработчик кнопки submit
//___________________________



// начало работы с формой по добавлению карточек
const addPlaceAddButton = document.querySelector(".profile__add-picture");
const addPlaceCloseButton = document.querySelector(".popup__close-cards-add-button");
const popupAddPlace = document.querySelector(".popup__add-place");

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
// слушаем нажатия на кнопку удалить в каждой карточке
document.querySelectorAll(".card__delete-button").forEach((item) => {
  item.addEventListener("click", delHandler);
});
// добавляем лайки
function likesHandler(event) {
  event.target.classList.toggle('card__info-like_liked');
  event.stopPropagation();}
// слушаем нажатия на каждую кнопку лайка
document.querySelectorAll(".card__info-like").forEach((item) => {
  item.addEventListener("click", likesHandler);
});

//___________________________




// Работаем с попапом открытия
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
const popupImageCaption = popupImage.querySelector('.popup-image__caption');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const card = document.querySelectorAll('.card')

function cardsOpener(event) {
  popupImage.classList.toggle('popup-image_is-opened');
  // event.target.classList.toggle('card__info-like_liked');
  const srcOfEvent =  event.target.src;
  const card = event.target.parentElement;
  const cardCaption = card.querySelector('.card__info-name');
  popupImageCaption.textContent = cardCaption.textContent;
  console.log(popupImageCaption.textContent);
  popupImagePicture.src = srcOfEvent;
  event.stopPropagation();}


// слушаем нажатия на все картинки card__image
document.querySelectorAll(".card__image").forEach((item) => {
  item.addEventListener("click", cardsOpener);
});
function imageCloseButtonClick() {
  popupImage.classList.toggle('popup-image_is-opened');
}

popupImageCloseButton.addEventListener('click', imageCloseButtonClick );
