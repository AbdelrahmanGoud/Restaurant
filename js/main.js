$(".arrowup").click( function(){
   $("html,body").animate({scrollTop:"0"},1000)
})

let scrolnav= $("#about").offset().top
$(".colonav").css({color:"white"})
$(".arrowup").fadeOut(100) 
$(window).scroll(function(){

          
          let ascroltio = $(window).scrollTop()

    
         if(ascroltio>=scrolnav)
         {
            $(".arrowup").fadeIn(100)
           
         }
         else
         {
         
            $(".arrowup").fadeOut(100)
         }
         
         
})


$(".nav-link").click(function () {

   let selectsection = $(this).attr("href")

   let mytop = $(selectsection).offset().top
   $("html,body").animate({ scrollTop: mytop }, 1000)

})

let showdata = new Date();
let display =showdata.getFullYear();
document.querySelector(".copyrights").innerHTML=`Copyright ${display}. All rights reserved.`