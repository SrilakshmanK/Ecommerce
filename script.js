(function($) {

    "use strict";
  
    var searchPopup = function () {
      // open search box
      $('.navbar').on('click', '.search-button', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });
  
      $('.navbar').on('click', '.btn-close-search', function (e) {
        $('.search-popup').toggleClass('is-visible');
      });
  
      $(".search-popup-trigger").on("click", function (b) {
        b.preventDefault();
        $(".search-popup").addClass("is-visible"),
          setTimeout(function () {
            $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
        $(".search-popup").on("click", function (b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
            $(this).removeClass("is-visible"))
        }),
        $(document).keyup(function (b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
        })
    }

    $(document).ready(function() {

      searchPopup();
      
      /* Video */
      var $videoSrc;  
        $('.play-btn').click(function() {
          $videoSrc = $(this).data( "src" );
        });

        $('#myModal').on('shown.bs.modal', function (e) {

        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
      })

      $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
      })
        
      
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: ".new-arrival-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".main-slider-button-next",
          prevEl: ".main-slider-button-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          572: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        },
      });

      var swiper = new Swiper(".testimonial-Swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop:true,
        pagination: {
          el: ".testimonial-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          572: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        },
      });
  
    }); // End of a document
  
  })(jQuery);