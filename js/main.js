const store = [
  {
    id: 1,
    title: "Blue Lhenga set ",
    price: 88,
    category: "women",
    section: "feature",
    img: "p1.jpeg",
    status: "",
  },
  {
    id: 2,
    title: "Pink Skirt top selev",
    price: 25,
    category: "women",
    section: "feature",
    img: "p16.png",
    status: "Sale",
  },
  {
    id: 3,
    title: "Ladies hand bag pro",
    price: 15,
    category: "women",
    section: "feature",
    img: "p26.jpg",
    status: "New",
  },
  {
    id: 4,
    title: "Hand Bag Cotton",
    price: 14,
    category: "women",
    section: "new",
    img: "p27.jpg",
    status: "",
  },
  {
    id: 5,
    title: "2nb shirt set",
    price: 8,
    category: "women",
    section: "feature",
    img: "p28.jpg",
    status: "",
  },
  {
    id: 6,
    title: "Topon Lady Black boot",
    price: 11,
    category: "women",
    section: "feature",
    img: "p29.jpg",
    status: "",
  },
  {
    id: 7,
    title: "Ladies jpanese watch",
    price: 17,
    category: "women",
    section: "new",
    img: "p30.jpeg",
    status: "",
  },
  {
    id: 8,
    title: "Indian sari set",
    price: 21,
    category: "women",
    section: "new",
    img: "p31.jpeg",
    status: "hot",
  },
  {
    id: 9,
    title: "ladies bra and panty set",
    price: 9,
    category: "women",
    section: "new",
    img: "p32.jpeg",
    status: "",
  },
  {
    id: 10,
    title: "Winter Cotton Socks",
    price: 5,
    category: "men",
    section: "new",
    img: "p33.jpeg",
    status: "",
  },
  {
    id: 11,
    title: "Redish Asian Sari",
    price: 18,
    category: "women",
    section: "new",
    img: "p34.jpeg",
    status: "sold",
  },
  {
    id: 12,
    title: "women slick sandle",
    price: 8.5,
    category: "women",
    section: "feature",
    img: "p35.jpg",
    status: "new",
  },
  {
    id: 13,
    title: "Pink lady t-shirt",
    price: 3,
    category: "women",
    section: "feature",
    img: "p36.jpeg",
    status: "",
  },
  {
    id: 14,
    title: "Colorful sun glass",
    price: 23,
    category: "men",
    section: "new",
    img: "p42.jpeg",
    status: "",
  },
  {
    id: 15,
    title: "Men Underwear(cottn)",
    price: 4,
    category: "men",
    section: "new",
    img: "p48.jpeg",
    status: "",
  },
  {
    id: 16,
    title: "lady black t-shirt",
    price: 7.23,
    category: "women",
    section: "new",
    img: "p50.jpeg",
    status: "sale",
  },
  {
    id: 17,
    title: "Ladies jacket winter s",
    price: 19,
    category: "women",
    section: "new",
    img: "p52.jpeg",
    status: "",
  },
  {
    id: 18,
    title: "cotton clone set lady",
    price: 12.25,
    category: "women",
    section: "feature",
    img: "p59.jpeg",
    status: "new",
  },
];

let featuredItems = store.filter((item) => item.section === "feature");
let newItems = store.filter((item) => item.section === "new");

let featureDiv = document.querySelector(".feature > div");
let newDiv = document.querySelector(".new > div");
let featureItem = "";
featuredItems.map((item) => {
  featureItem += `
    <div class="item">
              <img src="./img/${item.img}" alt="sd" />
              <h5 class="title">${item.title}</h5>

              <p class="price">$<span>${item.price}</span></p>
              <div class="buttons">
                <button class="cartBtn" data-id=${item.id}>
                  Add to Cart
                </button>
                <button class="loveBtn" data-id=${item.id}>
                  <i class="bx bxs-heart"></i>
                </button>
              </div>
              <p class="status">
                  ${item.status !== "" ? item.status : ""}
              </p>
            </div>
    `;
});
if (featureDiv) {
  featureDiv.innerHTML = featureItem;
}

let newItem = "";
newItems.map((item) => {
  newItem += `
    <div class="item">
              <img src="./img/${item.img}" alt="sd" />
              <h5 class="title">${item.title}</h5>

              <p class="price">$<span>${item.price}</span></p>
              <div class="buttons">
                <button class="cartBtn" data-id=${item.id}>
                  Add to Cart
                </button>
                <button class="loveBtn" data-id=${item.id}>
                  <i class="bx bxs-heart"></i>
                </button>
              </div>
              <p class="status">
                  ${item.status !== "" ? item.status : ""}
              </p>
            </div>
    `;
});

