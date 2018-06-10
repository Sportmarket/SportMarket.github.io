


$(document).ready(function () {
	
	$("#dropdown").mouseenter(function(){
		$("#DropDown").show();
	});

	$("#header, #DropDown").mouseleave(function(){
		$("#DropDown").hide();
	})

	$(".home, .novelties").mouseenter(function(){
		$("#DropDown").hide();
	})

	$(".IN").click(function() {
		$("#login").slideToggle();
	});


 	var n = 0;

	setInterval(function(){
		
		if (n == 0) {
  			$("#nike_1").attr("src","Images/nike_1-2.jpg");
  			$("#nike_2").attr("src","Images/nike_2-2.jpg");
  			$("#nike_3").attr("src","Images/nike_3-2.jpg");
  			n = 1;
  		}else{
  			$("#nike_1").attr("src","Images/nike_1-1.jpg");
  			$("#nike_2").attr("src","Images/nike_2-1.jpg");
  			$("#nike_3").attr("src","Images/nike_3-1.jpg");
  			n=0;
 		 }
	}, 3000);

	var i = 1;

	$("#f-1").on("click",function(){

		$("#info").addClass("info-full");
		$("#f-1").hide();

	});
	
		$("#f-2").on("click",function(){
		$("#info").removeClass("info-full");
		setTimeout(function() { $("#f-1").show() }, 500);
	});

	$("#anchor").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

	$(function(){
 		$(window).scroll(function() { 
 	 	var top = $(document).scrollTop();
  		if (top > 400) $('#anchor').addClass('anchor-fix'); 
  		else $('#anchor').removeClass('anchor-fix');
 		});
	});



});