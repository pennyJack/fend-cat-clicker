//handlebarsjs variables
const thumbSrc = document.getElementById("thumb-template").innerHTML;
const imageSrc = document.getElementById("image-template").innerHTML;
const thumbTemp = Handlebars.compile(thumbSrc);
const imageTemp = Handlebars.compile(imageSrc);

//Custom global variables
const thumbnailContainer = document.querySelector('.thumbnailContainer');
const imageContainer = document.querySelector('.imageContainer');
const cats = [];

class Cat {
  constructor(name, id, thumbnailURL, imageURL) {
    this.name = name;
    this.id = id;
    this.thumbnailURL = thumbnailURL;
    this.imageURL = imageURL;
    this.score = 0;
    this.hasEvtListener = false;
  }
  updateScore() {
    this.score++;
  }
}

cats.push(new Cat("Amber", "0", "img/thumbs/thumb1.jpg", "img/cat1.jpg"));
cats.push(new Cat("Djego", "1", "img/thumbs/thumb2.jpg", "img/cat2.jpg"));
cats.push(new Cat("Wesley", "2", "img/thumbs/thumb3.jpg", "img/cat3.jpg"));
cats.push(new Cat("Marabella", "3", "img/thumbs/thumb4.jpg", "img/cat4.jpg"));
cats.push(new Cat("Alexander", "4", "img/thumbs/thumb5.jpg", "img/cat5.jpg"));

//Intial DOM setup
cats.forEach(function(cat) {
  thumbnailContainer.innerHTML += thumbTemp(cat);
});

//imageContainer.innerHTML = imageTemp(cats[0]);

function setEventListenersToThumbnails() {
  const catThumbnails = document.querySelectorAll('.catThumbnail');
  const counter = 0;
  let catImage = document.querySelector('.catImage');
  let score = document.querySelector('.score');

  catThumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function(evt) {
      const targetId = evt.target.getAttribute("id");
      imageContainer.innerHTML = imageTemp(cats[targetId]);
      catImage = document.querySelector('.catImage');
      catImage.addEventListener('click', (function() {
        cats[catImage.getAttribute("id")].updateScore();
        score = document.querySelector('.score');
        score.textContent = cats[catImage.getAttribute("id")].score;
      }));
    });
  });
}

setEventListenersToThumbnails();

/*function setEventListeners() {
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

setEventListeners();*/
