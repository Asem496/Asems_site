document.querySelector(".next").addEventListener("click", function () {
  const carousel = document.querySelector(".cartimages");
  const firstSkill = carousel.querySelector(".skill");
  carousel.appendChild(firstSkill);
});

document.querySelector(".prev").addEventListener("click", function () {
  const carousel = document.querySelector(".cartimages");
  const lastSkill = carousel.querySelector(".skill:last-child");
  carousel.insertBefore(lastSkill, carousel.firstChild);
});

const imgLi = document.querySelectorAll(".grid ul li");

imgLi.forEach((li) => {
  li.addEventListener("click", () => {
    imgLi.forEach((item) => item.classList.remove("active"));
    li.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".grid ul li.active img")) {
    imgLi.forEach((item) => item.classList.remove("active"));
  }
});
