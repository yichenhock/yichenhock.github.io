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

// $('.grid').imagesLoaded(function(){
//     // grid 배치
//     $('.grid').isotope({
//         // options
//         itemSelector: '.grid-item',
//         layoutMode: 'fitRows',
//     });
// });

$('.grid').isotope({ 
    filter: '*', 
    layoutMode:'masonry' 
});

$('.examples').isotope({ 
    layoutMode:'masonry'
});