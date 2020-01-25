//Smooth Scrolling

// const navLinks = document.querySelectorAll(".navLinks");
// console.log(navLinks);

// document.querySelectorAll(".navLinks").scrollIntoView({
//   behavior: "smooth"
// });

// document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
// document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
// document.querySelector("#featured").scrollIntoView({ behavior: "smooth" });
// document.querySelector("#updates").scrollIntoView({ behavior: "smooth" });
// //  {

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

cartButton.button.forEach(function(atcButton) {
  atcButton.addEventListener("click", function(event) {
    clicks++;
    console.log(clicks);
  });
});

//
//
//   alert("Item added to cart");
// });

// const itemCounter = document.getElementById("itemCounter");

// let itemCounter = clicks;

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
