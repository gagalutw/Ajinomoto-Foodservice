//加入Scroll to top按鈕
$(function () {
    $('.wrapper').append('<a href="javascript: void(0)" class="scrollToTop"><i class="fas fa-chevron-up"></i></a>');
  
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('.scrollToTop').addClass('show');
        } else {
            $('.scrollToTop').removeClass('show');
        }
      });
      
    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});


//全站nav手機版高度延伸 body no scroll
$(function () {
    var iWinH = window.innerHeight;
    $(".nav-switch").on("click", function () {
        if (!$(".nav-box").hasClass("show")) {
            $(".wrapper").css({
                "overflow": "hidden",
                "height": iWinH
            });
            $(".nav-list").css({
                "height": iWinH,
                "display": "block"
            });
        } else {
            $(".nav-list").css({
                "height": "auto"
            });
            $(".wrapper").css({
                "overflow": "visible",
                "height": "auto"
            });
        }
   
    });

    $(window).on('resize',function(){
        var winWidth = $(window).width()
        if(winWidth > 992){
            $(".nav-list").css({
                "display": "flex"
            });
        }
    });
 
});



