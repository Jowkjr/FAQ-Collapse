const bottoms = document.querySelectorAll(".faq-toggle");

bottoms.forEach((bottom) => {
  bottom.addEventListener("click", () => {
    bottom.parentNode.classList.toggle("active");
  });
});
