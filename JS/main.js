//Smooth Scrolling

const navLinks = document.querySelectorAll(".navLinks");
console.log(navLinks);

// document.querySelectorAll(".navLinks").scrollIntoView({
//   behavior: "smooth"
// });

navLinks.forEach(function(listItem) {
  listItem.addEventListener("click", function Scroll(event) {
    event.scrollIntoView(listItem);
  });
  // add click listener for the element in this iteration of the loop
  // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
  // get the section by its id using the string from the last step
  // scroll to that section with .scrollIntoView()
});

function scrollIntoView() {}

//  {

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
