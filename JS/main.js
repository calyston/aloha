//Smooth Scrolling

function toAbout() {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth"
  });
}

function toShop() {
  document.querySelector("#shop").scrollIntoView({
    behavior: "smooth"
  });
}

function toFeatured() {
  document.querySelector("#featured").scrollIntoView({
    behavior: "smooth"
  });
}

function toUpdates() {
  document.querySelector("#updates").scrollIntoView({
    behavior: "smooth"
  });
}


//Subscribe Button

const subscribeButton = document.getElementById("subscribe");
const inputText = document.getElementById("input");
subscribeButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputText.value.includes("@") === true && inputText.value.includes(".")) {
    alert("Thanks for subscribing!");
    inputText.value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});


//Add to Cart
const cartButton = document.getElementsByClassName("cartButton");
let cartCounter = document.getElementById("cart-circle");
let clicks = 0;

function addCount() {
  clicks++;
  alert("Item added to cart.");
  cartCounter.style.backgroundColor = "#e2574c";
  cartCounter.innerHTML = (clicks);
}


//Flickity Carousel

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  adaptiveHeight: true,
  autoPlay: true,
  pauseAutoPlayOnHover: true,
  freeScroll: true,
  wrapAround: true
});

//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});