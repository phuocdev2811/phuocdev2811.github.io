$('.banner .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
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

$('.slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1
        },
        600: {
            items: 1,
        },
        900: {
            items: 3,
        },
        1000: {
            items: 3
        }
    }
})

$('.new-product .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    margin: 15,
    responsive: {
        0: {
            items: 1,
        },
        320: {
            items: 1
        },
        600: {
            items: 2,
        },
        900: {
            items: 3,
        },
        1200: {
            items: 4,
        },
        1500: {
            items: 5,
        }
    }
})