$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
var width = $(window).width(); 

window.onscroll = function(){
    if ((width >= 900)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#middle").css("background-size","150% auto");
        }else{
            $("#middle").css("background-size","100% auto");        
        }
    }
};

function showillust(){
    $("#illust_container").css("display","inherit");
    $("#illust_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#illust_container").removeClass("animated slideInUp");
    },800);
}
function closeillust(){
    $("#illust_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#illust_container").removeClass("animated slideOutDown");
        $("#illust_container").css("display","none");
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);

