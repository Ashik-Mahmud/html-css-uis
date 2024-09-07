function result(){
    var f1 = parseFloat(document.querySelector("#first-filed").value);
var f2 = parseFloat(document.querySelector("#second-filed").value);

var select = document.querySelector("#selected").value;

    if(select==="+"){
    var f3 =  document.querySelector("#result").value =f1+f2;
    }
    else if(select==="-"){
        var f3 =  document.querySelector("#result").value =f1-f2;
    }
    else if(select==="*"){
        var f3 =  document.querySelector("#result").value =f1*f2;
    }
    else if(select==="/"){
        var f3 =  document.querySelector("#result").value =f1/f2;
    }
}


function reset(){
  document.querySelector("#first-filed").value==="";
document.querySelector("#second-filed").value==="";
document.querySelector("#result").value==="";
    
}