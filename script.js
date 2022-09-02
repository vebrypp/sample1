document.addEventListener('DOMContentLoaded', function() {
    const navbarWrapper = document.querySelector('.navbar-wrapper');
    const navbar = document.querySelector('.navbar');
    const bannerContent = document.querySelectorAll('.banner-content');
    const scrollTop = document.querySelector('.scroll-top');
    const contents = document.querySelectorAll('.content .content-wrapper #content');
    const dotSideNavigation = document.querySelectorAll('.side-navigation-dot');
    const navbarToggler =document.querySelector('.navbar-toggler-wrapper input');
    const windowY = window.innerHeight;

    // Scroll Event
    document.addEventListener('scroll', function() {
        const y = window.scrollY;

        // Dot content and show content
        for(let i = 0; i < dotSideNavigation.length; i++) {
            const rect = dotSideNavigation[i].getBoundingClientRect();
            const rectY = rect.top.toFixed();
            const content = contents[i];

            if( rectY < ( windowY / 2 ) && rectY > -10 ) {
                if( dotSideNavigation[i].classList.contains('active') == false ) {
                    dotSideNavigation[i].classList.add('active');
                };
                if ( content.classList.contains('hide') ) {
                    content.classList.replace('hide', 'show')
                } else {
                    content.classList.add('show');
                };
            } else {
                dotSideNavigation[i].classList.remove('active');
                content.classList.replace('show', 'hide' );
            };
        };

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

    // Navbar toggler
    navbarToggler.addEventListener('change', function() {
        if(navbarToggler.checked) {
            if(navbarWrapper.classList.contains('hide') == false) {
                navbarWrapper.classList.add('show');
            } else {
                navbarWrapper.classList.replace('hide', 'show');
            }
        } else {
            navbarWrapper.classList.replace('show', 'hide')
        };
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