$('.banner .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})


$('.sub__megamenu-slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



$('.category__product .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        },
        1220: {
            items: 4
        },
        1600: {
            items: 5
        }
    }
})


$('.brand__product-wrap .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    nav: false,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        567: {
            items: 3
        },
        991: {
            items: 4
        },
        1220: {
            items: 5
        },
        1700: {
            items: 7
        }
    }
})

const header = {
    init: function() {
        this.scrollNav('.header');
        this.showMenu('.show__menu', '.menu__active');
    },
    scrollNav: function(header) {
        let headerNav = document.querySelector(header);
        let getHeightNav = headerNav.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > getHeightNav) {
                headerNav.classList.add('active')
            } else {
                headerNav.classList.remove('active');
            }
        });
    },
    showMenu: function(showTab, menuActive) {
        let menu = document.querySelector(menuActive);
        let show = document.querySelector(showTab);
        show.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.toggle('show');
        });
    }
}
header.init();

const footer = {
    init: function() {
        this.scrollTop('.backtotop');
    },
    scrollTop: function(scrollTop) {
        let backtotop = document.querySelector(scrollTop);
        let getHeight = backtotop.offsetHeight;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > getHeight) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        });
        backtotop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
footer.init();

// const product = {
//     init: function() {
//         this.filterItem('.nav__tab-item', '.product__inside');
//     },
//     filterItem: function(btns, productItem) {
//         let button = document.querySelectorAll(btns);
//         let products = document.querySelectorAll(productItem);
//         button.forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 products.forEach(product => {
//                     product.style.display = 'none';
//                     let values = product.textContent;
//                     if (product.getAttribute('data-id') === values) {
//                         product.style.display = 'block';
//                     };
//                 });
//             });
//         });
//     }
// }
// product.init();