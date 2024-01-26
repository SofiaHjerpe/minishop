// Code here!
let header = document.querySelector(".art-1 h3");
header.innerText = "Potato";
let navItems = document.querySelectorAll("nav a");
navItems[0].innerText = "Start";
navItems[2].innerText = "Mail Us";
let info = document.querySelector(".art-2 p");
info.innerText =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.";
let btn = document.querySelector(".art-3 button");
btn.style.backgroundColor = "#929";
btn.innerText = "Get!";
const background = document.querySelector(".art-3");
background.style.backgroundColor = "#696";
const address = document.querySelector(".address");
address.innerHTML = "Sinus skateboards <br /> Lorem Ipsum vägen 22 <br /> 144 44, Borås ";
const btns = document.querySelectorAll("button");
for (let btn of btns) {
  btn.innerText = "add to cart";
}
navItems[0].classList.add("active");
const logo = document.querySelector(".logo");
logo.classList.remove("logo");

let newItem = document.createElement("a");
console.log(newItem);
newItem.innerText = "About";
let nav = document.querySelector("nav");
nav.insertAdjacentElement("beforeEnd", newItem);
let navChildren = nav.children;
nav.appendChild(navChildren[3]);
navChildren[3].setAttribute("href", "#");

const img = "img/hoodie-forrest.png";
const heading = "Sinus Hoodie";
const smallHeading = "Forest";
const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";
const product = {
  img: img,
  heading: heading,
  smallHeading: smallHeading,
  description: description,
};
const html = `
  <article class="art-1">
<figure><img src="${product.img}" alt="hoodie" /></figure>
        <h2>${product.heading}</h2>
        <h3>${product.smallHeading}</h3>
        <p>
          ${product.description}
        </p>
        <button>Add to cart</button> </article>`;
const productHolder = document.querySelector("main");
productHolder.insertAdjacentHTML("beforeend", html);

let textColor = document.querySelectorAll("p");
for (let col of textColor) {
  col.style.color = "rgb(244, 182, 10)";
}
const logotype = document.querySelector("header img");
logotype.addEventListener("click", () => {
  console.log("Found you!");
});
const products = document.querySelectorAll("main article");

const smallHeading1 = document.querySelector(".art-1 h3");
const smallHeading2 = document.querySelector(".art-2 h3");
const smallHeading3 = document.querySelector(".art-3 h3");


products[0].addEventListener("click", () => {
  console.log("hi I am " + smallHeading1.innerText);
});
products[1].addEventListener("click", () => {
  console.log("hi I am " + smallHeading2.innerText);
});
products[2].addEventListener("click", () => {
  console.log("hi I am " + smallHeading3.innerText);
});
products[3].addEventListener("click", () => {
  console.log("hi I am " + product.smallHeading);
});
