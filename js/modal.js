let orderBtn = document.querySelectorAll(".btn-order");
let close = document.querySelectorAll(".modal-close");

let overlay = document.querySelector(".overlay");
let consultation = document.querySelector("#consultation");
let thanks = document.querySelector("#thanks");

for (let item of close) {
  item.addEventListener("click", function () {
    overlay.classList.remove("overlay-active");
    consultation.style.display = "none";
    thanks.style.display = "none";
  });
}

for (let btn of orderBtn) {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.add("overlay-active");
    consultation.style.display = "block";
  });
}
