function autoCarousel(carouselName, totalImages) {
    let count = 1
    setInterval(() => {
        count++
        if (count > totalImages) {
            count = 1
        }
        document.getElementById(`${carouselName}-${count}`).checked = true
    }, 5000); 
}

autoCarousel('img1', 2)
autoCarousel('img2', 2)