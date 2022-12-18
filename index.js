let prev = document.getElementById("prev");
let next = document.getElementById("next");
let arr = ["sliderimage/1.webp", "sliderimage/2.webp"];

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
setInterval(slides, 2000);

// --------------------------------------------------------second slider banner starts js -------------------------------------------------

let prev1 = document.getElementById("prev1");
let next1 = document.getElementById("next1");

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
var j = 0;
next1.addEventListener("click", function () {
  j++;
  if (j > arr2.length - 1) {
    j = 0;
  }
  document.getElementById("image1").src = arr2[j];
});
prev1.addEventListener("click", function () {
  j--;
  if (j < 0) {
    j = arr2.length - 1;
  }
  document.getElementById("image1").src = arr2[j];
});

function slides2() {
  document.getElementById("image1").src = arr2[j];
  if (j < arr2.length - 1) {
    j++;
  } else {
    j = 0;
  }
}
setInterval(slides2, 3000);

// ---------------------------------------------------second slider banner ends---------------------------------------

//https://63996f3916b0fdad773c979e.mockapi.io/products?filter=Headphone
// https://63996f3916b0fdad773c979e.mockapi.io/products



let searchedInput = document.getElementById("searchInput");

let serachBtn = document.querySelector("#searchBar form");
serachBtn.addEventListener("submit", (event) => {
  event.preventDefault();
 
  console.log(searchedInput.value);
  searchedData(searchInput);
});

async function searchedData(searchedInput) {
  let data = await fetch(
    `https://63996f3916b0fdad773c979e.mockapi.io/products?filter=${searchedInput.value}`
  );
  console.log(data);
  let renderedData = await data.json();
  console.log(renderedData)
  sessionStorage.setItem("searchedData", JSON.stringify(renderedData));
  window.location.href = "searchedProduct.html";
}


// render products script........


function displayWatch() {
  let key = "Watch";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}

function displayTv() {
  let key = "Tv";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}

function displayHeadphone() {
  let key = "Headphone";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}

function displayMobile() {
  let key = "Mobile";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}

function displayLaptop() {
  let key = "Laptop";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}

function displayCamera() {
  let key = "Camera";
  localStorage.setItem("render_key",key);
  window.location.href = "api_render.html";
}