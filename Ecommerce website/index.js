const bar = document.getElementById('bar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    bar.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

