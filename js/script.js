/* script for aboutCompany.html page */
let vacancy = document.querySelector(".vacancy");
let license = document.querySelector(".license");
let content = document.querySelector(".company-content");
let licenses = document.querySelector(".licenses");
let vacancies = document.querySelector(".vacancies");

license.addEventListener("click", function () {
  license.classList.toggle("company-main-btn-active");

  if (license.classList.contains("company-main-btn-active")) {
    content.style.display = "none";
    licenses.style.display = "block";
    vacancies.style.display = "none";
    vacancy.classList.remove("company-main-btn-active");
  } else {
    content.style.display = "block";
    licenses.style.display = "none";
  }
});

vacancy.addEventListener("click", function () {
  vacancy.classList.toggle("company-main-btn-active");

  if (vacancy.classList.contains("company-main-btn-active")) {
    content.style.display = "none";
    vacancies.style.display = "block";
    licenses.style.display = "none";
    license.classList.remove("company-main-btn-active");
  } else {
    content.style.display = "block";
    vacancies.style.display = "none";
  }
});
