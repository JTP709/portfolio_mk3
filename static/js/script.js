$('.page').hide();
$('#cornerLogo').hide();

window.onload = function() {
  Particles.init({
    selector: '.background'
  });
}

function logoUp() {
  $('#logo').animate({
      opacity: '0',
      top: '-=100px'
    }, 'slow');
}

function logoDown() {
  $('#logo').animate({
        top:'+=100px',
        opacity: '1'
      },'slow');
}

var logoPos = 'down';

function nav(page) {
  if(page === '#logo') {
    $('.page').fadeOut(600);
    $('#cornerLogo').fadeOut(600);
    if (logoPos ==='up') {
      logoPos = 'down';
      logoDown();
    }
  } else {
    if (logoPos === 'down') {
      logoPos = 'up';
      logoUp();
    }
    $('#cornerLogo').fadeIn(600);
    $('.page').fadeOut(600);
    $(page).fadeToggle(600);
  }
}

var openModal;

// When the user clicks on the button, open the modal 
var modalOpen = function(x) {
  // Get the modal
  openModal = document.getElementById('modal_'+x);
  openModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var modalClose = function() {
  // Get the modal
  openModal.style.display = "none";
  openModal = null;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == openModal) {
      openModal.style.display = "none";  
    }
}