$(document).ready(function () {

    $('.directions-blocks').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ]
    });

    $(document).ready(function () {
        var menuBtn = $('.top-nav_btn');
        var sidebarBtn = $('.left-sidebar_btn');
        var menu = $('.top-nav_menu');
        var sidebarMenu = $('.left-sidebar_menu');
        menuBtn.on('click', function (event) {
            event.preventDefault();
            menu.toggleClass('top-nav_menu__active');
        })
        sidebarBtn.on('click', function (event) {
            event.preventDefault();
            sidebarMenu.toggleClass('left-sidebar_menu__active');
        })
    });
    var elem = document.querySelector('.calc-range');
	var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step:100000 });
	
	var per, month, result, total, monthly;
	var money = +$('.calc-range').val();
	

	$('input[name="programms"]').on('change', function(event) {
		month = +$(this).attr('data-month');
		per = +$(this).attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = result / month;
		$('#total').text(Math.round(total).toLocaleString());
		$('.calc-monthly span').text(Math.round(monthly).toLocaleString());
		$('#month').text(month);
		if(month==24) {
		    $('.calc-total small').text(`?????????? ?????????? ${month} ????????????`);
		  } else {
		    $('.calc-total small').text(`?????????? ?????????? ${month} ??????????????`);
	  }
	});

	$(".calc-range").on('change', function(event) {
    	$('.calc-summ_invest_num span').text((Math.round($(this).val() / 10) * 10 ).toLocaleString() + " ??????.");
	 	var radio = $('input[name="programms"]:checked');
	 	money = +$(this).val()
	 	month = +radio.attr('data-month');
		per = +radio.attr('data-per');
		result = Math.round(per / 12 * month * money);
		total = result + money;
		monthly = result / month;
		$('#total').text(Math.round(total).toLocaleString());
		$('.calc-monthly span').text(Math.round(monthly).toLocaleString());
    });
});