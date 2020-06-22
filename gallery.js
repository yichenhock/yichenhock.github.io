// filter gallery


$('.btn').click(function(){
    $('.btn').removeClass('on');
    $(this).toggleClass('on');
});

$('.btn.all').click(function(){
    $('.grid').isotope({
        filter: '*'
    })			
});


$('.btn.artwork').click(function(){
    $('.grid').isotope({
        filter: '.artwork'
    })
});


$('.btn.programming').click(function(){
    $('.grid').isotope({
        filter: '.programming'
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

$('.grid').isotope({ filter: '*' });