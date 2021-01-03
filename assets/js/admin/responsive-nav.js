if(screen.width < 768 ){
    $('#header .container-fluid').addClass('justify-content-between');
    $('#nav').addClass('display-none');
} else{
    $('#header .container-fluid').addClass('justify-content-end');
}

$('.header__nav-burger').click(function(){
    $('#nav').toggleClass('display-none');
})

$('.nav__burger').click(function(){
    $('#nav').toggleClass('display-none');
})

$('.profile-image').click(function(){
    $('.profile-box').toggleClass('display-none');
})