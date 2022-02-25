//Бургер меню

  $('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
  })


// Выпадающее меню
$('.menu-btn').on('click', function(){
  $('.header-wrapper__menu-drop').slideToggle(450);
  });

  $(this).find('.portfolio-wrapper__item').click(function() {
    $(this).find('.portfolio-wrapper__content').slideToggle();
  });



// accrodreon
  $('.portfolio1-wrapper__title').click(function() {
    let $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('portfolio1-wrapper__hide').removeClass('show');
        $this.parent().parent().find('portfolio1-wrapper__hide').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
  });



