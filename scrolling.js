$( document ).ready(function() {
    console.log( "ready!" );

    AOS.init();

//When .toggle() btn is clicked the div should appear and disappear
$("#stepOne").click(function() {
    $(".tea").removeClass("d-none");
    $(".tea").animate({left: "+=20em"}, 1200);
    $(".tea").fadeOut("slow", function(){
        $(".sugar").removeClass("d-none");
        $(".sugar").animate({left: "+=15em"}, 1200);
        $(".sugar").fadeOut("slow", function(){
            $(".pot").attr('src','assets/kombucha-12.svg');
            $(".tea").addClass("d-none");
            $(".tea").fadeIn();
            $(".tea").animate({left: "-=20em"}, 1); 
            $(".sugar").addClass("d-none");
            $(".sugar").fadeIn();
            $(".sugar").animate({left: "-=15em"}, 1); 
        });
    });  
});
    
$("#stepTwo").click(function(){
    $(".thermometer").removeClass("d-none");
    $(".thermometer").animate({left: '-=100', top: '+=130'}, 1400).delay(800);
    $(".thermometer").fadeOut('slow', function(){
        $(".thermometer").addClass("d-none");
        $(".thermometer").fadeIn();
        $(".thermometer").animate({left: '+=100', top: '-=150'}, 1); 
        
    })   
});
    
//var count=0;   
//$("#stepThree").click(function() {
//    count+=1;
//    console.log(count);
//    $(".time").addClass("d-none"); 
//    $(".jar").attr('src','assets/kombucha-06.svg');
//    $(".glass").removeClass("d-none");
//    $(".glass").animate({left: "+=350"}, 1200);
//    $(".glass").fadeOut("slow", function(){
//        $(".jar").attr('src','assets/kombucha-21.svg');
//        $(".scoby").removeClass("d-none");
//        $(".scoby").animate({left: "+=310"}, 1200);
//        $(".scoby").fadeOut("slow", function(){
//            $(".jar").attr('src','assets/kombucha-22.svg');
////            $(".glass").addClass("d-none");
//            $(".glass").fadeIn();
//            $(".glass").animate({left: "-=350"}, 1000); 
////            $(".scoby").addClass("d-none");
//            $(".scoby").fadeIn();
//            $(".scoby").animate({left: "-=310"}, 1000); 
//        });
//    });    
//});
    
$("#stepThree").click(function() {
    var count=0;
    $(".time").addClass("d-none"); 
    $(".cover").addClass("d-none"); 
    $(".jar").attr('src', 'assets/kombucha-06.svg');
    $(".glass").removeClass("d-none");
    $(".glass").animate({left: "+=350"}, 1200);
    $(".glass").fadeOut("slow", function(){
        if(count<1){
            $(".jar").attr('src','assets/kombucha-21.svg');
            $(".scoby").removeClass("d-none");
            $(".scoby").animate({left: "+=310"}, 1200);
            count+=1;
        }
        $(".scoby").fadeOut("slow", function(){
            if(count<2) {
                $(".jar").attr('src','assets/kombucha-22.svg');
                $(".glass").addClass("d-none");
                $(".glass").fadeIn();
                $(".glass").animate({left: "-=350"}, 1); 
                $(".scoby").addClass("d-none");
                $(".scoby").fadeIn();
                $(".scoby").animate({left: "-=310"}, 1); 
                count+=1;
            }
        });
    });  
});
    
$("#stepFour").click(function() {
    $(".jar").attr('src','assets/kombucha-22.svg');
    $(".time").addClass("d-none");   
    $(".time").removeAttr('src');
    $(".cover").finish().css('top', '0').css('left', '0');
    $(".cover").removeClass("d-none");
    $(".cover").stop(true).animate({left: '+=5', top: '+=130'}, 1400, function(){
        $(".time").attr('src', 'assets/7days.gif');
        $(".time").removeClass("d-none");  
    });  
});   


$("#stepFive").click(function() {
    $('.closed-jar1').attr('src', 'assets/kombucha-27.svg');
    $('.closed-jar1').css("z-index",2);
    var ele = $(".closed-jar1").clone().css({position:"absolute","z-index":"1"}).attr("src","assets/kombucha-28.svg");
    $('.closed-jar1').after(ele).fadeOut('slow');
});
    
$("#stepSix").click(function() {
    $('.closed-jar1').attr('src', 'assets/kombucha-28.svg');
    $('.bottle').removeClass('d-none');
    $('.closed-jar1').animate({left: "-=350"}, 1400, function(){
        $('.closed-jar1').fadeOut('slow');
        $('.bottle').attr('src', 'assets/kombucha-30.svg', function(){
//          $('.closed-jar1').addClass('d-none');
            $('.closed-jar1').fadeIn();
            $('.closed-jar1').animate({left: "+=350"}, 1400);
            $('bottle').effect('shake');
        });

    });
});
    
});