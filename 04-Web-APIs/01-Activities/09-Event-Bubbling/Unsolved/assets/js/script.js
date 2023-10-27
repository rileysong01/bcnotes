// Selects carouselbox element class
var carousel = document.querySelector(".carouselbox");

// selects the next and prev classes in carousel element
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/id/10/300/200",
  "https://picsum.photos/id/20/300/201",
  "https://picsum.photos/id/30/300/202",
  "https://picsum.photos/id/47/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on image opens a window containing image
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// Moves to next image in carousel 
next.addEventListener("click", function(event) {
  // Stops event from bubbling up to its parent (carousel)
  event.stopPropagation();

  navigate(1);
});

// Moves to previous image in carousel
prev.addEventListener("click", function(event) {

  navigate(-1);
});

navigate(0);
