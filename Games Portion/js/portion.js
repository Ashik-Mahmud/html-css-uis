
$(document).ready(function(){
    
    var jump = $(".jump");
    var walkFront = $(".walkFront");
    var walkBack = $(".walkBack");
    var turn = $(".turn");
   
// CODE FOR JUMP 
jump.click(function(){
        $(".soulder").animate({
            bottom:"180px"
           })
       })
jump.mouseout(function(){
    $(".soulder").animate({
        bottom:"0px"
       })
   })

//    CODE FOR WLAK FRONT 
walkFront.click(function(){
    $(".soulder").animate({
        left:"+=50px"
       })
})

// CODE FOR WALK BACK 
walkBack.click(function(){
    $(".soulder").animate({
        left:"-=50px"
        
       })
})

// CODE FOR TURN 

turn.click(function(){
   $(".soulder").toggleClass("turnOne");
})

// CODE FOR CHANGE PLAYER

var player = $(".blind");
var player1 = $(".blind1");
var player2 = $(".blind2");
var player3 = $(".blind3");
var player4 = $(".blind4");
var change = $(".change");
change.click(function(){
    if(player.hasClass("show")){
        player.removeClass("show")
        player1.addClass("show")
    }else if(player1.hasClass("show")){
        player1.removeClass("show")
        player2.addClass("show")
    }else if(player2.hasClass("show")){
        player2.removeClass("show")
        player3.addClass("show")
    }
    else if(player3.hasClass("show")){
        player3.removeClass("show")
        player4.addClass("show")
    }
    else if(player4.hasClass("show")){
        player4.removeClass("show")
        player.addClass("show")
    }
})

// CODE FOR SCORE BOARD
    var score = $(".score").text()
   
    var Myinterval = setInterval(count,500)

    function count(){
        $(".score").html(++score)
    }

// CODE FOR SETTING Option; 

var night = $(".night");
var day = $(".day");
var noon = $(".noon");
var gameTheme = $(".gamesmen");


night.click(function(){
   gameTheme.css({background:"linear-gradient(black,gray)",color:"white"})
})
day.click(function(){
    gameTheme.css({background:"linear-gradient(skyblue,white)",color:"black"})
 })
 noon.click(function(){
    gameTheme.css({background:"linear-gradient(wheat,white)",color:"black"})
 })

// CODE FOR CONTROL OPTION 
 var night1 = $(".night1");
 var day1= $(".day1");
 var noon1 = $(".noon1");
 var controlBox = $(".GamesControl");


    night1.click(function(){
        controlBox.css({background:"linear-gradient(black,gray)",color:"black"})
     }) 
    day1.click(function(){
        controlBox.css({background:"linear-gradient(skyblue,white)"})
     }) 
    noon1.click(function(){
        controlBox.css({background:"linear-gradient(wheat,white)"})
     }) 





})