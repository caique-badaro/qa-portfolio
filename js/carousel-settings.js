document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".cb_carousel-card");

    carousels.forEach((carouselContainer) => {
        const leftArrow = carouselContainer.closest(".carousel-container").querySelector(".carousel--arrow-left");
        const rightArrow = carouselContainer.closest(".carousel-container").querySelector(".carousel--arrow-right");

        // Desktop: Scroll with arrows
        const scrollAmount = 300;
        leftArrow.addEventListener("click", (e) => {
            e.preventDefault();
            carouselContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        });

        rightArrow.addEventListener("click", (e) => {
            e.preventDefault();
            carouselContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

        // Mobile: Drag-to-scroll
        let isDragging = false;
        let startX, scrollLeft;

        carouselContainer.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.pageX - carouselContainer.offsetLeft;
            scrollLeft = carouselContainer.scrollLeft;
            carouselContainer.classList.add("dragging");
        });

        carouselContainer.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carouselContainer.offsetLeft;
            const walk = (x - startX) * 1; // Adjust scroll speed
            carouselContainer.scrollLeft = scrollLeft - walk;
        });

        carouselContainer.addEventListener("mouseup", () => {
            isDragging = false;
            carouselContainer.classList.remove("dragging");
        });

        carouselContainer.addEventListener("mouseleave", () => {
            isDragging = false;
            carouselContainer.classList.remove("dragging");
        });

        // Desktop: Scroll with mouse wheel
        carouselContainer.addEventListener("wheel", (e) => {
            e.preventDefault();
            carouselContainer.scrollBy({ left: e.deltaY > 0 ? scrollAmount : -scrollAmount });
        });
    });
});
