const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Drip Footware",
    price: 2500,
    colors: [
      {
        code: "blue",
        img: "./img/drip-blue.png",
      },
      {
        code: "gray",
        img: "./img/drip-gray.png",
      },
    ],
  },
  {
    id: 2,
    title: "Bathu",
    price: 1700,
    colors: [
      {
        code: "black",
        img: "./img/bathu-black.png",
      },
      {
        code: "gray",
        img: "./img/bathu-gray.png",
      },
    ],
  },
  {
    id: 3,
    title: "Vaya",
    price: 1500,
    colors: [
      {
        code: "black",
        img: "./img/vaya-black.png",
      },
      {
        code: "red",
        img: "./img/vaya-red.png",
      },
    ],
  },
  {
    id: 4,
    title: "Root of Fame",
    price: 2700,
    colors: [
      {
        code: "gray",
        img: "./img/f990-gray.png",
      },
      {
        code: "lightpink",
        img: "./img/f990-pink.png",
      },
    ],
  },
  {
    id: 5,
    title: "4GY sneaker",
    price: 1200,
    colors: [
      {
        code: "navy",
        img: "./img/4gy-navy.png",
      },
      {
        code: "white",
        img: "./img/4gy-white.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "R" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});