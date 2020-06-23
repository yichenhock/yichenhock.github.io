// filter gallery


$('.btn').click(function(){
    $('.btn').removeClass('on');
    $(this).toggleClass('on');
});

$('.btn.all').click(function(){
    $('.grid').isotope({
        filter: '*', 
        layoutMode:'masonry' 
    })			
});


$('.btn.art').click(function(){
    $('.grid').isotope({
        filter: '.art', 
        layoutMode:'masonry' 
    })
});


$('.btn.programming').click(function(){
    $('.grid').isotope({
        filter: '.programming', 
        layoutMode:'masonry' 
    })
});

$('.grid').isotope({ 
    filter: '*', 
    layoutMode:'masonry' 
});

$('.examples').isotope({ 
    layoutMode:'masonry'
});