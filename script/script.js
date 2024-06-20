var typed = new Typed(".typing", {
  strings: ["Web Designer", "Web Developer", "Software Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const menu = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".navbar");
const mainContainer = document.querySelector(".main-content");

menu.addEventListener("click", () => {
  navbar.classList.toggle("hide");
  mainContainer.classList.toggle("hide-nav");
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzo1UPfI88qP68ow_JIukyxMDv6vfgWCZpYUYlMhRggGbbgR3RgjGZ304KTotM6w6xp/exec";

const form = document.forms["form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
