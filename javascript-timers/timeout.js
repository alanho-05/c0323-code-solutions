const $message = document.querySelector('h1');

function changeMessage() {
  $message.textContent = 'Hello There';
}

setTimeout(changeMessage, 2000);
