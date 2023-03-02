window.onload = function() {
    const menuBtn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#menu');
    const main = document.querySelector('main');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    menuBtn.addEventListener('click', function() {
      menu.classList.toggle('active');
      main.classList.toggle('active');
      header.classList.toggle('active');
      footer.classList.toggle('active');
      menuBtn.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  
    document.addEventListener("click", function(event) {
      var isClickInsideMenu = menu.contains(event.target);
      var isClickInsideBtn = menuBtn.contains(event.target);
      
      if (!isClickInsideMenu && !isClickInsideBtn) {
        menu.classList.remove('active');
        main.classList.remove('active');
        header.classList.remove('active');
        footer.classList.remove('active');
        menuBtn.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
  