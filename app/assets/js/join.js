window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 768) {
        new SimpleBar(document.getElementById('joinWrap'), {
            autoHide: false
        });
    }
})