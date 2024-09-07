$(document).ready(function(){
    
    var incree = $(".increement .incree").text();
    var myInterval = setInterval(count ,10);

    function count(){
        $(".increement .incree").html(++incree)
        if(incree==500){
            clearInterval(myInterval)
        }
    }
})