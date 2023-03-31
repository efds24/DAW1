const sections = document.querySelectorAll('.snap');
document.body.style.overflow = 'auto';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (currentScroll >= sectionTop - sectionHeight) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});
