var header = document.querySelector("#header");
var h = window.innerHeight;
// console.log(h);
window.addEventListener("resize",() => {
    h = window.innerHeight;
})
var mainVisual = document.querySelector("#mainVisual");
window.addEventListener("scroll",() => {
    //console.log(scrollY);
    var st = this.scrollY;
    mainVisual.style.top = -st*0.2+"px";
    mainVisual.style.opacity = (1000-st)/1000;
    if(st > h) {
        header.classList.add("on");
    } else {
        header.classList.remove("on");
    }
    //console.log(st);
});

// AOS 
AOS.init();
