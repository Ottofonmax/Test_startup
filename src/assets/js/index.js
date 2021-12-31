window.addEventListener("DOMContentLoaded", init);

function init() {

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }
  });

  $('header .header__burger').click(function () {
    let menuItem = $(this)
    if ($(this).hasClass('active')) {
      $(this).parents('header').find('.nav-list').slideUp(300);
      $(this).parents('header').removeClass('open');
      $('body').removeClass('lock');
      setTimeout(function () {
        menuItem.removeClass('active');
      }, 300);
    } else {
      $(this).parents('header').find('.nav-list').slideDown(300);
      $(this).parents('header').addClass('open');
      $('body').addClass('lock');
      setTimeout(function () {
        menuItem.addClass('active');
      }, 300);
    }
  });
  if ($(window).width() < 1020) {
    $('header .nav-list a').click(function () {
      $(this).parents('header').find('.nav-list').slideUp(300);
      $(this).parents('header').removeClass('open');
      $('body').removeClass('lock');
      setTimeout(function () {
        $('header .header__burger').removeClass('active');
      }, 300);
    });
  }



  function findTabs(tabName, tabItem, addClass) {
    $(tabItem).removeClass(addClass);
    $(tabName).each(function () {
      let inName = $(this);
      if (inName.hasClass(addClass)) {
        $(tabItem).each(function () {
          if (inName.attr('data-name') == $(this).attr('data-name')) {
            $(this).addClass(addClass);
          }
        });
      };
    });
  };



  $('.tab-items').on('click', function () {
    findTabs('.tab-items', '.tab-content', 'active');
  });
  $('.tab-items').click(function () {
    $(this).addClass('this_active');
    $(this).parent().find('.tab-items').removeClass('active')
    $('.this_active').addClass('active');

    findTabs('.tab-items', '.tab-content', 'active');
    $(this).parent().find('.tab-items').removeClass('this_active');

  });

  $(document).ready(function () {
    if ($(window).width() < 760) {
      $('.tab-links .tab-items:last-child').click(function () {
        $('.tab-links').animate({ scrollLeft: '+=150' }, 1000, 'linear');
      });
      $('.tab-links .tab-items:first-child').click(function () {
        $('.tab-links').animate({ scrollLeft: '-=150' }, 1000, 'linear');
      });
    }
  });

  $('.about_slider').slick({
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button class="slick-prev"><img src="./assets/img/i-arr-l.png"></button>',
    nextArrow: '<button class="slick-next"><img src="./assets/img/i-arr-l.png"></button>',
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

   $("header .nav-link").on("click", function (ss) {
    ss.preventDefault();
    var fixed_offset = 70;
    var id = $(this).attr('href'),
      top = $(id).offset().top - fixed_offset;
    $('body,html').animate({ scrollTop: top }, 'slow');
  });



};


