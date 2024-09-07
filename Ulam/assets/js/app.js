 var typed2 = new Typed('#animated', {
    strings: ['<span class="name">Ashik <i>Mahmud.</i></span>', 'Web <strong>Developer.</strong>', 'Freelancer at Fiverr.'],
   typeSpeed: 50,
    backSpeed: 50,
    backDelay: 50,
    startDelay: 100,
    loop: true
  });

  
//   Toggle 

document.querySelector(".humberger").onclick = function(){
    document.querySelector(".menu").classList.add("show");
    document.querySelector("#main").classList.add("show-main");
}
document.querySelector(".close-btn").onclick = function(){
    document.querySelector(".menu").classList.remove("show");
    document.querySelector("#main").classList.remove("show-main");

}