const sections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); //다시 사라지게 하고 싶으면 유지
      }
    });
  },
  {
    threshold: 0.5, //50% 보이면 감지
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
