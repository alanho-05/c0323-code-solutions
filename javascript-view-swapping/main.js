const $tabs = document.querySelector('.tab-container');
const $tabList = document.querySelectorAll('.tab');
const $viewList = document.querySelectorAll('.view');

$tabs.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabList.length; i++) {
      if (event.target.dataset.view === $tabList[i].dataset.view) {
        $tabList[i].classList.add('active');
      } else {
        $tabList[i].classList.remove('active');
      }
    }
    console.log(event.target);
    const $dataView = event.target.getAttribute('data-view');

    for (let i = 0; i < $viewList.length; i++) {
      if ($viewList[i].getAttribute('data-view') === $dataView) {
        $viewList[i].classList.remove('hidden');
      } else {
        $viewList[i].classList.add('hidden');
      }
    }
  }
});
