function openModal(imgUri) {
    const modalDiv = document.createElement("div")
    modalDiv.id = "lightbox"
    modalDiv.className = "lightbox"
    modalDiv.innerHTML = `
    <span class="close cursor" onclick="closeModal()">&times;</span>
    <div class="lightbox-display">
        <img src="${imgUri}"></img>
    </div>
    `
    document.body.appendChild(modalDiv)
}

function closeModal() {
    const modalDiv = document.getElementById("lightbox")
    modalDiv.remove()
}

var swiper = new Swiper(".carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    updateOnWindowResize: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

new Swiper(".autoplay-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    updateOnWindowResize: false,
    autoplay: {
        delay: 2000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})
let scrollToTopButton = document.getElementById("scrollToTopBtn");

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollToTopButton.style.display = "block";
    }
    else {
        scrollToTopButton.style.display = "none";
    }
}

window.onscroll = function () { scroll();};

function topFunction() {
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
}
