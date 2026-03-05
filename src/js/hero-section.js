const heroBtn = document.querySelector(".js-scroll-quality");

heroBtn.addEventListener("click", () => {
  document.querySelector("#quality").scrollIntoView({
    behavior: "smooth"
  });
});
