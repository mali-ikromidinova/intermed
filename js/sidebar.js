openBtn = document.querySelector(".header-mobile-bars");
closeBtn = document.querySelector(".header-mobile-close");
closeFullBtn = document.querySelector(".header-full-close");
sidebar = document.querySelector(".sidebar");

openBtn.addEventListener("click", function () {
  sidebar.style.display = "flex";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});

closeFullBtn.addEventListener("click", function () {
  sidebar.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
});
