const search_input = document.getElementById("search-input");
const search_button = document.getElementById("search-button");
const sort_title = document.getElementById("sort-title");
const sort_price = document.getElementById("sort-price");
const productCatalog = document.getElementById("product-catalog");

const populateProductCatalog = (products, clear) => {
  if (clear === true) {
    productCatalog.textContent = "";
  }
  products.forEach((product) => {
    const div = document.createElement("div");
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardDescription = document.createElement("p");
    const cardPrice = document.createElement("p");

    // add inner text
    cardImage.src = product.image;
    cardTitle.innerText = product.title;
    cardDescription.innerText = product.description;
    cardPrice.innerText = "$" + product.price;

    // add CSS classes
    div.classList.add("col-sm-6", "col-md-4", "col-lg-3", "gy-5");
    card.classList.add("card", "h-100");
    cardImage.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardDescription.classList.add("card-text");
    cardPrice.classList.add("card-text", "text-end", "font-monospace");

    // append HTML tags as required
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescription);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    div.appendChild(card);

    productCatalog.appendChild(div);
  });
};

function fakestore(sort_by) {
  const xhr = new XMLHttpRequest();
  const method = "GET";
  const url = "https://fakestoreapi.com/products"; // refer https://fakestoreapi.com/docs

  xhr.open(method, url, true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      const status = xhr.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        const products = JSON.parse(xhr.responseText);

        if (sort_by === "title") {
          products.sort((a, b) => {
            let a_title = a.title.toLowerCase();
            let b_title = b.title.toLowerCase();

            if (a_title < b_title) {
              return -1;
            }
            if (a_title > b_title) {
              return 1;
            }
            return 0;
          });
          populateProductCatalog(products, true);
        } else if (sort_by === "price") {
          products.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          });
          populateProductCatalog(products, true);
        } else {
          populateProductCatalog(products, false);
        }
      }
    }
  };

  xhr.send();
}

sort_price.addEventListener("click", () => {
  sort_title.classList.remove("btn-success");
  sort_price.classList.add("btn-success");
  fakestore("price");
});
sort_title.addEventListener("click", () => {
  sort_price.classList.remove("btn-success");
  sort_title.classList.add("btn-success");
  fakestore("title");
});
search_button.addEventListener("click", () => {
  const search_query = search_input.value;
  fakestore(search_query);
});
window.onload = fakestore();
