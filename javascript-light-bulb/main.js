let status = 'off';
let bgColor = 'off';
const $bulbButton = document.querySelector('.bulb');
const $row = document.querySelector('.row');

function flick(event) {
  if (status === 'off') {
    status = 'on';
    bgColor = 'bg-on';
  } else if (status === 'on') {
    status = 'off';
    bgColor = 'bg-off';
  }
  $row.className = 'row ' + bgColor;
  $bulbButton.className = 'bulb ' + status;
}

$bulbButton.addEventListener('click', flick);
