window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#headerHamburger');
    const headerNav = document.querySelector('#headerNav');

    hamburger.addEventListener('click', e => {
        e.preventDefault();
        headerNav.classList.toggle('header-nav--active');
    });

    headerNav.addEventListener('click', e => {
        if (e.target.matches('.header-list-item') || e.target.matches('.header-list-item a')) {
            setTimeout(() => {
                headerNav.classList.remove('header-nav--active');
            }, 500)
        }
    })
})