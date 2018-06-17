var navToggle = document.querySelector('.nav-toggle');
var navToggleInner = document.querySelector('.nav-toggle-inner');
var offPageNav = document.querySelector('.off-page');
var body = document.querySelector('body');
var mastHead = document.querySelector('#mast-head');
var navLinks = document.getElementsByClassName('nav-link')
var hoverCount = 0;
var inputGroup = document.getElementsByClassName('input-group');
var textBox = document.querySelector('#text-area');
var hiddenTextBox = document.querySelector('#hidden-text-box');

function delayDisplay () {
  setTimeout(function () {
    body.classList.toggle('no-scroll'); }, 360)
}

function toggleMenu() {

  if (hoverCount === 0) {hoverCount = 1;
    delayDisplay();
  } else { hoverCount = 0;
    navToggleInner.classList.remove('nav-open');
    body.classList.toggle('no-scroll'); }

  offPageNav.classList.toggle('on-page');
  mastHead.classList.toggle('on-nav');
  navToggle.classList.toggle('close-nav');

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle('move-in')
  }

  offPageNav.addEventListener('mouseenter', function () {
  navToggleInner.classList.add('nav-open');  })

}

for (var  i = 0; i < inputGroup.length; i++) {
  inputGroup[i].firstElementChild.addEventListener('blur', function () {
    for (var  i = 0; i < inputGroup.length; i++) {
    if (inputGroup[i].firstElementChild.value !== "") {
      inputGroup[i].firstElementChild.classList.add('has-text');
    } else { inputGroup[i].firstElementChild.classList.remove('has-text'); }
  }
  })
}

textBox.addEventListener('input', function () {
  hiddenTextBox.value = textBox.value
  var extraHeight = (hiddenTextBox.scrollHeight - 33)
  if (hiddenTextBox.scrollHeight > 33) {
    textBox.style.height = '' + (22 + extraHeight) + 'px'
  } else {
    textBox.style.height = ""
  }
})
