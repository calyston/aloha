console.log("working");

const cartBtn = document.getElementById("cartBtn");
let clicks = 0;

cartBtn.addEventListener("click", function addToCart(event) {
  clicks++;
  console.log(clicks);

  if (clicks) {
    alert("1 item added to cart");
  }
});

const itemCounter = document.getElementById("itemCounter");

const itemCounter = clicks;