if (newDiv) {
  newDiv.innerHTML = newItem;
}

let sideCart = document.querySelector(".sideCart");
let cart = document.querySelector(".cart");
cart.addEventListener("click", () => {
  sideCart.classList.toggle("showCart");
});

class carts {
  constructor(a) {
    this.cart = a;
    // localStorage.setItem("cart", []);
  }

  setIteminCart() {
    let sideCart = document.querySelector(".sideCart .items");
    let allCartItems = this.checkLocalStorage();
    let initialItems = "";
    allCartItems.map((single) => {
      initialItems += `
             <div>
            <img src="./img/${single.img}" alt="" />
            <p>$ <span> ${single.price} </span></p>
          </div>
            `;
    });
    sideCart.innerHTML = initialItems;
  }

  checkCartEmpty() {
    let a = document.querySelector(".cartItems");
    let cartHeading = document.querySelector("#cartHeading");
    let cartStore = this.checkLocalStorage();
    if (cartStore.length > 0) {
      if (cartHeading) {
        cartHeading.innerHTML = `${cartStore.length} items in your cart.`;
      }
      let table = `<table class="table">
            <thead>
              <tr>
                <th>img</th>
                <th>title</th>
                <th>price($)</th>
                <th>quantity</th>
                <th>total($)</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>`;
      cartStore.map((item) => {
        table += `
            <tr>
                <td><img src="./img/${item.img}" alt="ds" /></td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>
                  <i class="bx bx-minus" data-id="${item.id}"></i>
                  <span class="qtySingle">${
                    item.quantity ? item.quantity : 1
                  }</span>
                  <i class="bx bx-plus" data-id="${item.id}"></i>
                </td>
                <td>${item.price * (item.quantity ? item.quantity : 1)}</td>
                <td><i class="bx bx-trash-alt" data-id=${item.id}></i></td>
              </tr>
            `;
      });
      table += ` </tbody>
          </table>`;
      if (a) {
        a.innerHTML = table;
      }
      let deletebtn = document.querySelectorAll(".table .bx-trash-alt");
      let incbtn = document.querySelectorAll(".table .bx-plus");
      let decbtn = document.querySelectorAll(".table .bx-minus");

      //delete btn functionaliy
      deletebtn.forEach((item) => {
        item.addEventListener("click", (e) => {
          let delet_id = e.target.dataset.id;
          this.filterLocalStorage(delet_id);
          e.target.parentElement.parentElement.remove();
          this.setSummary();
        });
      });

      //increment button functon
      incbtn.forEach((item) => {
        item.addEventListener("click", (e) => {
          this.editLocalstorage(e.target.dataset.id, "inc");
        });
      });

      //dec btn functionality
      decbtn.forEach((item) => {
        item.addEventListener("click", (e) => {
          this.editLocalstorage(e.target.dataset.id, "dec");
        });
      });
    } else {
      if (cartHeading) {
        cartHeading.innerHTML = `No items in your cart.`;
        a.innerHTML = "";
      }
    }
  }

  setSummary() {
    let cart = this.checkLocalStorage();
    let summaryParent = document.querySelector(".summary");
    let summaryHtml = ` <h4>Order Summary</h4>`;
    let totalPrice = 0;
    let totalQty = 0;
    if (summaryParent) {
      if (cart.length > 0) {
        cart.map((item) => {
          totalPrice += item.price * (item.quantity ? item.quantity : 1);
          totalQty += item.quantity ? item.quantity : 1;
        });
        summaryHtml += `
            <p>Total Qty : <span class="totalCount">${totalQty}</span></p>
            <p>Total Tax : <span class="totalCount">${0.0}</span></p>
            <p style="border-top: 2px solid #eee; margin-top: 5px;">
              All Total : $<span class="totalCount">${totalPrice.toFixed(
                2
              )}</span>
            </p>
            <a href="checkout.html" class="checkout">
              Checkout
            </a>
            `;
        summaryParent.innerHTML = summaryHtml;
      } else {
        summaryParent.innerHTML = "";
      }
    }
  }

