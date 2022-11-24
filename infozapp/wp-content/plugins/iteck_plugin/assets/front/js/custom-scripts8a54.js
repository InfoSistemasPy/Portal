
!(function ($) {


    

    function postListCarousel($scope) {
        // ------------ blog sliders -----------
        var swiper = new Swiper('.iteck-post-list-carousel .blog_slider .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 1000,
            pagination: {
                el: ".iteck-post-list-carousel .blog_slider .swiper-pagination"
            },
            navigation: {
                nextEl: '.iteck-post-list-carousel .blog_slider .swiper-button-next',
                prevEl: '.iteck-post-list-carousel .blog_slider .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            // loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
            }
        });
    }

    /* Portfolio-carousel */ 
    function iteckPortfolioCarousel($scope, $) {
        if($('.iteck-portfolio-carousel')){
            var slidesPerView = $('.iteck-portfolio-carousel').data('slider-items');
            var slidesSpaceBetween = $('.iteck-portfolio-carousel').data('slides-spacing');
        }
        var swiper = new Swiper('.iteck-portfolio-carousel .portfolio_slider .swiper-container', {
            slidesPerView: slidesPerView,
            spaceBetween: slidesSpaceBetween,
            speed: 1000,
            pagination: {
                el: ".iteck-portfolio-carousel .portfolio_slider .swiper-pagination"
            },
            navigation: {
                nextEl: '.iteck-portfolio-carousel .portfolio_slider .swiper-button-next',
                prevEl: '.iteck-portfolio-carousel .portfolio_slider .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: slidesPerView,
                },
                1200: {
                    slidesPerView: slidesPerView,
                }
            }
        });
    }

    /* Info Box Carousel */ 
    function iteckInfoBoxCarousel($scope, $) {
        // ------------ services sliders -----------
        var swiper = new Swiper('.iteck-info-box-carousel.carousel .services_slider .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 1000,
            pagination: {
                el: ".iteck-info-box.carousel .services_slider .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.iteck-info-box.carousel .services_slider .swiper-button-next',
                prevEl: '.iteck-info-box.carousel .services_slider .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }

    /* Info Box Wave Carousel */ 
    function iteckInfoBoxWaveCarousel($scope, $) {
        var swiper = new Swiper('.iteck-info-box-carousel.wave-carousel .services_slider .swiper-container', {
            slidesPerView: 6,
            centeredSlides: true,
            spaceBetween: 0,
            speed: 1000,
            pagination: false,
            navigation: false,
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 6,
                }
            },
            on: {
                slideChange: function () {
                    var activeIndex = this.activeIndex;
                    var realIndex = this.slides.eq(activeIndex).attr('data-swiper-slide-index');
                    $('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
                    $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
                    $('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
                },
            }
        });
    }

    /* Testimonails Carousel */ 
    function iteckTestimonialCarousel($scope, $) {
        // ------------ Testiominals sliders -----------
        var slidesPerView = $('.iteck-testimonial-carousel').data('slider-settings');
        
        var swiperParams = {
            slidesPerView: slidesPerView.items,
            spaceBetween: 0,
            speed: 1000,
            pagination: {
                el: ".iteck-testimonial-carousel .reviews_slider .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.iteck-testimonial-carousel .reviews_slider .swiper-button-next',
                prevEl: '.iteck-testimonial-carousel .reviews_slider .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: slidesPerView.items,
                }
            },
            loop: true,
        }

        if(slidesPerView.items < 2){
            swiperParams.effect = "fade"
        };

        var swiper = new Swiper('.iteck-testimonial-carousel.style-1 .reviews_slider .swiper-container', swiperParams );
    };

    /* Testimonails Carousel */ 
    function iteckTestimonialCarousel2($scope, $) {
        
        var slidesPerView = $('.iteck-testimonial-carousel').data('slider-settings');

        // ------------ Testiominals sliders -----------
        var swiper = new Swiper('.iteck-testimonial-carousel.style-2 .reviews_slider .swiper-container', {
            slidesPerView: slidesPerView.items,
            spaceBetween: 100,
            speed: 1000,
            pagination: {
                el: ".iteck-testimonial-carousel.style-2 .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.iteck-testimonial-carousel.style-2 .swiper-button-next',
                prevEl: '.iteck-testimonial-carousel.style-2 .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: slidesPerView.items,
                }
            }
        });
    };

    /* Screenshots Carousel */ 
    function iteckSceenshots($scope, $) {
        var swiper = new Swiper('.iteck-screenshots .screenshots-slider .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 0,
            centeredSlides: true,
            speed: 1000,
            pagination: false,
            navigation: false,
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 5,
                }
            }
        });
    }

    /* Related portfolio */ 
    function iteckRelatedPortfolios($scope, $) {
        var swiper = new Swiper('.slider-3items .swiper-container', {
            slidesPerView: 3,
            spaceBetween: 0,
            speed: 1000,
            pagination: {
                el: ".slider-3items .swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: '.slider-3items .swiper-button-next',
                prevEl: '.slider-3items .swiper-button-prev',
            },
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: false,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // ------------ clients sliders -----------
    function iteckClientsCarousel($scope, $) {
        let SwiperBottom = new Swiper('.iteck-clients-carousel .swiper-container', {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 6,
            speed: 6000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            allowTouchMove: false,
            disableOnInteraction: true,
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 2,
                },
                787: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 6,
                }
            }
        });
    }

    // ------------ clients sliders -----------
    function iteckImagesCarousel($scope, $) {
        var swiper = new Swiper('.iteck-images-carousel .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination",
                clickable: "true",
            },
            navigation: false,
            mousewheel: false,
            keyboard: true,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                787: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                }
            }
        });
    }

    jQuery(window).on('elementor/frontend/init', function () {

        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-portfolio-carousel.default', iteckPortfolioCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-post-list-carousel.default', postListCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-infobox-carousel.default', iteckInfoBoxCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-infobox-carousel.default', iteckInfoBoxWaveCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-testimonial-carousel.default', iteckTestimonialCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-testimonial-carousel.default', iteckTestimonialCarousel2);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-screenshots.default', iteckSceenshots);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-related-portfolios.default', iteckRelatedPortfolios);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-clients-carousel.default', iteckClientsCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/iteck-images-carousel.default', iteckImagesCarousel);

    });


})(jQuery); 
