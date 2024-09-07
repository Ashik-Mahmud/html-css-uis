

// COPDE FOR VALIDATION FORM

    var form = document.getElementsByClassName("loginForm")[0];
    var user = document.getElementsByClassName("user")[0];
    var password = document.getElementsByClassName("pwd")[0];
    var error1 = document.getElementsByClassName("error1")[0]
    var error2 = document.getElementsByClassName("error2")[0]
    var toggle = document.getElementsByClassName("toggleOption")[0];

    form.addEventListener("submit",(event)=>{

        // CODE FOR USER NAME VAILATION
      let message = [];

      if(user.value.length<1){
          message.push("Filed is Required")
          error1.style.display="block";
          user.style.border="1px solid red"
      }
      if(user.value.length>30){
        message.push("User Name Charecter too long !")
        error1.style.display="block";
        user.style.border="1px solid red"
    }

      if(message.length>0){
         event.preventDefault();
          error1.innerHTML=message.join(',');
      }

 // CODE FOR PASSWORD VAILATION
 let message1 = [];

 if(password.value.length<1){
     message1.push("Filed is Required")
     error2.style.display="block";
     password.style.border="1px solid red"
     toggle.style.bottom="86px";
 }
 if(password.value.length>20){
   message1.push("Password must be less than 20 Charecters !")
   error2.style.display="block";
   password.style.border="1px solid red";
   toggle.style.bottom="103px";
}
if(password.value.length<6 && password.value.length>1){
    message1.push("Password must be longer than 6 Charecters !")
    error2.style.display="block";
    password.style.border="1px solid red";
    toggle.style.bottom="103px";
 }
 
 if(message1.length>0){
    event.preventDefault();
     error2.innerHTML=message1.join(',');
 }
 })


 // USER INPUT VERIFY

 user.addEventListener("keyup",function(){
    if(user.value.length>1){
        error1.style.display="none";
        user.style.border="1px solid rgb(3, 165, 57)"
    }
    if(user.value.length<30){

      error1.style.display="none";
      user.style.border="1px solid rgb(3, 165, 57)"
    }

 })
 // PASSWORD INPUT VERIFY

 password.addEventListener("keyup",function(){
    if(password.value.length>1){
        
        error2.style.display="none";
        password.style.border="1px solid green"
        toggle.style.bottom="86px";
    }
 })












// CODE FOR TOGGLE OPTION OF PASWORD
function clickbtn(){
    var show = document.getElementsByClassName("show")[0];
    var hide = document.getElementsByClassName("hide")[0];
    var input = document.getElementsByClassName("pwd")[0];
    if(input.type==="password"){
        input.type="text"
        show.style.display="none";
        hide.style.display="block";
    }else{
        input.type="password"
        show.style.display="block";
        hide.style.display="none";
    }
}