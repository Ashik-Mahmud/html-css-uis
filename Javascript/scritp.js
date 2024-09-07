function showmenu(){
    var showNav = document.querySelector(".navigations");
    var tableShow = document.querySelector(".form-area");
    showNav.classList.toggle("active");
    tableShow.classList.toggle("active1");
}

function textChange(){
    var showHeading = document.querySelector("#showHeading");   
   var promptValue =  prompt("PUT THE DYNAMIC HEADING HERE =>")
    if(promptValue==""){
        showHeading.innerHTML="DEMO HEADING HERE";
    }else{
        showHeading.innerHTML=promptValue;
    }

}

    var selectBox = document.querySelector("#selectBox");
    var optionBox = document.querySelector("#oneOpt");
    var button = document.querySelector("#addBtn");
   
    button.addEventListener("click",function(){
        var valuePrompt = prompt("ADD ITEM HERE (:");
      if(valuePrompt==""){
       
        optionBox.innerHTML="Demo Option Value";
        
      }else{
        optionBox.style.display="block";
        optionBox.innerHTML= valuePrompt;

      }
        
    
      
      
})



function submitForm(){
	var inpAge = document.querySelector("input#inpAge").value;
	var inpProf = document.querySelector("input#inpProf");
	var errorMsg = document.querySelector("div#errorMsg");
	var dbAge = 25;
	var dbProf = "Teacher";
	var result = (inpAge >= dbAge && inpProf=="Teacher") ? "<font color='green'>Your Eligible</font>":"<font color='red'>Your not Eligible</font>";
	errorMsg.innerHTML=result;
}











