const cats = document.getElementsByTagName('img');
const scores = document.getElementsByClassName('score');
const button = document.querySelector('button');
const counter = 0;


cats[0].addEventListener('click', (function(copyOfCounter) {
  return function() {
    copyOfCounter++;
    scores[0].textContent = copyOfCounter;
  }
}(counter)));

cats[1].addEventListener('click', (function(copyOfCounter) {
  return function() {
    copyOfCounter++;
    scores[1].textContent = copyOfCounter;
  }
}(counter)));

button.addEventListener('click', function() {
  window.location.reload();
});
