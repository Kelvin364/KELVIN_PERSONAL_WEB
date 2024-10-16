document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav');

    mobileMenuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Hero section animations
    gsap.from('.hero-content h1', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
    gsap.from('.hero-content h2', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
    gsap.from('.hero-content h3', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
    gsap.from('.hero-content p', { opacity: 0, y: 50, duration: 1, delay: 0.8 });
    gsap.from('.hero-image img', { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate job cards
    gsap.utils.toArray('.job-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            x: i % 2 === 0 ? -50 : 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate social sidebar
    gsap.from('.social-sidebar li', {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        delay: 1.5
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 70
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Parallax effect for hero image
    gsap.to('.hero-image img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Animate header on scroll
    ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'header-scrolled', targets: 'header'}
    });

    // Cursor animation
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', e => {
        gsap.to(cursor, {duration: 0.5, left: e.clientX, top: e.clientY});
    });

    const cursorEnter = () => gsap.to(cursor, {duration: 0.3, scale: 2});
    const cursorLeave = () => gsap.to(cursor, {duration: 0.3, scale: 1});

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', cursorEnter);
        el.addEventListener('mouseleave', cursorLeave);
    });
});