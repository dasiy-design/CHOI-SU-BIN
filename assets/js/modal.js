$(document).ready(function(){

  //각 목록을 클릭했을때 해당내용 나옴
  $(".item-list li").click(function(){

    pageNum =$(this).index();

    $(".page-num span:nth-child(1)").text(pageNum+1);  //오른쪽 상단 페이지번호
    $(".modal-content li").eq(pageNum).stop().fadeIn();  //각 목록의 내용
    $(".modal").stop().fadeIn(); //검정배경

  });

  ///이전다음버튼
  $(".pre").click(function(){
    if(pageNum>0){
      $(".modal-content li").eq(pageNum).hide(); 
      pageNum--;
      $(".page-num span:nth-child(1)").text(pageNum+1);
			$(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });

  $(".next").click(function(){
    if(pageNum<10){
      $(".modal-content li").eq(pageNum).hide(); 
      pageNum++;
      $(".page-num span:nth-child(1)").text(pageNum+1);
			$(".modal-content li").eq(pageNum).stop().fadeIn();
    };
  });

  //닫기버튼
  $(".close, .modal").click(function(){
    $(".modal").stop().fadeOut();
		$(".modal-content li").stop().fadeOut();
  });

});