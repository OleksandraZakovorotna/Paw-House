const closeModalBtn = document.querySelector('.order-modal-close-btn');
const backdrop = document.querySelector('.backdrop');

export function openOrderModal() {
  if (!backdrop) return;

  backdrop.classList.remove('is-hidden');

  window.addEventListener('keydown', onEscPress);
  backdrop.addEventListener('click', onBackdropClick);
  closeModalBtn.addEventListener('click', closeOrderModal);
}

export function closeOrderModal() {
  if (!backdrop) return;

  backdrop.classList.add('is-hidden');

  window.removeEventListener('keydown', onEscPress);
  backdrop.removeEventListener('click', onBackdropClick);
  closeModalBtn.removeEventListener('click', closeOrderModal);
}

function onEscPress(e) {
  if (e.key === 'Escape') closeOrderModal();
}

function onBackdropClick(e) {
  if (e.target === backdrop) closeOrderModal();
}

// Заборона скролу через body при відкритті модалки
function openModal() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('no-scroll');
}

function closeModal() {
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('no-scroll');
}
