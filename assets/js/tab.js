$(document).ready(function(){

  $(".btn li").click(function(){
    // $(this).addClass("active");
    // $(this).siblings().removeClass("active");
    $(this).addClass("active").siblings().removeClass("active")

    let result = $(this).attr("data-alt");
    $(".tabContents div").removeClass("active");
    //$("#"+result).addClass("active");
    $("#"+result).addClass("active").hide().fadeIn();
    //#tab1, #tab2....
  });

});