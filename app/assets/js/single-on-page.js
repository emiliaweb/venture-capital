window.addEventListener('DOMContentLoaded', () => {
    function resizeIframe(obj) {
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    }

    function scrollIntoViewport(element) {
        const y = element.offsetTop;
        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }

    const news = document.querySelector('[data-news-container]');
    const newsIframe = document.querySelector('.news-single iframe');

    news.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('news-item')) {
            const link = e.target.href;
            newsIframe.src = link;
            newsIframe.addEventListener('load', () => {
                resizeIframe(newsIframe);

                setTimeout(() => {
                    scrollIntoViewport(newsIframe);
                }, 300)

                newsIframe.contentWindow.addEventListener('click', e => {
                    if (e.target.matches('[data-close-post]')) {
                        newsIframe.src = '';
                        setTimeout(() => {
                            newsIframe.style.height = 0;
                        }, 100);
                    }
                });
            })
        }
    });

})