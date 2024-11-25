function autoCarousel(carouselName, totalImages) {
    let count = 1
    setInterval(() => {
        count++
        if (count > totalImages) {
            count = 1
        }
        document.getElementById(`${carouselName}-${count}`).checked = true
    }, 3500); 
}

autoCarousel('img1', 5)

function autoCarousel2(carouselName, totalImages) {
    let count2 = 1
    setInterval(() => {
        count2++
        if (count2 > totalImages) {
            count2 = 1
        }
        document.getElementById(`${carouselName}-${count2}`).checked = true
    }, 6000); 
}

autoCarousel2('img2', 5)

