document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const bannerContent = document.querySelectorAll('.banner-content');
    const scrollTop = document.querySelector('.scroll-top');
    const content = document.querySelectorAll('.content .content-wrapper #content');
    const dotSideNavigation = document.querySelectorAll('.side-navigation-dot');
    const windowY = window.innerHeight;

    // Scroll Event
    document.addEventListener('scroll', function() {
        const y = window.scrollY;

        // Dot side navigation
        dotSideNavigation.forEach(function(i) {
            const rect = i.getBoundingClientRect();
            const rectY = rect.top.toFixed();

            if( rectY < ( windowY / 2 ) && rectY > (windowY / 2) - ( windowY / 2 / 3 ) ) {
                if( i.classList.contains('active') == false ) {
                    i.classList.add('active');
                };
            } else {
                i.classList.remove('active');
            };
        });

        // Show content
        content.forEach(function(i) {
            const rect = i.getBoundingClientRect();
            const rectY = rect.top.toFixed();

            if( rectY < ( windowY / 2 ) && rectY > (windowY / 2) - ( windowY / 2 / 3 ) ) {
                if(i.classList.contains('hide')) return (i.classList.replace('hide', 'show'));
                i.classList.add('show');
            } else {
                i.classList.replace('show', 'hide');
            };
        });

        // Show and hide navbar and scrolltop icon
        if( y > 0 ) {
            navbar.classList.add('hide');
            scrollTop.classList.replace('hideIcon', 'showIcon');
        };
        if( y == 0 ) {
            navbar.classList.remove('hide');
            scrollTop.classList.replace('showIcon', 'hideIcon');
        };
    });

    // Scroll top
    scrollTop.addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    });

    // SLide Banner
    let i = 0
    setInterval(function() {
        if( i == 2 ) {
            bannerContent[i-1].classList.replace('content-left','content-right');
            bannerContent[i].classList.replace('content-middle', 'content-left');
            bannerContent[0].classList.replace('content-right', 'content-middle');
            i = 0;
        } else if( i == 0 ) {
            bannerContent[bannerContent.length-1].classList.replace('content-left', 'content-right');
            bannerContent[i].classList.replace('content-middle', 'content-left');
            bannerContent[i+1].classList.replace('content-right', 'content-middle');
            i++;
        } else {
            bannerContent[i-1].classList.replace('content-left','content-right');
            bannerContent[i].classList.replace('content-middle', 'content-left');
            bannerContent[i+1].classList.replace('content-right', 'content-middle');
            i++;
        };
    }, 3000);
});