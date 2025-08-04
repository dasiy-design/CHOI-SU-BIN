var btn = document.querySelectorAll("button.modal-custom-button");
var modals = document.querySelectorAll(".modal-custom");
var spans = document.getElementsByClassName("close-modal");

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
  };

  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        modals[index].style.display = "none";
    }
  };
}

// When the user clicks anywhere outside of the modal, close it
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
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// 다음 슬라이드 이동버튼 설정
next.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");

  container.append(slides[0]);
});

// 이전 슬라이드 이동버튼 설정
prev.addEventListener("click", () => {
  const slides = document.querySelectorAll(".slide");

  container.prepend(slides[slides.length - 1]);
});
