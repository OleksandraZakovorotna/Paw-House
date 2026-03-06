import { openOrderModal } from './order-modal.js';

let refs = {};
let currentPet = null;

function getRefs() {
  const backdrop = document.querySelector('[data-pet-modal-backdrop]');

  // Якщо модалка ще не вставилась в DOM — повертаємо null
  if (!backdrop) return null;

  return {
    backdrop,
    closeBtn: backdrop.querySelector('[data-pet-modal-close]'),
    adoptBtn: backdrop.querySelector('[data-pet-modal-adopt]'),

    img: backdrop.querySelector('[data-pet-modal-img]'),
    type: backdrop.querySelector('[data-pet-modal-type]'),
    name: backdrop.querySelector('[data-pet-modal-name]'),
    meta: backdrop.querySelector('[data-pet-modal-meta]'),
    desc: backdrop.querySelector('[data-pet-modal-desc]'),
    health: backdrop.querySelector('[data-pet-modal-health]'),
    behavior: backdrop.querySelector('[data-pet-modal-behavior]'),
  };
}

// scroll lock
function lockScroll() {
  document.body.classList.add('modal-open');
}

function unlockScroll() {
  document.body.classList.remove('modal-open');
}

// close handlers
function onEsc(e) {
  if (e.key === 'Escape') closePetModal();
}

function onBackdropClick(e) {
  if (e.target === refs.backdrop) closePetModal();
}

function onCloseClick() {
  closePetModal();
}

function onAdoptClick() {
  if (!currentPet) return;

  closePetModal();

  if (typeof openOrderModal === 'function') {
    openOrderModal(currentPet);
  }
}

// fill content
function fillModal(pet) {
  const imgSrc = pet?.image || pet?.img || pet?.photo || pet?.avatar || null;

  if (imgSrc) {
    refs.img.src = imgSrc;
    refs.img.alt = pet?.name ? `Фото: ${pet.name}` : 'Фото тварини';
  } else {
    // Якщо бекенд не дав зображення — прибираємо src щоб не було "битого" img
    refs.img.removeAttribute('src');
    refs.img.alt = 'Фото тварини';
  }

  refs.type.textContent = pet?.type || pet?.species || 'Тварина';
  refs.name.textContent = pet?.name || 'Без клички';

  const age = pet?.age ?? '—';
  const sex = pet?.sex ?? pet?.gender ?? '—';
  refs.meta.textContent = `${age} • ${sex}`;

  refs.desc.textContent = pet?.description || pet?.desc || 'Опис відсутній.';
  refs.health.textContent = pet?.health || 'Інформація відсутня.';
  refs.behavior.textContent = pet?.behavior || 'Інформація відсутня.';
}

// public API
export function openPetModal(pet) {
  const newRefs = getRefs();
  if (!newRefs) return;

  refs = newRefs;
  currentPet = pet;

  fillModal(pet);

  refs.backdrop.classList.remove('is-hidden');
  lockScroll();

  window.addEventListener('keydown', onEsc);
  refs.backdrop.addEventListener('click', onBackdropClick);

  // перевірки на випадок якщо кнопок нема в DOM (щоб не падало)
  if (refs.closeBtn) refs.closeBtn.addEventListener('click', onCloseClick);
  if (refs.adoptBtn) refs.adoptBtn.addEventListener('click', onAdoptClick);
}

export function closePetModal() {
  if (!refs.backdrop) return;

  refs.backdrop.classList.add('is-hidden');
  unlockScroll();

  window.removeEventListener('keydown', onEsc);
  refs.backdrop.removeEventListener('click', onBackdropClick);

  if (refs.closeBtn) refs.closeBtn.removeEventListener('click', onCloseClick);
  if (refs.adoptBtn) refs.adoptBtn.removeEventListener('click', onAdoptClick);

  currentPet = null;
}