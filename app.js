const cats = document.querySelectorAll('img');
const scores = document.querySelectorAll('.score');
const button = document.querySelector('button');
const counter = 0;

cats.forEach(function(cat, index) {
  cat.addEventListener('click', (function(copyOfCounter, copyOfIndex) {
    return function() {
      copyOfCounter++;
      scores[copyOfIndex].textContent = copyOfCounter;
    }
  }(counter, index)));
});

/* cats[0].addEventListener('click', (function(copyOfCounter) {
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
}(counter))); */

button.addEventListener('click', function() {
  window.location.reload();
});
