
document.querySelector("#loader").addEventListener("click",function(){
    var loader = document.querySelector("#loading_images").style.display="block";
    var selerName = document.querySelector('#seler_name').value;
    var productName = document.querySelector('#product_name').value;
    var productQty = document.querySelector('#qty').value;
    var productPrice = document.querySelector('#pz').value;
    var productComi = document.querySelector('#cm').value;
    if(selerName==""){

      document.querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault();
        this.reset("reset");
        var record = document.querySelector("#showRecord").style.display="none";
        setTimeout(function(){
          var error = document.querySelector("#error").style.display="block";
        },2000);
        setTimeout(function(){
          var loader = document.querySelector("#loading_images").style.display="none";

        },2000);


      })

    }else if (productName=="") {
      document.querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault();
        this.reset("reset");
        var record = document.querySelector("#showRecord").style.display="none";
        setTimeout(function(){
          var error = document.querySelector("#error").style.display="block";
        },2000);
        setTimeout(function(){
          var loader = document.querySelector("#loading_images").style.display="none";

        },2000);


      })
    }else if (productQty=="") {
      document.querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault();
        this.reset("reset");
        var record = document.querySelector("#showRecord").style.display="none";
        setTimeout(function(){
          var error = document.querySelector("#error").style.display="block";
        },2000);
        setTimeout(function(){
          var loader = document.querySelector("#loading_images").style.display="none";

        },2000);


      })
    }else if (productPrice=="") {
      document.querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault();
        this.reset("reset");
        var record = document.querySelector("#showRecord").style.display="none";
        setTimeout(function(){
          var error = document.querySelector("#error").style.display="block";
        },2000);
        setTimeout(function(){
          var loader = document.querySelector("#loading_images").style.display="none";

        },2000);


      })
    }
    else{
      document.querySelector("#form").addEventListener("submit",function(event){
        event.preventDefault();
        this.reset("reset");

          var error = document.querySelector("#error").style.display="none";

        setTimeout(function(){
          var record = document.querySelector("#showRecord").style.display="block";
        },2000);
        setTimeout(function(){
          var loader = document.querySelector("#loading_images").style.display="none";

        },2000);


      })

      function submitProduct(){
        var selerName = document.querySelector('#seler_name').value;
        var productName = document.querySelector('#product_name').value;
        var productQty = document.querySelector('#qty').value;
        var productPrice = document.querySelector('#pz').value;
        var productComi = document.querySelector('#cm').value;

      estimate(selerName,productName,productQty,productPrice,productComi);
      function estimate(selername,product,product_qty,product_pz,product_tax){
          var seler_name = selername;
          var product_name = product;
          var product_qty = product_qty;
          var product_price = product_pz;
          var product_taxs = product_tax; //%
          var product_total_price = product_price*product_qty;
          var comission = product_total_price/100*product_taxs;
          var realPrice =  product_total_price-comission;
          document.querySelector("#s_name").innerHTML= seler_name;
          document.querySelector("#p_name").innerHTML= product_name;
          document.querySelector("#p_qty").innerHTML= product_qty;
          document.querySelector("#p_price").innerHTML= product_price+" Tk";
          document.querySelector("#p_taxs").innerHTML= product_taxs +" %";
          document.querySelector("#p_r_price").innerHTML= realPrice+" Tk";
      }
      }
      submitProduct();

      













    }
})

// document.querySelector("#productName").innerHTML=product_name;
// document.querySelector("#productPrice").innerHTML=estimate('Laptop',3,25000,3);





// var select = document.getElementById("select");

// select.addEventListener("change",function(){
//     var main = document.getElementsByClassName("main")[0];
//     var val =this.value;
//     if(val==2){
//        main.style.background="red";
//     }else if(val==3){
//         main.style.background="blue";
//     }
//     else if(val==4){
//         main.style.background="crimson";
//     }
//     else if(val==5){
//         main.style.background="violet";
//     }else if(val==6){
//         main.style.background="green";
//     }else{
//         main.style.background="black";
//     }

//     })

var mainBtn = document.getElementsByClassName("btn-style");
var main = document.getElementsByClassName("main")[0];
var btn = document.getElementsByClassName("btn");

// var btn1 = document.getElementsByClassName("btn1")
// var btn2 = document.getElementsByClassName("btn2")
// var btn6 = document.getElementsByClassName("btn3")
// var btn4 = document.getElementsByClassName("btn4")
// var btn5 = document.getElementsByClassName("btn5")
// var btn6 = document.getElementsByClassName("btn6")
// var btn7 = document.getElementsByClassName("btn7")


function showPlease(){

    var hideMenu = document.getElementsByClassName("MyUl")[0];
    hideMenu.classList.toggle("showP")

}


btn[0].addEventListener("click",function(){
    main.style.background="black";
})

btn[1].addEventListener("click",function(){
    main.style.background="red";
})

btn[2].addEventListener("click",function(){
    main.style.background="green";
})

btn[3].addEventListener("click",function(){
    main.style.background="yellow";
})

btn[4].addEventListener("click",function(){
    main.style.background="crimson";
})

btn[5].addEventListener("click",function(){
    main.style.background="violet";
})
btn[6].addEventListener("click",function(){
    main.style.background="blue";
})
btn[7].addEventListener("click",function(){
    main.style.background="dodgerblue";
})
