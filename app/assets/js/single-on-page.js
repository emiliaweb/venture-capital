window.addEventListener('DOMContentLoaded', () => {
    function resizeIframe(obj) {
        obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
    }

    const news = document.querySelector('[data-news-container]');
    const newsIframe = document.querySelector('.news-single iframe');

    news.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.classList.contains('news-item')) {
            const link = e.target.href;
            console.log(link);
            newsIframe.src = link;
            // resizeIframe(newsIframe);
            // setTimeout(() => {
            //     newsIframe.scrollIntoView();
            //     newsIframe.contentWindow.addEventListener('click', e => {
            //         if (e.target.matches('[data-close-post]')) {
            //             newsIframe.style.height = 0;
            //             setTimeout(() => {
            //                 newsIframe.src = null;
            //             }, 300)
            //         }
            //     })
            // }, 300);
            newsIframe.addEventListener('load', () => {
                console.log('loaded');
                resizeIframe(newsIframe);
                newsIframe.scrollIntoView();
                newsIframe.contentWindow.addEventListener('click', e => {
                    if (e.target.matches('[data-close-post]')) {
                        newsIframe.style.height = 0;
                        setTimeout(() => {
                            newsIframe.src = '';
                        }, 300)
                    }
                })
            })
        }
    });

})