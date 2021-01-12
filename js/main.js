
const menuBtn = document.querySelector('#menu');
const menuBar = document.querySelector('#ul');
menuBtn.addEventListener('click', function () {
  
     menuBar.classList.toggle('active');
}); 

// keep page
    $(document).ready(function(){
        $(this).scrollTop(0);
    });

//   dard mode
    $('.main-mode').toggleClass(localStorage.toggled);
    function darkLight() {
        location.reload();
    /*DARK CLASS*/
    if (localStorage.toggled != 'dark') {
    $('.main-mode, p').toggleClass('dark', true);
    localStorage.toggled = "dark";
    } else {
    $('.main-mode, p').toggleClass('dark', false);
    localStorage.toggled = "";
    }

    }
/*Add 'checked' property to input if background == dark*/
    if ($('.main-mode').hasClass('dark')) {
    $( '#checkBox' ).prop( "checked", true )
    } else {
    $( '#checkBox' ).prop( "checked", false )
    }
    
// SCROLL
    $('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
    {
    scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
    )
    })