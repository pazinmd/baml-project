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

//slideshow content
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
const slideshowContainer = document.querySelector(".slider-container");
let slideNumber = 0;

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




function closeSlider() {
  sliderCont.classList.remove("slider-container-open");
  slider.classList.remove("slider-container-open");

  document.querySelectorAll(".slide").forEach((element) => {
    element.classList.remove("active");
  });

  document.querySelectorAll(".slide-icon").forEach((element) => {
    element.classList.remove("active");
  });
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

  // cardTemplate
  //   .querySelector(".card__info-like")
  //   .addEventListener("click", function (evt) {
  //     evt.target.classList.toggle("card__info-like_liked");
  //   });

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

// // функция для добавления карточек из соответствующего попапа

// function addCustomCard(event) {
//   event.preventDefault();
//   createCard(placeNameInput.value, placeLinkInput.value, true);
//   closePopup(popupAddPlace);
//   event.target.reset();
// }
// обрабатываем нажатия на каждый крестик в проекте
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

// слушатели

sliderCloseButton.addEventListener("click",closeSlider );

renderCards();


const renderedCards = document.querySelectorAll(".card");

for (let i = 0; i < renderedCards.length; i++) {
  renderedCards[i].classList.add(`number_${i+1}`);
};
console.log(renderedCards);

for (let i = 1; i < renderedCards.length; i++) {
  renderedCards[i].classList.add('card_inactive');
};

const cardNumberOne = document.querySelector(".number_1");
const cardNumberTwo = document.querySelector(".number_2");
const cardNumberThree = document.querySelector(".number_3");
const cardNumberFour = document.querySelector(".number_4");
const cardNumberFive = document.querySelector(".number_5");
const cardNumberSix = document.querySelector(".number_6");
const cardNumberSeven = document.querySelector(".number_7");
const cardNumberEight = document.querySelector(".number_8");
const cardFinalTest = document.querySelector(".number_9");
console.log(cardFinalTest);

// cardNumberOne.querySelector('.card__image').addEventListener("click",openCard);
cardNumberOne.querySelector('.card__image').addEventListener("click", function () {
  cardNumberTwo.classList.remove("card_inactive");
  cardNumberOne.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide1").classList.add('active');
  document.querySelector(".icon1").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberTwo.querySelector('.card__image').addEventListener("click", function () {
  cardNumberThree.classList.remove("card_inactive");
  cardNumberTwo.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide3").classList.add('active');
  document.querySelector(".icon3").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});




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


