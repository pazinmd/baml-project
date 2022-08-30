const initialCards = [
  {
    name: "Что такое BAML?",
    link: "https://gsl-news.org/data/wp-content/uploads/2022/05/PWNnbhWVzI.jpg",
  },
  {
    name: "Законы и УКБО",
    link: "https://xn--l1akee.xn----ctbgrqkh1c.xn--p1ai/wp-content/uploads/2019/03/zak.jpg",
  },
  {
    name: "Денежный поток",
    link: "https://static.tildacdn.com/tild3764-3534-4636-b039-316466623831/OTZkLWExZ.jpg",
  },
  {
    name: "Как обрабатывать?",
    link: "https://sun9-87.userapi.com/impg/hDFAfeoG2s_k14k26cZnIdudjuAJyo150cyOBg/mEOmnINr1hs.jpg?size=600x534&quality=96&sign=d1cd5f647d17d0b158e263a0138af393&type=album",
  },
  {
    name: "Финансовый мониторинг",
    link: "https://www.gradyent.ru/upload/images/11.jpg",
  },
  {
    name: "Ограничение или блокировка?",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  {
    name: "Еще один раздел",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  {
    name: "Еще один раздел",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  {
    name: "Итоговый тест",
    link: "https://www.linguacontact.ru/wp-content/uploads/2021/04/testy.jpg",
  },
];

//// 1. Объявляем переменные
const closeButtons = document.querySelectorAll(".popup__close-button");
const sliderCont = document.querySelector('.slider-container');
const sliderCloseButton = document.querySelector(".slider__close-button");
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
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
}

function closeSlider() {
  sliderCont.classList.remove("slider-container-open");
  slider.classList.remove("slider-container-open");
}


// function openCard(event) {
//   openPopup(popupImage);
//   const srcOfEvent = event.target.src;
//   const altOfEvent = event.target.alt;
//   const card = event.target.closest(".card");
//   const cardCaption = card.querySelector(".card__info-name");
//   popupImageCaption.textContent = cardCaption.textContent;
//   popupImagePicture.src = srcOfEvent;
//   popupImagePicture.alt = altOfEvent;
//   event.stopPropagation();
// }

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
  const cardTemplateImage = cardTemplate.querySelector(".card__image");
  cardTemplate.querySelector(".card__info-name").textContent = name;
  cardTemplateImage.src = link;
  cardTemplateImage.alt = "Изображение " + name;
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
    cardTemplateImage
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

sliderCloseButton.addEventListener("click",closeSlider );

// слушаем нажатие кнопки редактировать и закрыть форму редактирования
profileInfoEditButton.addEventListener("click", openProfileEdit);

// слушаем нажатие кнопки сохранить
formProfileEdit.addEventListener("submit", saveProfileInfo);

// слушаем нажатие кнопки по добавлению пользовательской картинки на страницу
formAddPlace.addEventListener("submit", addCustomCard);

// слушаем открытие формы добавления карточек
// addPlaceAddButton.addEventListener("click", openAddPlacePopup);

// добавляем карточки в проект
renderCards();









const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

// //image slider autoplay
// var playSlider;

// var repeater = () => {
//   playSlider = setInterval(function(){
//     slides.forEach((slide) => {
//       slide.classList.remove("active");
//     });
//     slideIcons.forEach((slideIcon) => {
//       slideIcon.classList.remove("active");
//     });

//     slideNumber++;

//     if(slideNumber > (numberOfSlides - 1)){
//       slideNumber = 0;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcons[slideNumber].classList.add("active");
//   }, 4000);
// }
// repeater();

// //stop the image slider autoplay on mouseover
// slider.addEventListener("mouseover", () => {
//   clearInterval(playSlider);
// });

// //start the image slider autoplay again on mouseout
// slider.addEventListener("mouseout", () => {
//   repeater();
// });