  checkLocalStorage() {
    let shoppingCart;
    if (localStorage.getItem("cart") && localStorage.getItem("cart") !== null) {
      shoppingCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      shoppingCart = [];
    }
    //
    return shoppingCart;
  }

  setLocalStorage(item) {
    let oldCart = this.checkLocalStorage();
    let inCart = oldCart.find((items) => items.id === item.id);
    if (inCart) {
      return this.showAlert("danger", "item already in cart.");
    } else {
      oldCart.push(item);
      localStorage.setItem("cart", JSON.stringify(oldCart));
      this.showAlert("success", "item added in cart.");
    }
  }

  filterLocalStorage(id) {
    let oldCart = this.checkLocalStorage();
    let newCart = oldCart.filter((item) => item.id !== parseInt(id));
    localStorage.setItem("cart", JSON.stringify(newCart));
    this.checkCartEmpty();
    this.setIteminCart();
    this.increaseCartCount();
    this.showAlert("success", "item deleted");
  }

  editLocalstorage(id, type) {
    let oldCart = this.checkLocalStorage();
    let targetIndex = oldCart.findIndex((item) => item.id === parseInt(id));
    if (type === "inc") {
      oldCart[targetIndex].quantity = oldCart[targetIndex].quantity
        ? oldCart[targetIndex].quantity + 1
        : 1;
      localStorage.setItem("cart", JSON.stringify(oldCart));

      this.setSummary();
      this.checkCartEmpty();
    } else {
      let targetIndex = oldCart.findIndex((item) => item.id === parseInt(id));
      if (oldCart[targetIndex]?.quantity === 1) {
        //do nothing if item quantity if equal to 1;
      } else {
        oldCart[targetIndex].quantity = oldCart[targetIndex].quantity
          ? oldCart[targetIndex].quantity - 1
          : 1;
        localStorage.setItem("cart", JSON.stringify(oldCart));

        this.setSummary();
        this.checkCartEmpty();
      }
    }
  }

  increaseCartCount() {
    let cartItemCount = document.querySelector(".cart span");
    cartItemCount.innerText = this.checkLocalStorage().length;
  }

  showAlert(type, message) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      `position: fixed; top: 70px; right: 20px; z-index: 999; font-size: 12px; padding: 10px 20px; color: #fff; box-shadow: 2px 2px 12px rgba(0,0,0,0.2); opacity: 0.8; border-radius: 3px; background:${
        type === "danger" ? "#dd2c55" : "#67e045"
      }; transition: all 0.3s ease;`
    );
    div.innerText = message;
    document.body.appendChild(div);
    setTimeout(() => {
      div.style.display = "none";
    }, 2000);
  }
}

//window add event listerner
window.addEventListener("DOMContentLoaded", () => {
  let cartInstance = new carts([]);
  cartInstance.increaseCartCount();

  cartInstance.setIteminCart();
  cartInstance.checkCartEmpty();
  cartInstance.setSummary();

  let addToCartBtn = document.querySelectorAll(".cartBtn");
  addToCartBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
      item_id = e.target.dataset.id;

      let currentItemDetail = store.find(
        (item) => item.id === parseInt(item_id)
      );
      cartInstance.setLocalStorage(currentItemDetail);
      cartInstance.increaseCartCount();
      cartInstance.setIteminCart();
    });
  });

  let checkOut = document.querySelector(".checkout .right");
  if (checkOut) {
    let a = "";
    let cartItems = cartInstance.checkLocalStorage();
    let total = 0;
    cartItems.map((item) => {
      total += parseFloat(item.price) * (item.quantity ? item.quantity : 1);
    });
    a += `
        <div class="parentOrder">
            <h4>Your Order</h4>
            <p>Total Amount : &nbsp; $${total}</p>
            <p>Tax : &nbsp; 0</p>
            <h4 style="margin-top: 20px;">Have a promo code?</h4>
            <form action="" class="promo">
              <input
                type="text"
                name="promo"
                id="promo"
                required
                placeholder="promo code"
              />
              <button type="submit">Apply Code</button>
            </form>
          </div>
        `;
    checkOut.innerHTML = a;
  }

    let hamberger  = document.querySelector(".hamberger");
    hamberger.addEventListener("mouseenter", (e) => {
        let menu = document.querySelector(".menu");
        menu.classList.toggle("showMenu");
    })
     hamberger.addEventListener("mouseleave", (e) => {
        let menu = document.querySelector(".menu");
        menu.classList.toggle("showMenu");
    })
});
