const cats = [];

class Cat {
  constructor(name, src) {
    this.name = name;
    this.src = src;
    this.counter = 0;
  }
}

cats.push(new Cat("Amber", "img/kitten.jpg"));
cats.push(new Cat("Djego", "img/shyCat.jpg"));

//Initial setup -> Create cat images dynamically
function() {
  let cat, h1, h2, button, img;
  let tempArr = [];
  for(cat of cats) {
    div = document.createElement('div');
    h1 = document.createElement('h1');
    h2 = document.createElement('h2');
    button = document.createElement('button');
    img = document.createElement('img');
    div.setAttribute('class', 'cat');
    h1.textContent = cat.name;
    h2.innerHTML = "Your Highscore: <span class='score'>" + cat.counter + "</span> clicks!";
    button.textContent = "Reset!";
    img.setAttribute('src', cat.src);
    tempArr.push(h1, h2, button, img);
    for(item of tempArr) {
      div.appendChild(item);
    }
    container.appendChild(div);
    tempArr = [];
  }
}());
