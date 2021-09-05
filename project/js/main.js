const myNav = document.querySelector(".navbar");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 280 ||
    document.documentElement.scrollTop >= 280
  ) {
    myNav.classList.add("nav-sticky");
  } else {
    myNav.classList.remove("nav-sticky");
  }
};
const links = document.querySelectorAll(".nav-link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => classList.remove("acitve-link"));
    this.classList.add("active-link");
  });
});
