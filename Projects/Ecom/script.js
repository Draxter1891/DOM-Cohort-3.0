const createBtn = document.querySelector("#create-button");
const formOverlay = document.querySelector(".form-section");
const form = document.querySelector("form");
const productContainer = document.querySelector("#products");

const PRODUCTS = [
  {
    productName: "Nike Air Runner",
    productDesc: "Lightweight running shoes for everyday workouts.",
    productPrice: 1299,
    productImgUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Classic Wrist Watch",
    productDesc: "Elegant analog watch with premium finish.",
    productPrice: 2499,
    productImgUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Wireless Headphones",
    productDesc: "Noise-cancelling headphones with deep bass.",
    productPrice: 3499,
    productImgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Leather Backpack",
    productDesc: "Durable backpack suitable for work and travel.",
    productPrice: 1899,
    productImgUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Modern Sunglasses",
    productDesc: "Stylish UV-protected sunglasses.",
    productPrice: 999,
    productImgUrl:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Gaming Keyboard",
    productDesc: "Mechanical keyboard with RGB lighting.",
    productPrice: 2799,
    productImgUrl:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Smartphone",
    productDesc: "High-performance smartphone with great camera.",
    productPrice: 15999,
    productImgUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Coffee Mug",
    productDesc: "Minimal ceramic mug for hot beverages.",
    productPrice: 399,
    productImgUrl:
      "https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZSUyMG11Z3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    productName: "DSLR Camera",
    productDesc: "Professional-grade camera for photography.",
    productPrice: 45999,
    productImgUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60",
  },
  {
    productName: "Bluetooth Speaker",
    productDesc: "Portable speaker with powerful sound output.",
    productPrice: 2199,
    productImgUrl:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60",
  },
];
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
            <button onClick = "deleteProduct(${index})">Delete</button>
          </div>
        </div>
    `),
  );
};
ui();

createBtn.addEventListener("click", () => {
  formOverlay.style.display = "flex";
  form[4].textContent = "Add Product";
});

formOverlay.addEventListener("click", (e) => {
  if (e.target.textContent === "x") {
    formOverlay.style.display = "none";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    e.target[0].value.trim() === "" ||
    e.target[1].value.trim() === "" ||
    e.target[2].value.trim() === "" ||
    e.target[3].value.trim() === ""
  ) {
    alert("Please fill all the fields.");
    return;
  }

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
  form.reset();
});

let updateProduct = (pName) => {
  form[4].textContent = "Update Product";
  formOverlay.style.display = "flex";
  let product = PRODUCTS.find((elem) => elem.productName === pName);
  updateIndex = PRODUCTS.findIndex((elem) => elem.productName === pName);

  form[0].value = product.productName;
  form[1].value = product.productDesc;
  form[2].value = product.productPrice;
  form[3].value = product.productImgUrl;
};

let deleteProduct = (index) => {
  console.log(index);
  PRODUCTS.splice(index, 1);
  ui();
};
