const links = document.querySelectorAll('.rent_buy_sell__link');
const boxes = document.querySelectorAll('.rent_buy_sell__link-box');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        links.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

