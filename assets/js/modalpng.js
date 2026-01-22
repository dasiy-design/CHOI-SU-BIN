// experience modal
const modal = document.getElementById("careerModal");
const modalImg = modal.querySelector("img");
const closeBtn = modal.querySelector(".modal-close");

document.querySelectorAll(".right-panel li[data-img]").forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.dataset.img;
    modalImg.src = imgSrc;
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  modalImg.src = "";
}

// uiux modal
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("imageModalImg");
  const closeBtn = document.querySelector(".image-modal-close");

  const overviewBtns = document.querySelectorAll(".overview-btn");
  console.log("오버뷰 버튼 개수:", overviewBtns.length);

  overviewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.dataset.overviewImg;
      console.log("클릭됨, 이미지:", imgSrc);

      if (!imgSrc) return;

      modalImg.src = imgSrc;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "";
  }
});
