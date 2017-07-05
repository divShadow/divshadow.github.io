$(document).ready(function () {
	$('#carousel-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination: true,
    paginationNumbers: true,
    responsive:{
        0:{
            items:1,
            center: true
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

	$('#carousel-two').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination: true,
    responsive:{
        0:{
            items:1,
            center: true
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

	$('#carousel-three').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    pagination: true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
	
	$(function(){
		$('#Container').mixItUp ({

		});
	});

    $(".target").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});



