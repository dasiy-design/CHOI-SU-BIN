// 모달 열고 닫기
var btn = document.querySelectorAll("button.modal-custom-button"); //modal open
var modals = document.querySelectorAll(".modal-custom"); //클래스 가진 모든 모달 창 요소 선택
var spans = document.getElementsByClassName("close-modal"); //닫기 버튼 선택

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {
    e.preventDefault(); //버튼 클릭시
    modal = document.querySelector(e.target.getAttribute("href")); //링크이동막기
    modal.style.display = "block"; //각 아이디명에 맞는 모달 열기
  };

  spans[i].onclick = function () {
    for (var index in modals) {
      if (typeof modals[index].style !== "undefined")
        //닫기버튼 누르면
        modals[index].style.display = "none"; //모든 모달 반복하면서 모든 모달 닫기
    }
  };
}
