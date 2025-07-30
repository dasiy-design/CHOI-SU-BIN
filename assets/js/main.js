function animateSkillBars() {
  const skillPercents = document.querySelectorAll(".skill_percentage");

  skillPercents.forEach((span) => {
    const barTop = span.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight && !span.classList.contains("animated")) {
      const target = span.getAttribute("data-percent");
      span.style.width = target;
      span.classList.add("animated");
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);
