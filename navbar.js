window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            container.style.opacity = 1;
        }, 100);
    }
});

const navLinks = document.querySelectorAll('.navelements a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'color 0.3s ease, transform 0.3s ease';
        link.style.color = '#38bdf8';
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseleave', () => {
        link.style.color = '';
        link.style.transform = '';
    });
});

const tableRows = document.querySelectorAll('table tr');

tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.transition = 'background-color 0.3s ease';
        row.style.backgroundColor = '#d1e0ff';
    });

    row.addEventListener('mouseleave', (e) => {
        const index = Array.from(row.parentNode.children).indexOf(row);
        if (index === 0) return;
        row.style.backgroundColor = index % 2 === 0 ? '#f2f2f2' : '#e6f0ff';
    });
});
