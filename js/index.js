const sections = document.querySelectorAll('.snap');
document.body.style.overflow = 'auto';

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(sections);
        if (currentScroll >= sectionTop - sectionHeight / 2) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});


