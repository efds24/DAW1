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

// const square = document.getElementById('square');
// let mousePos = { x: undefined, y: undefined };

// window.addEventListener('mousemove',    (event) => {
//         mousePos = { x: event.clientX, y: event.clientY };
//         square.style.top = `${mousePos.y+10}`+"px";
//         square.style.left = `${mousePos.x+10}`+"px";
// });
