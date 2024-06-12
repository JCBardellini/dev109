// carousel component 
document.addEventListener("DOMContentLoaded", () => {
    
    const images = [
        { 
            src: "images/0-mountain-biking.jpg.webp", 
            description: "As the sun sets over the horizon, a dedicated mountain biker navigates the rugged trail, savoring the last moments of daylight while speeding down the hill.", 
            alt: "A person mountain biking down the hill while looking at the sunset." 
        },
        { 
            src: "images/Fox-DHX-Factory-rear-mountain-bike-shock-2-3e0ee7f.jpg.webp", 
            description: "In the heart of the dense forest, a thrill-seeker races through the woods, skillfully dodging trees and rocks, feeling the adrenaline rush with every pedal stroke.", 
            alt: "Racing through the woods, avoiding every obstacle." 
        },
        { 
            src: "images/images.jpeg", 
            description: "Biking down the arid, sandy trails of Utah, the cyclist enjoys the challenge of the dry terrain, surrounded by breathtaking desert landscapes and vast, open skies.", 
            alt: "Biking down the dry sand in Utah." 
        },
        { 
            src: "images/Mountain-biker.jpg", 
            description: "On his first mountain biking adventure, he unexpectedly hits a puddle, splashing water everywhere, but his spirit remains undeterred as he laughs off the mishap and continues on.", 
            alt: "Getting stuck in a puddle of water, first time mountain biking." 
        },
        { 
            src: "images/Mountain_Biking_on_Mt_Mahony_d5dd14fb-5889-4a5b-94ca-bd861033814c.jpg", 
            description: "Exploring the renowned bike parks of Washington, the rider tackles new and challenging terrains, marveling at the lush, green forests and the serene beauty of nature.", 
            alt: "Biking through the forest." 
        }
    ];

    let currentIndex = 0;
    const image = document.getElementById("images");
    const description = document.querySelector(".description");
    const prevButton = document.querySelector(".btnContainer button:nth-child(1)");
    const nextButton = document.querySelector(".btnContainer button:nth-child(2)");

    const showImage = (i) => {
        image.src = images[i].src;
        image.alt = images[i].alt;
        description.textContent = images[i].description;
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    let interval = setInterval(nextImage, 2000);

    const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(nextImage, 2000);
    };

    prevButton.addEventListener("click", () => {
        prevImage();
        resetInterval();
    });

    nextButton.addEventListener("click", () => {
        nextImage();
        resetInterval();
    });

    showImage(currentIndex);
});
