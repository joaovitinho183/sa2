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

autoCarousel('img1', 4)
autoCarousel('img2', 4)
autoCarousel('img3', 3)
autoCarousel('img4', 9)
autoCarousel('img5', 4)
autoCarousel('img6', 3)
autoCarousel('img7', 2)
autoCarousel('img8', 4)


