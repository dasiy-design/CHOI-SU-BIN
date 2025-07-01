$(document).ready(function(){

  let gOldIdx = 0;
  let gNewIdx = 0;
  let gImgCount = $(".largeImg li").length; //개수구하기(1,2,3....)

  //썸네일,큰이미지,텍스트 변경하는 함수생성
  function galleryImg(gNewIdx){
    if(gOldIdx != gNewIdx){  
      $(".thumbs li").eq(gOldIdx).css({"opacity":0.7});  // 기존의 썸네일 흐리게		
      $(".thumbs li").eq(gNewIdx).css({"opacity":1});  //선택된 썸네일 선명하게	
      $(".largeImg li").eq(gOldIdx).stop().fadeOut(300);  //기존 이미지 사라짐
      $(".largeImg li").eq(gNewIdx).stop().fadeIn(300);  //선택된 이미지 나타남
      $(".imgText li").eq(gOldIdx).stop().fadeOut(300);  //기존 텍스트 사라짐
      $(".imgText li").eq(gNewIdx).stop().fadeIn(300);  //선택된 텍스트 나타남
    };
    gOldIdx = gNewIdx;  //동작 후에 새index는 기존index에 저장이 되어서 사라져야 함
  };


  //썸네일버튼
  $(".thumbs li").click(function(){
    gNewIdx = $(this).index();
    galleryImg(gNewIdx); //클릭한 index번호를 함수의 매개변수로 전달
  });

  //이전버튼
  $(".left_btn").click(function(){
    gNewIdx--;
    if(gNewIdx<0){  //계속 1씩 감소하다가 0이하가 되면 맨뒤부터 다시 시작
      gNewIdx = gImgCount-1;  //총개수 10개에서 1을 빼야 마지막 index번호 9가 됨
    }
    galleryImg(gNewIdx);
  });

  //다음버튼
  $(".right_btn").click(function(){
    gNewIdx++;
    if(gNewIdx>gImgCount-1){ //계속 1씩 증가하다가 9가 초과되면 처음부터 다시 시작
      gNewIdx = 0;
    }
    galleryImg(gNewIdx);
  });

});