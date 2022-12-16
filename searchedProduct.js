let data = JSON.parse(sessionStorage.getItem("searchedData"));

if (data.length == 0) {
  document.querySelector("#subcontainer").innerHTML = `${alert(
    "Sorry No Result Found!!😔"
  )}
   ${(window.location.href = "index.html")} 
    `;
} else {
  function displayCards(data) {
    document.querySelector("#subcontainer").innerHTML = "";
    data.forEach((element) => {
      let div = document.createElement("div");
      let img = document.createElement("img");
      img.setAttribute("src", element.avatar);
      let discription = document.createElement("p");
      let str = element.discription;
      discription.innerText = `${str.substring(0, 50)}...`;
      let price = document.createElement("h4");
      price.innerHTML = `<h4>&#8377; ${element.price}</h4>`;
      let offer = document.createElement("p");
      offer.innerText = "OFFER AVAILABLE";
      let cart_btn = document.createElement("button");
      cart_btn.innerText = "Add To Cart";

      div.append(img, discription, price, offer, cart_btn);
      //    document.querySelector("#subcontainer").style.height+=250
      document.querySelector("#subcontainer").append(div);
    });
  }
  displayCards(data);
}

let searchedInput = document.getElementById("searchInput");

let serachBtn = document.querySelector("#searchBar form");
serachBtn.addEventListener("submit", (event) => {
  event.preventDefault();
  searchedData(searchInput);
});

async function searchedData(searchedInput) {
  let data = await fetch(
    `https://63996f3916b0fdad773c979e.mockapi.io/products?filter=${searchedInput.value}`
  );
  console.log(data);
  let renderedData = await data.json();
  console.log(renderedData.length);
  if (renderedData.length == 0) {
    document.querySelector(
      "#subcontainer"
    ).innerHTML = `<h1>Sorry No Result Found!!😔</h1>
       
       
        `;
  } else {
    displayCards(renderedData);
  }
}
