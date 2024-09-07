var signUpBtn = document.querySelector("#sign-up-btn");
var signInBtn = document.querySelector("#sign-in-btn");
var UiDesign = document.querySelector(".ui");
signUpBtn.addEventListener("click",function(){
    UiDesign.classList.add("move-design");
})
signInBtn.addEventListener("click",function(){
     UiDesign.classList.remove("move-design");
});

