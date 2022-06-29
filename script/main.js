let i = 0;
$(function(){
    setInterval(slide, 3000);
    menu();
})
// function menu(){
//     $("#gnb > li").mouseenter(function(){
//         $(".lnb").stop().slideDown();
//     })
// }
function menu(){
    $("#gnb > li").mouseenter(function(){
        if(!$(this).hasClass("active")){$(this).addClass("active")};
        $(".lnb").stop().slideDown();
        $(".bg").stop().slideDown();
    })
    $("#gnb > li").mouseleave(function(){
        $(this).removeClass("active");
        $(".lnb").stop().slideUp();
        $(".bg").stop().slideUp();
    })
}
function slide(){
    if(i >= 3){i = 0}
    let newTop = -500 * i;
    $(".hero-imgs").css({
        marginTop : newTop
    });
    i++;
}