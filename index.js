var nav = ["#projects","#illust","#tos"];

$(document).ready(function(){
    var i;
    for(i=0;i<nav.length;i++){
        $(nav[i]).css("display","none");
    }
    $(nav[0]).css("display","inherit");
    if (location.hash != ""){
        var hash = location.hash;
        
        if (nav.includes(hash)) {
            $(nav[0]).css("display","none");
            $(hash).css("display","inherit");
            $('body,html').animate({
                scrollTop: $(hash).offset().top - 15
                }, 1200, function(){
                window.location.hash = hash;
            });
        } 
    }

    $("a").on('click', function(event) {
      
        event.preventDefault();
        var hash = this.hash;
        var href = this.href;
        
        var sections = ['#about','#work','#contact'];
        
        if (sections.includes(hash)==true){
          $('body,html').animate({
          scrollTop: $(hash).offset().top
          }, 1200, function(){
          window.location.hash = hash;
          });
        }
        else if (href!=""){
          window.location.href = href;
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

function onNavClick(hash){
    var i;
    for (i=0;i<nav.length;i++){
        $(nav[i]).css("display","none");
    }
    $(hash).css("display","inherit");
    history.replaceState(null, null, hash);
    refreshImages();
}

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;
  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}

function refreshImages(){
  $('.examples').isotope({ 
    layoutMode:'masonry'
  });
  $('.grid').isotope({ 
      filter:"*",
      layoutMode:'masonry'
  });
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
      refreshImages();
    },1000);
},1500);