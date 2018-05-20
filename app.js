const source = document.getElementById("thumb-template").innerHTML;
const template = Handlebars.compile(source);
const container = document.querySelector('.container');
const cats = [];

class Cat {
  constructor(name, src) {
    this.name = name;
    this.src = src;
  }
}

cats.push(new Cat("Amber", "img/thumbs/thumb1.jpg"));
cats.push(new Cat("Djego", "img/thumbs/thumb2.jpg"));
cats.push(new Cat("Wesley", "img/thumbs/thumb3.jpg"));
cats.push(new Cat("Marabella", "img/thumbs/thumb4.jpg"));
cats.push(new Cat("Alexander", "img/thumbs/thumb5.jpg"));

cats.forEach(function(cat) {
  container.innerHTML += template(cat);
});

function setEventListeners() {
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
}

setEventListeners();
