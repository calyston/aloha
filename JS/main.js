//carousel

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
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

// const cartBtn = document.getElementById("cartBtn");
// let clicks = 0;

// cartBtn.addEventListener("click", function addToCart(event) {
//   clicks++;
//   console.log(clicks);

//   if (clicks) {
//     alert("Item added to cart");
//   }
// });

// const itemCounter = document.getElementById("itemCounter");

// let itemCounter = clicks;
