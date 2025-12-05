document.addEventListener('DOMContentLoaded', function() {
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.remove('animate-on-scroll');
                
                // Add specific animation classes based on data attribute or default
                if (entry.target.dataset.animation) {
                    entry.target.classList.add(`animate-${entry.target.dataset.animation}`);
                } else {
                    entry.target.classList.add('animate-fade-in-up');
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select elements to animate
    const animatedElements = document.querySelectorAll('.section-title, .section-subtitle, .feature-card, .service-card, .portfolio-item, .hero h1, .hero p, .hero-buttons');
    
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        
        // Stagger delay for grid items
        if (el.classList.contains('feature-card') || el.classList.contains('service-card') || el.classList.contains('portfolio-item')) {
            // Calculate row position for simple staggering
            // This is a simplified approach; for perfect grid staggering, more logic is needed
            const delayClass = `delay-${(index % 3 + 1) * 100}`;
            el.classList.add(delayClass);
        }
        
        observer.observe(el);
    });
});

