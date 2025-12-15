document.addEventListener('DOMContentLoaded', () => {

    const slider = document.querySelector('.properties__column');
    const items = document.querySelectorAll('.properties__item');
    const prevBtn = document.querySelector('.properties__button.prev');
    const nextBtn = document.querySelector('.properties__button.next');

    let index = 0;
    let visibleItems = 3;
    let maxIndex = 0;

    function getVisibleItems() {
        const w = window.innerWidth;
        if (w < 768) return 1;
        if (w < 1024) return 2;
        return 3;
    }

    function update() {
        visibleItems = getVisibleItems();
        maxIndex = Math.max(0, items.length - visibleItems);

        if (index > maxIndex) index = maxIndex;
        if (index < 0) index = 0;

        const viewportWidth = slider.parentElement.offsetWidth;
        const step = (viewportWidth / visibleItems);

        slider.style.transform = `translateX(-${index * step}px)`;

        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === maxIndex;
    }

    function setIndex(newIndex) {
        index = newIndex;
        update();
    }

    nextBtn.addEventListener('click', () => {
        setIndex(index + 1);
    });

    prevBtn.addEventListener('click', () => {
        setIndex(index - 1);
    });

    window.addEventListener('resize', update);

    update();
});
