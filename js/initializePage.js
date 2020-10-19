jQuery(initPage());


function initPage()
{
    startCarousel();
    startGoup();
    startGallery();
}

function startCarousel()
{
    let carouselOptions = {
        autoplay: true,
        dots: true,
    }

    $('#info-carousel').slick(carouselOptions);
}

function startGoup()
{
    jQuery.goup();
}

function startGallery()
{
    let galleryOptions = {

    }

    var gallery = new SimpleLightbox(
        '#gallery a',
        galleryOptions
    )
}