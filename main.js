//

const modalViews = document.querySelectorAll(".s1__modal"),
modalBtns = document.querySelectorAll(".s1__button"),
modalCloses = document.querySelectorAll(".s1__modal-close");

let modal = function (modalClick) {
modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
modalBtn.addEventListener("click", () => {
  modal(i);
});
});

modalCloses.forEach((modalClose) => {
modalClose.addEventListener("click", () => {
  modalViews.forEach((modalView) => {
    modalView.classList.remove("active-modal");
  });
});
});


function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 760) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  }
  window.addEventListener("scroll", scrollUp);




  // Load More Images Functionality

  const buttonLoadMore = document.getElementById('button-load-more');

// Get all of the image elements
const allImages = document.querySelectorAll('.image');

// Create a variable to track the number of images to load
let imagesLoaded = 4;

// Hide all images except for the first three
allImages.forEach((image, index) => {
if (index >= imagesLoaded) {
  image.style.display = 'none';
}
});

// Add a click event listener to the button
buttonLoadMore.addEventListener('click', () => {
// Update the number of images to load
imagesLoaded += 4;

// Show the next three images
allImages.forEach((image, index) => {
  if (index < imagesLoaded) {
    image.style.display = 'block';
  }
});

// Disable the button if all of the images have been loaded
if (imagesLoaded >= allImages.length) {
  buttonLoadMore.parentNode.removeChild(buttonLoadMore)= true;
}
});



// Load More Images Functionality

const buttonLoadMore1 = document.getElementById('load-more');

// Get all of the image elements
const allImg = document.querySelectorAll('.image1');

// Create a variable to track the number of images to load
let imgLoaded = 4;

// Hide all images except for the first three
allImg.forEach((image, index) => {
if (index >= imgLoaded) {
  image.style.display = 'none';
}
});

// Add a click event listener to the button
buttonLoadMore1.addEventListener('click', () => {
// Update the number of images to load
imgLoaded += 4;

// Show the next three images
allImg.forEach((image, index) => {
  if (index < imgLoaded) {
    image.style.display = 'block';
  }
});

// Disable the button if all of the images have been loaded
if (imgLoaded >= allImg.length) {
  buttonLoadMore1.parentNode.removeChild(buttonLoadMore1);
}
});



// -----------
// Images Residencial Slideshow
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// ------------------------------------------------------
// Images Commercial Slideshow
function openModal1() {
  document.getElementById("myModal1").style.display = "block";
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
