const featureEl = document.querySelector(".features");
const mainNavEl = document.querySelectorAll(".nav-link");
const ftrdrop = document.querySelector(".feature-dropdown-content");
const ctndrop = document.querySelector(".company-dropdown-content");
console.log(mainNavEl);

mainNavEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(link);
    if (link.classList.contains("features")) {
      // console.log(ftrdrop);
      // ftrdrop.style.display = "block";
      ftrdrop.classList.toggle("nav--open");
      ctndrop.classList.remove("nav--open");
      console.log(ftrdrop);
    } else {
      ftrdrop.classList.remove("nav--open");
    }

    if (link.classList.contains("company")) {
      // console.log(ftrdrop);
      // ftrdrop.style.display = "block";
      ctndrop.classList.toggle("nav--open");
      ftrdrop.classList.remove("nav--open");
      console.log(ctndrop);
    }
  });
});

body = document.querySelector(body);

body.addEventListener("click", function (e) {
  console.log(body);
  ftrdrop.classList.remove("nav--open");
  ctndrop.classList.remove("nav--open");
});
