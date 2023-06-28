//DOM Fetch Product Merch

const productContainer = document.querySelector(".row-product");

fetch("json/pipa.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)

    let contentHTML = "";
    data.products.forEach((product) => {
      contentHTML += `
      <div class="card">
      <img src="${product.image}" alt="${product.name}" style="width: 100%" />
      <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">${product.description}</p>
      </div>
      </div>
      `;
    });
    // console.log(isiHTML)
    productContainer.innerHTML = contentHTML;
  })
  .catch((err) => {
    console.log(err);
  });
