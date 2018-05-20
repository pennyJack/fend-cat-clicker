const catImages = document.querySelectorAll('img');
const scores = document.querySelectorAll('.score');
const buttons = document.querySelectorAll('button');
const counter = 0;

//Add an event listener to each cat's image
catImages.forEach(function(cat, index) {
  cat.addEventListener('click', (function(copyOfCounter, copyOfIndex) {
    return function() {
      copyOfCounter++;
      scores[copyOfIndex].textContent = copyOfCounter;
    }
  }(counter, index)));
});

//Add an event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    window.location.reload();
  });
});
