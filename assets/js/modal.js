function animateSkillBars() {
  const skillPercents = document.querySelectorAll("#resume .skill_percentage");

  skillPercents.forEach((span) => {
    const parentBar = span.closest(".skill_bar");
    const barTop = parentBar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (barTop < windowHeight && !span.classList.contains("animated")) {
      const percentText = span.innerText.trim();
      const targetPercent = parseInt(percentText.replace("%", ""));
      span.classList.add("animated");

      // 스킬바 너비 설정
      span.style.width = targetPercent + "%";

      // 숫자 애니메이션
      let current = 0;
      const duration = 1500; // ms
      const frameRate = 60;
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentPercent = Math.round(targetPercent * progress);

        span.innerText = currentPercent + "%";

        if (frame >= totalFrames) {
          clearInterval(counter);
          span.innerText = targetPercent + "%";
        }
      }, 1000 / frameRate);
    }
  });
}

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);
