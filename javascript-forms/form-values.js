const $form = document.querySelector('form');
const input = {};

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  input.name = $form.elements.name.value;
  input.email = $form.elements.email.value;
  input.message = $form.elements.message.value;
  console.log('messageData:', input);
  $form.reset();
});
