
document.addEventListener('DOMContentLoaded', function () {
    // Selecting necessary DOM elements
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    let carouselItem = document.querySelector('.carousel');
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');
    
    // Setting timeout for automatic sliding
    let timeRunning = 3000;
    let runTimeOut;

    // Adding click event listeners for next and previous buttons
    nextDom.onclick = function () {
        showSlider('next');
    };

    prevDom.onclick = function () {
        showSlider('prev');
    }

    // Function to handle slider movement
    function showSlider(type) {
        // Selecting all slider and thumbnail items
        let itemSlider = document.querySelectorAll('.carousel .list .item');
        let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            // Moving the first slider and thumbnail item to the end
            listItemDom.appendChild(itemSlider[0]);
            thumbnailDom.appendChild(itemThumbnail[0]);
            // Adding class for CSS animation
            carouselItem.classList.add('next');
        }
        else {
            // Moving the last slider and thumbnail item to the beginning
            let positionLastItem = itemSlider.length - 1;
            listItemDom.prepend(itemSlider[positionLastItem]);
            thumbnailDom.prepend(itemThumbnail[positionLastItem]);
            // Adding class for CSS animation
            carouselItem.classList.add('prev');
        }
        // Clearing timeout and setting it again for automatic sliding
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselItem.classList.remove('next');
            carouselItem.classList.remove('prev');
        }, timeRunning)
    }
});




