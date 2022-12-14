const productContainers = [...document.querySelectorAll(".product-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["sliderimage/1.webp", "sliderimage/2.webp"];
let arr2 = [
  "Secondsliderimage/1.webp",
  "Secondsliderimage/2.webp",
  "Secondsliderimage/3.webp",
  "Secondsliderimage/4.webp",
  "Secondsliderimage/5.webp",
  "Secondsliderimage/6.webp",
  "Secondsliderimage/7.webp",
  "Secondsliderimage/8.webp",
  "Secondsliderimage/9.webp",
];
let i = 0;
next.addEventListener("click", function () {
  i++;
  if (i > arr.length - 1) {
    i = 0;
  }
  document.getElementById("image").src = arr[i];
});
prev.addEventListener("click", function () {
  i--;
  if (i < 0) {
    i = arr.length - 1;
  }
  document.getElementById("image").src = arr[i];
});

function slides() {
  document.getElementById("image").src = arr[i];
  if (i < arr.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(slides, 3000);
