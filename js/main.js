console.log("Klasio работи!");

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const body = document.body;
    const search = document.getElementById('site-search');

    if (toggle) {
        toggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
        });
    }

    if (search) {
        search.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                const q = search.value.trim();
                console.log('Търсене:', q);
                alert(q ? 'Търсене: ' + q : 'Въведете текст за търсене');
            }
        });
    }

    /* Reveal elements with stagger */
    const reveals = Array.from(document.querySelectorAll('.reveal'));
    reveals.forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 80 * i + 120);
    });

    /* Nav links entrance */
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    navLinks.forEach((a, i) => {
        setTimeout(() => a.classList.add('show'), 40 * i + 120);
    });

    /* Smooth scroll for internal links */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (ev) {
            const href = this.getAttribute('href');
            if (href.length > 1 && document.querySelector(href)) {
                ev.preventDefault();
                document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (body.classList.contains('nav-open')) body.classList.remove('nav-open');
            }
        });
    });
});