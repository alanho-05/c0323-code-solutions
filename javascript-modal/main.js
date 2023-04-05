let toggleModal = false;
const $modalButton = document.querySelector('.modal-button');
const $noButton = document.querySelector('.no-button');
const $modalOverlay = document.querySelector('#modal');

$modalButton.addEventListener('click', function (event) {
  toggleModal = !toggleModal;
  if (toggleModal === true) {
    $modalOverlay.className = 'row centered fixed overlay';
  }
});

$noButton.addEventListener('click', function (event) {
  toggleModal = !toggleModal;
  if (toggleModal === false) {
    $modalOverlay.className = 'row centered fixed overlay hidden';
  }
});
