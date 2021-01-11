
const menuBtn = document.querySelector('#menu');
const menuBar = document.querySelector('#ul');
menuBtn.addEventListener('click', function () {
  
     menuBar.classList.toggle('active');
}); 


//   dard mode
$('.main-mode').toggleClass(localStorage.toggled);
    function darkLight() {
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