const $message = document.querySelector('h1');
let nIntervId;
let count = 4;

nIntervId = setInterval(countdown, 1000);

function countdown() {
  if (count > 0) {
    $message.textContent = count.toString();
    count--;
  } else {
    $message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(nIntervId);
    nIntervId = null;
  }
}
