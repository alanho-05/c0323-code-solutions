const $span = document.querySelectorAll('span');
let i = 0;
document.addEventListener('keydown', function (event) {
  if (event.key !== $span[i].textContent) {
    $span[i].className = 'underline-wrong wrong';
  } else {
    $span[i].className = 'correct';
    $span[i + 1].className = 'underline';
    i++;
  }
});
