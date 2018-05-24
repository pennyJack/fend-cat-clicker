$(function() {
  //handlebarsjs variables
  const thumbSrc = document.getElementById("thumb-template").innerHTML;
  const imageSrc = document.getElementById("image-template").innerHTML;
  const thumbTemplate = Handlebars.compile(thumbSrc);
  const imageTemplate = Handlebars.compile(imageSrc);

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
      listView.init(model.cats);
      detailsView.init(model.currentCat);
    },
    updateCatDetails: function(target) {
      const targetId = target.getAttribute("id");
      for(let cat of model.cats) {
        if(cat.name === targetId) {
          model.currentCat = cat;
        }
      }
      detailsView.render(model.currentCat);
    },
    updateClickCount: function() {
      model.currentCat.clickCount++;
    }
  };

  const listView = {
    init: function(cats) {
      const thumbnailContainer = document.querySelector('.thumbnailContainer');
      let catThumbnails;
      //Render cat thumbnails
      cats.forEach(function(cat) {
        thumbnailContainer.innerHTML += thumbTemplate(cat);
      });
      //Select rendered thumbnails and add event listeners
      catThumbnails = document.querySelectorAll('.catThumbnail');
      catThumbnails.forEach(function(catThumbnail) {
        catThumbnail.addEventListener('click', function(evt) {
          controller.updateCatDetails(evt.target);
        });
      });
    }
  };

  const detailsView = {
    init: function(currentCat) {
      this.imageContainer = document.querySelector('.imageContainer');
      this.render(currentCat);
    },
    render: function(currentCat) {
      this.imageContainer.innerHTML = imageTemplate(currentCat);
      const catImage = document.querySelector('.catImage');
      //Add an new event listener each time the detailsView gets rendered
      catImage.addEventListener('click', function() {
        const score = document.querySelector('.score');
        controller.updateClickCount();
        score.innerHTML = currentCat.clickCount;
      });
    }
  };

  controller.init();
});
