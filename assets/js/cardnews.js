//모달 외부 아무곳이나 클릭하면 모달 닫기
window.onclick = function (event) {
  if (event.target.classList.contains("modal-custom")) {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  }
};

// modal cardnews button click
const container = document.querySelector(".container");
const arrowButton = document.querySelector(".arrow button");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// 다음 슬라이드 이동버튼 설정
next.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");

  container.append(slides[0]); //다른 요소 들어올 때 오작동 막기 위함.
});

// 이전 슬라이드 이동버튼 설정
prev.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");

  container.prepend(slides[slides.length - 1]);
});
