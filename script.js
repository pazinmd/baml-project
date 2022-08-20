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




//// 1. Работаем с попапом открытия карточки
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close-button');
const popupImageCaption = popupImage.querySelector('.popup-image__caption');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const formAddPlace = document.querySelector('.popup__form[name="cards-add"]');
const popupAddPlace = document.querySelector('.popup[data="add-place"]');
const card = document.querySelectorAll('.card')

// Пишем функцию по открытию карточки в режиме просмотра
function cardsOpener(event) {
  popupImage.classList.toggle('popup-image_is-opened');
  const srcOfEvent =  event.target.src;
  const card = event.target.parentElement;
  const cardCaption = card.querySelector('.card__info-name');
  popupImageCaption.textContent = cardCaption.textContent;
  popupImagePicture.src = srcOfEvent;
  event.stopPropagation();}

// Пишем обработчик закрытия формы с просмотром.
function imageCloseButtonClick() {
  popupImage.classList.toggle('popup-image_is-opened');
}

//слушаем нажатие на закрытие карточки
popupImageCloseButton.addEventListener('click', imageCloseButtonClick );
//___________________________




//// 2. Добавляем карточки на страницу. Пишем функцию создания карточек.
function addCard() {
  for (let i = 0; i < initialCards.length; i++) {
      const data = initialCards[i];
      const name = data.name;
      const link = data.link;
      createCard(name, link);
  }
}
//___________________________




//// 3. Создаем карточку из template в HTML. Пишем функцию создания карточек.
function createCard (name, link) {
  const cardTemplate = document.querySelector('.template-card').content;
  const cardsContainer = document.querySelector('.cards');
  const newElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = newElement.querySelector('.card__image');
  const cardName = newElement.querySelector('.card__info-name');
  const delCard = newElement.querySelector('.card__delete-button');
  cardImage.addEventListener('click', cardsOpener );

  newElement.querySelector('.card__info-like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__info-like_liked');
  });

  delCard.addEventListener('click', function (evt) {
    const placesList = document.querySelector("section.cards");
    placesList.removeChild(evt.target.parentNode);
    evt.stopPropagation();
  });

  cardImage.src = link;
  cardImage.alt = 'Изображение ' + name;
  cardName.textContent = name;

  // Пишем логику добавления карточки. Если открыта форма по добавлению карточки - ее нужно добавить в начало.
  // В любом другом случае карточку нужно добавлять в конец контейнера

  if (popupAddPlace.style.visibility === 'visible') {
    cardsContainer.prepend(newElement);
  }
  else {cardsContainer.appendChild(newElement);}
}
//Вызываем функцию создания карточек в DOM
addCard();
//___________________________




//// 4. начало работы с формой по редактированию имени и подписи
const profileInfoEditButton = document.querySelector(".profile__info-edit");
const profileInfoCloseButton = document.querySelector(".popup__close-button-profile");
const popupProfileEdit = document.querySelector('.popup[data="profile-edit"]');
const inputCaption = document.querySelector(".popup__input_data-caption");
const profileEditSaveButton = document.querySelector('.popup__save-button')
const inputName = document.querySelector(".popup__input_data-name");

// пишем функцию обработчик нажатия кнопки "редактировать"
function popupProfileCloseClick() {
  popupProfileEdit.style.visibility = "hidden";
  popupProfileEdit.style.opacity = "0";
}

// пишем функцию обработчик нажатия кнопки "редактировать"
function popupProfileEditClick() {
  popupProfileEdit.style.visibility = "visible";
  popupProfileEdit.style.opacity = "1";
  inputName.value = document.querySelector(".profile__info-name").textContent;
  inputCaption.value = document.querySelector(".profile__info-caption").textContent;
}

// слушаем нажатие кнопки редактировать и закрыть форму редактирования 
profileInfoEditButton.addEventListener("click", popupProfileEditClick);
profileInfoCloseButton.addEventListener("click", popupProfileCloseClick);
//___________________________




//// 5. работа с именем и подписью. обработчик кнопки submit
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
//___________________________



//// 6. Открываем форму добавления пользовательских карточек.
const addPlaceAddButton = document.querySelector(".profile__add-picture");
const addPlaceCloseButton = document.querySelector(".popup__close-cards-add-button");

const popupAddPlaceSubmitButton = popupAddPlace.querySelector('.popup__save-button');

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
//___________________________

//// 7. Добавляем пользовательскую карточку по нажатию.


function addCustomCard(event) {
  event.preventDefault();
  let name = formAddPlace.querySelector('.popup__input_place-name').value;
  let link = formAddPlace.querySelector('.popup__input_place-link').value;
  createCard(name, link);
  popupAddPlaceCloseClick();
  
}
// Слушаем нажатие кнопки по добавлению пользовательской картинки на страницу
formAddPlace.addEventListener('submit', addCustomCard);
//___________________________