
//Data model
const model = {
  currentCat: null,
  cats: [
    {name: "Amber", clickCount: 0,  thumbnailURL: "img/thumbs/thumb1.jpg", imageURL: "img/cat1.jpg" },
    {name: "Djego", clickCount: 0,  thumbnailURL: "img/thumbs/thumb2.jpg", imageURL: "img/cat2.jpg" },
    {name: "Wesley", clickCount: 0,  thumbnailURL: "img/thumbs/thumb3.jpg", imageURL: "img/cat3.jpg" },
    {name: "Marabella", clickCount: 0,  thumbnailURL: "img/thumbs/thumb4.jpg", imageURL: "img/cat4.jpg" },
    {name: "Alexander", clickCount: 0,  thumbnailURL: "img/thumbs/thumb5.jpg", imageURL: "img/cat5.jpg" }
  ]
};

const controller = {
  init: function() {
    model.currentCat = model.cats[0];

    //Initialization
    listView.init();
    detailsView.init();
  },
  getCats: function() {
    return model.cats;
  },
  setCurrentCat: function(copyOfCat) {
    model.currentCat = copyOfCat;
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  updateClickCount: function() {
    model.currentCat.clickCount++;
    detailsView.render();
  }
};

const listView = {
  init: function() {
    this.thumbnailContainer = document.querySelector('.thumbnailContainer');
    this.render();
  },
  render: function() {
    let i, cat, cardListItem, h2, img;

    let cats = controller.getCats();

    //Render cat thumbnails
    for(i = 0; i < cats.length; i++) {
      cat = cats[i];

      catListItem = document.createElement('div');
      catListItem.setAttribute('class', 'cat');

      h2 = document.createElement('h2');
      h2.textContent = cat.name;
      catListItem.append(h2);

      img = document.createElement('img');
      img.src = cat.thumbnailURL;
      img.alt = "Cat Image";
      catListItem.append(img);

      //addEventListener (use closure to reference right cat)
      img.addEventListener('click', (function(copyOfCat) {
        return function() {
          controller.setCurrentCat(copyOfCat);
          detailsView.render();
        }
      }(cat)));

      this.thumbnailContainer.append(catListItem);
    }
  }
};

const detailsView = {
  init: function() {
    this.catImage = document.querySelector('#catImage');
    this.catName = document.querySelector('#catName');
    this.score = document.querySelector('#score');

    catImage.addEventListener('click', function() {
      controller.updateClickCount();
    });

    this.render();
  },
  render: function() {
    const cat = controller.getCurrentCat();

    //Update the cat image, name and clickCount
    this.catImage.src = cat.imageURL;
    this.catName.textContent = cat.name;
    this.score.textContent = cat.clickCount.toString();
  }
};

controller.init();
