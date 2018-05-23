$(function() {
  //handlebarsjs variables
  const thumbSrc = document.getElementById("thumb-template").innerHTML;
  const imageSrc = document.getElementById("image-template").innerHTML;
  const thumbTemplate = Handlebars.compile(thumbSrc);
  const imageTemplate = Handlebars.compile(imageSrc);

  //Data model
  const model = {
    cats: [
      {name: "Amber", clickCount: 0,  thumbnailURL: "img/thumbs/thumb1.jpg", imageURL: "img/cat1.jpg" },
      {name: "Djego", clickCount: 0,  thumbnailURL: "img/thumbs/thumb2.jpg", imageURL: "img/cat2.jpg" },
      {name: "Wesley", clickCount: 0,  thumbnailURL: "img/thumbs/thumb3.jpg", imageURL: "img/cat3.jpg" },
      {name: "Marabella", clickCount: 0,  thumbnailURL: "img/thumbs/thumb4.jpg", imageURL: "img/cat4.jpg" },
      {name: "Alexander", clickCount: 0,  thumbnailURL: "img/thumbs/thumb5.jpg", imageURL: "img/cat5.jpg" }
    ]

  };

  const controller = {
    updateCatDetails: function(target) {
      console.log(target);
      detailsView.render();
    },
    init: function() {
      this.currentCat = model.cats[0];
      //Need to send the cats array to the view for initialization and rendering
      listView.init(model.cats);
      detailsView.init(this.currentCat);
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
      const imageContainer = document.querySelector('.imageContainer');
      imageContainer.innerHTML = imageTemplate(currentCat);
    },
    render: function(cats) {

    }
  };

  controller.init();
});
