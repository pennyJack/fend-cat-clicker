const cats = document.getElementsByTagName('img');
const scores = document.getElementsByClassName('score');
const button = document.querySelector('button');
let counter1 = 0;
let counter2 = 0;

cats[0].addEventListener('click', function() {
  counter1++;
  scores[0].textContent = counter1;
});

cats[1].addEventListener('click', function() {
  counter2++;
  scores[1].textContent = counter2;
});

button.addEventListener('click', function() {
  window.location.reload();
});
