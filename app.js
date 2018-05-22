$(function() {
  //handlebarsjs variables
  const thumbSrc = document.getElementById("thumb-template").innerHTML;
  const imageSrc = document.getElementById("image-template").innerHTML;
  const thumbTemp = Handlebars.compile(thumbSrc);
  const imageTemp = Handlebars.compile(imageSrc);

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
    init: function() {
      //Need to send the cats array to the view for initialization and rendering
      listView.init(model.cats);
      detailsView.init(model.cats);
    }

  };

  const listView = {
    init: function(cats) {
      const thumbnailContainer = document.querySelector('.thumbnailContainer');
      cats.forEach(function(cat) {
        thumbnailContainer.innerHTML += thumbTemp(cat);
      });
    }
  };

  const detailsView = {
    init: function(cats) {
      const imageContainer = document.querySelector('.imageContainer');
      imageContainer.innerHTML = imageTemp(cats[0]);
    },
    render: function() {

    }
  };

  controller.init();
});
