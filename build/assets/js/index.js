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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAkKHdpbmRvdykub24oXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAzMDApIHtcclxuICAgICAgJChcImhlYWRlclwiKS5hZGRDbGFzcyhcInNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJzY3JvbGxcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJ2hlYWRlciAuaGVhZGVyX19idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbWVudUl0ZW0gPSAkKHRoaXMpXHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5wYXJlbnRzKCdoZWFkZXInKS5maW5kKCcubmF2LWxpc3QnKS5zbGlkZVVwKDMwMCk7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdsb2NrJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1lbnVJdGVtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnaGVhZGVyJykuZmluZCgnLm5hdi1saXN0Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnaGVhZGVyJykuYWRkQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdsb2NrJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1lbnVJdGVtLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgfSwgMzAwKTtcclxuICAgIH1cclxuICB9KTtcclxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMDIwKSB7XHJcbiAgICAkKCdoZWFkZXIgLm5hdi1saXN0IGEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50cygnaGVhZGVyJykuZmluZCgnLm5hdi1saXN0Jykuc2xpZGVVcCgzMDApO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudHMoJ2hlYWRlcicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbG9jaycpO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdoZWFkZXIgLmhlYWRlcl9fYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICB9LCAzMDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGZpbmRUYWJzKHRhYk5hbWUsIHRhYkl0ZW0sIGFkZENsYXNzKSB7XHJcbiAgICAkKHRhYkl0ZW0pLnJlbW92ZUNsYXNzKGFkZENsYXNzKTtcclxuICAgICQodGFiTmFtZSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpbk5hbWUgPSAkKHRoaXMpO1xyXG4gICAgICBpZiAoaW5OYW1lLmhhc0NsYXNzKGFkZENsYXNzKSkge1xyXG4gICAgICAgICQodGFiSXRlbSkuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBpZiAoaW5OYW1lLmF0dHIoJ2RhdGEtbmFtZScpID09ICQodGhpcykuYXR0cignZGF0YS1uYW1lJykpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhhZGRDbGFzcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcblxyXG4gICQoJy50YWItaXRlbXMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaW5kVGFicygnLnRhYi1pdGVtcycsICcudGFiLWNvbnRlbnQnLCAnYWN0aXZlJyk7XHJcbiAgfSk7XHJcbiAgJCgnLnRhYi1pdGVtcycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ3RoaXNfYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50YWItaXRlbXMnKS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgICQoJy50aGlzX2FjdGl2ZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICBmaW5kVGFicygnLnRhYi1pdGVtcycsICcudGFiLWNvbnRlbnQnLCAnYWN0aXZlJyk7XHJcbiAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy50YWItaXRlbXMnKS5yZW1vdmVDbGFzcygndGhpc19hY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2MCkge1xyXG4gICAgICAkKCcudGFiLWxpbmtzIC50YWItaXRlbXM6bGFzdC1jaGlsZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcudGFiLWxpbmtzJykuYW5pbWF0ZSh7IHNjcm9sbExlZnQ6ICcrPTE1MCcgfSwgMTAwMCwgJ2xpbmVhcicpO1xyXG4gICAgICB9KTtcclxuICAgICAgJCgnLnRhYi1saW5rcyAudGFiLWl0ZW1zOmZpcnN0LWNoaWxkJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoJy50YWItbGlua3MnKS5hbmltYXRlKHsgc2Nyb2xsTGVmdDogJy09MTUwJyB9LCAxMDAwLCAnbGluZWFyJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYWJvdXRfc2xpZGVyJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIj48aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9pLWFyci1sLnBuZ1wiPjwvYnV0dG9uPicsXHJcbiAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiPjxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2ktYXJyLWwucG5nXCI+PC9idXR0b24+JyxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMjAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzYwLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0pO1xyXG5cclxuICAgJChcImhlYWRlciAubmF2LWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoc3MpIHtcclxuICAgIHNzLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB2YXIgZml4ZWRfb2Zmc2V0ID0gNzA7XHJcbiAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wIC0gZml4ZWRfb2Zmc2V0O1xyXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogdG9wIH0sICdzbG93Jyk7XHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbn07XHJcblxyXG5cclxuIl0sImZpbGUiOiJpbmRleC5qcyJ9
