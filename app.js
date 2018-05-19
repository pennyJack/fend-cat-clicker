const kitten = document.querySelector('img');
const score = document.querySelector('.score');
let counter = 0;

kitten.addEventListener('click', function() {
  counter++;
  score.textContent = counter;
});
