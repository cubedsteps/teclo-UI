$('#form-next-btn').click(function(){
    $('.repair-form').toggleClass('display-none')
    $('.user-information-form').toggleClass('display-none')
})

$('#previous-btn').click(function(){
    $('.repair-form').toggleClass('display-none')
    $('.user-information-form').toggleClass('display-none')
})

if( screen.width <= 768){
    $('.filter-container').addClass('display-none')
    $('.main-container__filter').removeClass('display-none')
    $('.filter-cross-btn').removeClass('display-none')
    $('.main-container__filter').click(function(){
        $('.filter-container').toggleClass('display-none')
    })
    $('.filter-cross-btn').click(function(){
        $('.filter-container').toggleClass('display-none')
    })
}

// $('.tag').hover(function(){
//     $('.tag').addClass('hover-tag');
// })