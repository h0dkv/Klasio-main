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
});