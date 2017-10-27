$('.page').hide();
$('#cornerLogo').hide();

window.onload = function() {
  Particles.init({
    selector: '.background'
  });
}

function nav(page) {
  if(page === '#logo') {
    $('.page').fadeOut(600);
    $('#cornerLogo').fadeOut(600);
    $('#logo').fadeIn(600);
  } else {
    $('#cornerLogo').fadeIn(600);
    $('.page').fadeOut(600);
    $('#logo').fadeOut(600);
    $(page).fadeToggle(600);
  }
}