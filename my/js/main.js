let computer = $("#main .computer");

//창 열기
let iconList = $("#main .computer .iconList");
for (let i = 1; i <= iconList.length; i++) {
  $(`#main .computer .iconList>li:nth-child(${i})`).on("click", function () {
    $(`#main .computer .info0${i}`).addClass("active");
    $(`#main .computer .info0${i}`).siblings().removeClass("active");
    $(`#main .computer .info0${i}`).css("left", "25%");
    $(`#main .computer .info0${i}`).css("top", "10%");
    $("#main .computer .info .contents").scrollTop(0);
    if ($("#main .computer #buttomMenu .menuList").hasClass("menuOn")) {
      $("#main .computer #buttomMenu .menuList").removeClass("menuOn");
    }
  });
  //창 닫기
  $(`#main .computer .info0${i} .btnClose`).on("click", function () {
    $(`#main .computer .info0${i}`).removeClass("active");
    if ($("#main .computer #buttomMenu .menuList").hasClass("menuOn")) {
      $("#main .computer #buttomMenu .menuList").removeClass("menuOn");
    }
  });
}

let windowList = $("#main .computer #buttomMenu .menuList .iconList .list");
for (let i = 1; i <= windowList.length; i++) {
  $(`#main .computer #buttomMenu .menuList .iconList .list>li:nth-child(${i})`).on(
    "click",
    function () {
      $(`#main .computer .info0${i}`).addClass("active");
      $(`#main .computer .info0${i}`).siblings().removeClass("active");
      $(`#main .computer .info0${i}`).css("left", "25%");
      $(`#main .computer .info0${i}`).css("top", "10%");
      $("#main .computer .info .contents").scrollTop(0);
    },
  );
  $(`#main .computer #buttomMenu .menuList .iconList .list .project`).on(
    "click",
    function () {
      $(`#main .computer .info02`).addClass("active");
      $(`#main .computer .info02`).siblings().removeClass("active");
      $(`#main .computer .info02`).css("left", "25%");
      $(`#main .computer .info02`).css("top", "10%");
      $("#main .computer .info .contents").scrollTop(0);
    },
  );
}


//윈도우 메뉴
$("#buttomMenu .menu").on("click", function () {
  $(".menuList").toggleClass("menuOn");
  if (!$("#buttomMenu .menu").hasClass("menuOn")) {
    $(".menuList .cogMenu").removeClass("cogOn");
  }
});

//설정 메뉴
$("#buttomMenu .menuList .btns .cog").on("click", function () {
  $(".menuList .cogMenu").toggleClass("cogOn");
});

//배경 전환
let imgList = $("#buttomMenu .menuList .cogMenu li");
for (let i = 2; i <= imgList.length; i++) {
  $(`#buttomMenu .menuList .cogMenu .imgList01`).on("click", function () {
    computer.css({ backgroundImage: `url('../image/bg01.jpg')` });
    $(".drop").css("animation-play-state", "running");
    $(".drop").css("display", "block");
    $("#main .computer .inner .iconList li span").css("color", "#fff");
  });
  $(`#buttomMenu .menuList .cogMenu .imgList0${i}`).on("click", function () {
    computer.css({ backgroundImage: `url('../image/bg0${i}.jpg')` });
    $(".drop").css("animation-play-state", "paused");
    $(".drop").css("display", "none");
    $("#main .computer .inner .iconList li span").css("color", "#000");
  });
}

//창크기 조절
$(function () {
  $(".info").draggable({ handle: ".topMenu" });
  $(".info").resizable({
    animate: true,
  });
});

//별똥별
setInterval(function () {
  let random = Math.floor(Math.random() * 3);
  $(".rain .drop").eq(random).addClass("dropRain");
  $(".rain .drop").eq(random).siblings().removeClass("dropRain");
}, 4000);
