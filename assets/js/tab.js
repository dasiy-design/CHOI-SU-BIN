// $(document).ready(function(){

//   $(".btn li").click(function(){
//     // $(this).addClass("active");
//     // $(this).siblings().removeClass("active");
//     $(this).addClass("active").siblings().removeClass("active")

//     let result = $(this).attr("data-alt");
//     $(".tabContents div").removeClass("active");
//     //$("#"+result).addClass("active");
//     $("#"+result).addClass("active").hide().fadeIn();
//     //#tab1, #tab2....
//   });

// });

const tags= document.querySelectorAll('.tag');
const designItems = document.querySelectorAll('.design-item');

tags.forEach(tag => {
  tag.addEventListener('click', function(){
    // 모든태그에서 .active 제거
    tags.forEach(t => t.classList.remove(('active'));
    // 클릭한 태그에 active클래스 추가
    this.classList.add('active');

    const category = this.getAttribute('data-category');

    //모든 아이템 표시/숨김 표시
    designItems.forEach(item => {
      if(category === 'all' || item.getAttribute('data-category') === category){
        item.classList.remove('hidden');
      }else{
        item.classList.add('hidden');
      }
    });
  });
});