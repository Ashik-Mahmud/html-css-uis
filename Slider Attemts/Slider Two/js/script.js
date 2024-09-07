var sliderItem = document.getElementsByClassName("sliderItem");
var RadioOne = document.getElementsByClassName("radioOne")[0];
var RadioTwo = document.getElementsByClassName("radioTwo")[0];
var ani = document.getElementsByClassName("hide")[0];
var ani1 = document.getElementsByClassName("hide1")[0];

RadioTwo.addEventListener("click",function(){
    if(sliderItem[0].classList.contains("show")){
        sliderItem[0].classList.remove("show");
        sliderItem[1].classList.add("show");
        ani.classList.add("aga");
        ani1.classList.add("aga1")
    }
})
RadioOne.addEventListener("click",function(){
    if(sliderItem[1].classList.contains("show")){
        sliderItem[1].classList.remove("show");
        sliderItem[0].classList.add("show");
        ani.classList.remove("aga");
        ani1.classList.remove("aga1")
    }
})

var sliderItem = document.getElementsByClassName("sliderItem");
var RadioOne = document.getElementsByClassName("radioOne")[0];
var RadioTwo = document.getElementsByClassName("radioTwo")[0];
var ani = document.getElementsByClassName("hide")[0];
var ani1 = document.getElementsByClassName("hide1")[0];

setInterval(function(){
    if(sliderItem[0].classList.contains("show")){
        sliderItem[0].classList.remove("show");
        sliderItem[1].classList.add("show");
        ani.classList.add("aga");
        ani1.classList.add("aga1")
     
    }else if(sliderItem[1].classList.contains("show")){
        sliderItem[1].classList.remove("show");
        sliderItem[0].classList.add("show");
        ani.classList.remove("aga");
        ani1.classList.remove("aga1") 
    }


},10000)