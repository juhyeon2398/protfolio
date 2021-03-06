$("#gnb .list>li").on("mouseenter",function(){
    $("#header").addClass("on");
})
$("#gnb .list>li").on("mouseleave",function(){
    $("#header").removeClass("on");
})

$("#business .txtBox ul>li").on("click",function(){
    if(!$(this).hasClass("active")){
        $(this).addClass("active")
        $(this).siblings().removeClass("active");
    }
    return false;   
})




let mainVisual = new Swiper("#mainVisual .mask",{
    speed:1000,
    effect:"slide",
    scrollbar:false,
    loop:true,
    pagination: {
        el: '#mainVisual .mask .pagination',
        type: 'bullets',
        clickable:true,
    },
})
let business = new Swiper("#business .txtBox .listBox .imgBox",{
    effect:"slide",
    loop:true,  
    observer:true,
    observeParents:true, 
    spaceBetween: 0,   
    autoplay:{
    }
})


let community = new Swiper("#community .contentList .notice .txtBox",{
    effect:"slide",
    loop:true,  
})
new fullpage("#main",{

})

let rain = gsap.timeline();

var random = Math.floor(Math.random() * 3);

$('.drop').eq(random).addClass("active");