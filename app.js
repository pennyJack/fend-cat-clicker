const kitten = document.querySelector('img');
const score = document.querySelector('.score');
const button = document.querySelector('button');
let counter = 0;

kitten.addEventListener('click', function() {
  counter++;
  score.textContent = counter;
});

button.addEventListener('click', function(event) {
  console.log(event);
  window.location.reload();
});
