$(".toast").toast()

// =====Form Validation======
     var form = document.querySelector(".signup-form");
   
     form.addEventListener("submit",function(event){
       
      var pwd = document.querySelector("#pwd");
      var user = document.querySelector("#user");
      var confirmPwd = document.querySelector("#ConPwd");
      var errorUser = document.querySelector(".errorUser")
      var error1 = document.querySelector(".errorPwd");
      var error2 = document.querySelector(".errorConPwd");
      // Validation Code for User Name 
        if(user.value.length<1){
          event.preventDefault()
          errorUser.innerHTML="<font color='red'>Enter User Name</font>"
          user.style.border='1px solid red';
        }

      // Validation Code For Password 
        if(pwd.value.length<1){
          event.preventDefault();
          error1.innerHTML="<font color='red'>Enter Password</font>"
          pwd.style.border='1px solid red'
        }
        if(pwd.value.length<8 && pwd.value.length>1){
          event.preventDefault();
          error1.innerHTML="<font color='red'>Password is too weak</font>"
          pwd.style.border='1px solid red'
          
        }

    //  Validation Code For Password & Confirm Password
        if(pwd.value===confirmPwd.value && confirmPwd.value.length>1){
          error2.innerHTML="<font color='green'>Password match</font>"

        }else{
          event.preventDefault();
          error2.innerHTML="<font color='red'>Password does not match</font>"
        }

      // Validation Code for Confirm Password 

        if(confirmPwd.value.length<1){
          event.preventDefault();
          error2.innerHTML="<font color='red'>Enter Confirm Password</font>"
          confirmPwd.style.border="1px solid red"
        }

     })


// ===Verify Code All Input===
      var user = document.querySelector("#user");
      var pwd = document.querySelector("#pwd");
      var confirmPwd = document.querySelector("#ConPwd");
      var errorUser = document.querySelector(".errorUser")
      var error1 = document.querySelector(".errorPwd");
      var error2 = document.querySelector(".errorConPwd");
// Verify User Name
     user.addEventListener("keyup",function(){
      if(user.value.length>1){
          errorUser.innerHTML=""
          user.style.border='1px solid green';
        }
     })

// Verify Password 
      pwd.addEventListener("keyup",function(){
        
        if(pwd.value.length>1){
          pwd.style.border='1px solid green'
          error1.innerHTML=""
        }
        if(pwd.value.length>=8){
          error1.innerHTML="<font color='green'>Password is being strong</font>"
          pwd.style.border='1px solid green'
          
        }
        if(pwd.value.length>1 && pwd.value.length<8){
          event.preventDefault();
          error1.innerHTML="<font color='red'>Password is being weak</font>"
          pwd.style.border='1px solid red'
        }

      })
// Verify Confirm Password 
      confirmPwd.addEventListener("keyup",function(){
         if(pwd.value===confirmPwd.value){
          error2.innerHTML="<font color='green'>Password match</font>"
         }else{
           error2.innerHTML="<font color='red'>Password does not match</font>"
           confirmPwd.style.border="1px solid red"

         }
      })



      // Select Box 

      
      function colorAdd(){
        var add = document.querySelector("#addColor");
        var errorColor = document.querySelector(".errorColor");
        var showValue = document.querySelector(".showValue");
        if(add.value.length<1){
          errorColor.innerHTML="<font color='red'>Enter Color</font>";
          add.style.border='1px solid red'
        }
        showValue.style.display="block";
        showValue.innerHTML=add.value;
      
      
      }







      var add = document.querySelector("#addColor");
      var errorColor = document.querySelector(".errorColor");
      var showValue = document.querySelector(".showValue");
      add.addEventListener("keyup",function(){

        if(add.value.length>1){
          errorColor.innerHTML="";
          add.style.border='1px solid green'
        }
     
      })

    