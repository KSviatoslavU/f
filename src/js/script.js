let brandCardList = document.querySelector('[data-brand-slider-card-list]')
let brandHideButton = document.querySelector('[data-brand-slider-button]')
let brandTextSpan = document.querySelector('[data-brand-slider-text]')
let brandIcon = document.querySelector('[data-brand-slider-icon]')

brandHideButton.addEventListener('click', function () {
  if (brandTextSpan.textContent === 'Показать все') {
    brandCardList.classList.remove('visible')
    brandTextSpan.textContent = 'Скрыть'
    brandIcon.classList.add('rotate')
  } else {
    brandCardList.classList.add('visible')
    brandTextSpan.textContent = 'Показать все'
    brandIcon.classList.remove('rotate')
  }
})

let asideText = document.querySelector('[data-aside-text]')
let asideButton = document.querySelector('[data-aside-button]')
let asideTextSpan = document.querySelector('[data-aside-text-span]')
let asideIcon = document.querySelector('[data-aside-icon]')

asideButton.addEventListener('click', function () {
  if (asideTextSpan.textContent === 'Читать далее') {
    asideText.classList.add('aside__text--show')
    asideTextSpan.textContent = 'Скрыть'
    asideIcon.classList.add('rotate')
    console.log('hi')
  } else {
    asideText.classList.remove('aside__text--show')
    asideTextSpan.textContent = 'Читать далее'
    asideIcon.classList.remove('rotate')
  }
})

let burgerButton = document.querySelector('[data-burger-button]')
let burgerMenu = document.querySelector('[data-burger-menu]')
let overlay = document.querySelector('[data-overlay]')
let closeButton = document.querySelector('[data-close-button]')

burgerButton.addEventListener('click', function () {
  burgerMenu.classList.add('burger_menu--show')
  overlay.classList.add('overlay--show')
})

closeButton.addEventListener('click', function () {
  burgerMenu.classList.remove('burger_menu--show')
  overlay.classList.remove('overlay--show')
})

overlay.addEventListener('click', function () {
  burgerMenu.classList.remove('burger_menu--show')
  overlay.classList.remove('overlay--show')
})

let burgerMessageButton = document.querySelector('[data-burgerMessageButton]')
let modalFeedback = document.querySelector('[data-modal-feedback]')
let closeFeedback = document.querySelector('[data-closed-feedback]')
let headerMessageButton = document.querySelector('[data-header-feedback]')
let overlayModal = document.querySelector('[data-overlay-modal]')

burgerMessageButton.addEventListener('click', function () {
  modalFeedback.classList.add('show_modal')
  overlayModal.classList.add('overlay_modal--show')
})

headerMessageButton.addEventListener('click', function () {
  modalFeedback.classList.add('show_modal')
  overlayModal.classList.add('overlay_modal--show')
})

closeFeedback.addEventListener('click', function () {
  modalFeedback.classList.remove('show_modal')
  overlayModal.classList.remove('overlay_modal--show')
})

let burgerCallButton = document.querySelector('[data-burgerCallButton]')
let modalCall = document.querySelector('[data-modal-call]')
let closedCall = document.querySelector('[data-modal-closed]')
let headerCallButton = document.querySelector('[data-header-call]')

burgerCallButton.addEventListener('click', function () {
  modalCall.classList.add('show_modal')
  overlayModal.classList.add('overlay_modal--show')
})

headerCallButton.addEventListener('click', function () {
  modalCall.classList.add('show_modal')
  overlayModal.classList.add('overlay_modal--show')
})

closedCall.addEventListener('click', function () {
  modalCall.classList.remove('show_modal')
  overlayModal.classList.remove('overlay_modal--show')
})

let equipmentCardList = document.querySelector('[data-equipment-card-list]')
let equipmentHideButton = document.querySelector(
  '[data-equipment-slider-button]'
)
let equipmentTextSpan = document.querySelector('[data-equipment-slider-text]')
let equipmentIcon = document.querySelector('[data-equipment-slider-icon]')

equipmentHideButton.addEventListener('click', function () {
  console.log('click')
  if (equipmentTextSpan.textContent === 'Показать все') {
    equipmentCardList.classList.remove('visible')
    equipmentTextSpan.textContent = 'Скрыть'
    equipmentIcon.classList.add('rotate')
  } else {
    equipmentCardList.classList.add('visible')
    equipmentTextSpan.textContent = 'Показать все'
    equipmentIcon.classList.remove('rotate')
  }
})

const swiper = new Swiper('.swiper', {
  spaceBetween: -9,
  slidesPerView: 'auto',
  speed: 1000,
  loop: false,
  allowTouchMove: true,
  autoHeight: true,
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

const equipmentSwiper = new Swiper('.equipmentSwiper', {
  spaceBetween: -9,
  slidesPerView: 'auto',
  speed: 1000,
  loop: false,
  allowTouchMove: true,
  autoHeight: true,
  direction: 'horizontal',
  pagination: {
    el: '.equipmentSwiper-pagination',
    type: 'bullets',
    clickable: true
  }
})

const priceSwiper = new Swiper('.priceSwiper', {
  spaceBetween: -9,
  slidesPerView: 'auto',
  speed: 1000,
  loop: false,
  allowTouchMove: true,
  autoHeight: true,
  direction: 'horizontal',
  pagination: {
    el: '.priceSwiper-pagination',
    type: 'bullets',
    clickable: true
  }
})
