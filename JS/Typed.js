$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     var typed = new Typed(".typing", {
         strings:["Páginas Web", "Jogos", "Projetos", "Programas"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["Fábrica de Software!"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
});


