const createBtn = document.querySelector("#create-button");
const formOverlay = document.querySelector(".form-section");
const form = document.querySelector("form");
const productContainer = document.querySelector("#products");
const PRODUCTS = [];
let updateIndex = null;

const ui = () => {
  productContainer.innerHTML = "";
  PRODUCTS.forEach(
    (elem, index) =>
      (productContainer.innerHTML += `
    <div class="product">
          <div class="img">
            <img
              src="${elem.productImgUrl}"
              alt="Product Image"
            />
          </div>

          <div class="description">
            <h3>${elem.productName}</h3>
            <p>${elem.productDesc}</p>
            <p>Rs. ${elem.productPrice}</p>
          </div>

          <div class="btm">
            <button onClick = "updateProduct('${elem.productName}')">Update</button>
            <button>Delete</button>
          </div>
        </div>
    `),
  );
};

createBtn.addEventListener("click", () => {
  formOverlay.style.display = "flex";
});

formOverlay.addEventListener("click", (e) => {
  if (e.target.textContent === "x") {
    formOverlay.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = e.target[0].value;
  let productDesc = e.target[1].value;
  let productPrice = e.target[2].value;
  let productImgUrl = e.target[3].value;

  let obj = {
    productName,
    productDesc,
    productPrice,
    productImgUrl,
  };

  if (updateIndex !== null) {
    PRODUCTS[updateIndex] = obj;
    updateIndex = null;
    formOverlay.style.display = "none";
  } else {
    PRODUCTS.push(obj);
    formOverlay.style.display = "none";
  }

  ui();
  console.log(PRODUCTS);
});

let updateProduct = (pName) => {
  formOverlay.style.display = "flex";
  let product = PRODUCTS.find((elem) => elem.productName === pName);
  updateIndex = PRODUCTS.findIndex((elem) => elem.productName === pName);
  console.log(product);

  form[0].value = product.productName;
  form[1].value = product.productDesc;
  form[2].value = product.productPrice;
  form[3].value = product.productImgUrl;
};
