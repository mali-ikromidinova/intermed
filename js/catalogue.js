/* script for sidebar menu at catalogue.html page */
let chevrons = document.querySelectorAll(".chevron");

for (let chevron of chevrons) {
  chevron.addEventListener("click", function () {
    this.parentElement.nextElementSibling.classList.toggle(
      "catalogue-inner-menu-active"
    );
    this.previousElementSibling.classList.toggle(
      "catalogue-sidebar-link-active"
    );
    this.classList.toggle("chevron-active");
  });
}
