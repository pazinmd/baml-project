const initialCards = [
  {
    name: "Что такое AML?",
    link: "https://gsl-news.org/data/wp-content/uploads/2022/05/PWNnbhWVzI.jpg",
  },
  {
    name: "Меры по борьбе",
    link: "https://xn--l1akee.xn----ctbgrqkh1c.xn--p1ai/wp-content/uploads/2019/03/zak.jpg",
  },
  
  {
    name: "Ограничение или блокировка?",
    link: "https://logincasino.com/uploads/gallery/69753/thumbs/o750_400_optim_m_79cde8923bb709a57134f2a20666d84a.jpg",
  },
  {
    name: "Как обрабатывать?",
    link: "https://sun9-87.userapi.com/impg/hDFAfeoG2s_k14k26cZnIdudjuAJyo150cyOBg/mEOmnINr1hs.jpg?size=600x534&quality=96&sign=d1cd5f647d17d0b158e263a0138af393&type=album",
  },
  
  
  {
    name: "Реальный кейс №1",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  {
    name: "Реальный кейс №2",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  
  {
    name: "Реальный кейс №3",
    link: "https://pp.userapi.com/c9833/u790332/-1/x_01f86a93.jpg",
  },
  {
    name: "Короткие факты",
    link: "https://www.thefactsite.com/wp-content/uploads/2019/07/hashtag-fact.png",
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
  slideNumber=0;
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
const quizContainer = document.querySelector(".quiz__container");
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
  slideNumber=1;
  cardNumberThree.classList.remove("card_inactive");
  cardNumberTwo.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide2").classList.add('active');
  document.querySelector(".icon2").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberThree.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=5;
  cardNumberFour.classList.remove("card_inactive");
  cardNumberThree.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide6").classList.add('active');
  document.querySelector(".icon6").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});


cardNumberFour.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=6;
  cardNumberFive.classList.remove("card_inactive");
  cardNumberFour.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide7").classList.add('active');
  document.querySelector(".icon7").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberFive.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=9;
  cardNumberSix.classList.remove("card_inactive");
  cardNumberFive.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide10").classList.add('active');
  document.querySelector(".icon10").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberSix.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=10;
  cardNumberSeven.classList.remove("card_inactive");
  cardNumberSix.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide11").classList.add('active');
  document.querySelector(".icon11").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberSeven.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=11;
  cardNumberEight.classList.remove("card_inactive");
  cardNumberSeven.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide12").classList.add('active');
  document.querySelector(".icon12").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardNumberEight.querySelector('.card__image').addEventListener("click", function () {
  slideNumber=12;
  cardFinalTest.classList.remove("card_inactive");
  cardNumberEight.querySelector('.card__info-like').classList.add('card__info-like_liked');
  document.querySelector(".slide13").classList.add('active');
  document.querySelector(".icon13").classList.add('active');
  sliderCont.classList.add("slider-container-open");
  slider.classList.add("slider-container-open");
});

cardFinalTest.querySelector('.card__image').addEventListener("click", function () {
  
  quizContainer.classList.toggle("slider-container-open");
  
});



//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  if (slideNumber==2) {
    cardNumberThree.classList.remove("card_inactive");
    cardNumberTwo.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }

  if (slideNumber==5) {
    cardNumberFour.classList.remove("card_inactive");
    cardNumberThree.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }
  
  if (slideNumber==6) {
    cardNumberFive.classList.remove("card_inactive");
    cardNumberFour.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }

  if (slideNumber==9) {
    cardNumberSix.classList.remove("card_inactive");
    cardNumberFive.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }

  if (slideNumber==10) {
    cardNumberSeven.classList.remove("card_inactive");
    cardNumberSix.querySelector('.card__info-like').classList.add('card__info-like_liked');

  }

  if (slideNumber==11) {
    cardNumberEight.classList.remove("card_inactive");
    cardNumberSeven.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }

  if (slideNumber==12) {
    cardFinalTest.classList.remove("card_inactive");
    cardNumberEight.querySelector('.card__info-like').classList.add('card__info-like_liked');
  }



  slideNumber++;
  if (slideNumber>0) {
    prevBtn.classList.remove("button_inactive");
  }

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

  if (slideNumber===0) {
    prevBtn.classList.add('button_inactive')
  }
  if (slideNumber===(numberOfSlides - 2)) {
    nextBtn.classList.toggle('button_inactive')
  }

  if (slideNumber<(numberOfSlides - 2)) {
    nextBtn.classList.remove('button_inactive')
  }

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

const slideStartBtn = document.querySelector(".slide_start-button");

slideStartBtn.onclick = ()=>{
    closeSlider();
    quizContainer.classList.toggle("slider-container-open");
    info_box.classList.add("activeInfo"); //show info box
}