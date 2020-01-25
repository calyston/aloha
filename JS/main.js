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
console.log(inputText);
subscribeButton.addEventListener("click", function(event) {
  event.preventDefault();
  if (inputText.value.includes("@") === true) {
    alert("Thanks for subscribing!");
  } else {
    alert("Please enter a valid email address.");
  }
});

//Add to Cart
const cartButton = document.getElementsByClassName("cartButton");
let clicks = 0;
console.log(cartButton);

function addCount() {
  clicks++;
  alert("Item added to cart.");
  console.log(clicks);
}

// let itemCounter = clicks;

// const itemCounter = document.getElementById("itemCounter");

//carousel

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

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity(".main-carousel", {
  // options
});

//Button add to cart counter
console.log("working");
