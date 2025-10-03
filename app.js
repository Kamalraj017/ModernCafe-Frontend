let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");
let count = 0;

// Slide function
const myFun = () => {
  trendFood.forEach((currImg) => {
    currImg.style.transform = `translateX(-${count * 100}%)`;
  });
};

// Auto slide
setInterval(() => {
  count++;
  if (count === trendFood.length) {
    count = 0;
  }
  myFun();
}, 4000);

// Food detail popup
foodCard.forEach((curCard) => {
  curCard.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("cardDetail");
    div.innerHTML = `
      <i id="icon" class="fa-solid fa-xmark"></i>
      <img src=${curCard.firstElementChild.src} alt="">
      <h2>Food Details</h2>
      <p> ModernCafe, we bring you a delightful mix of flavors with something for everyone — from crispy fries, hot soups, and cheesy starters to rich main courses like creamy Paneer Butter Masala and aromatic Chicken Biryani. End your meal on a sweet note with our indulgent Chocolate Brownie or soft Gulab Jamuns, and refresh yourself with chilled Cold Coffee or tangy Fresh Lime Soda. Every dish is crafted with care to give you the perfect blend of taste, quality, and comfort.</p>
    `;
    document.querySelector("body").appendChild(div);

    document.querySelector("#icon").addEventListener("click", function () {
      div.remove();
    });
  });
});

// Mobile navbar toggle
let bar = document.getElementById("bar");
let nav = document.querySelector("nav ul");

bar.addEventListener("click", () => {
  nav.classList.toggle("showMenu");
});