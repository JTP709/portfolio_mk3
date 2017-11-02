// Variable declaration
var openModal;
var logoPos = 'down';

// Page set-up; hides certain elements
$('.page').hide();
$('#cornerLogo').hide();

// Loads the particles
window.onload = function() {
  Particles.init({
    selector: '.background'
  });
}

// Functions for logo animation
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

// Coming-soon links
$('.coming_soon').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('initialText', $this.text());
        $this.text("Coming Soon!");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('initialText'));
    }
);

// Function for page navigation
function nav(page) {
  var width = $(window).width();
  if(page === '#logo') {
    $('.page').fadeOut(600);
    if (width > 1200) {
      $('#cornerLogo').fadeOut(600);
    }
    if (logoPos ==='up') {
      logoPos = 'down';
      logoDown();
    }
  } else {
    if (logoPos === 'down') {
      logoPos = 'up';
      logoUp();
    }
    if (width > 1200) {
      $('#cornerLogo').fadeIn(600);
    }
    $('.page').fadeOut(600);
    $(page).fadeToggle(600);
  }
}

// Functions to manage modals
var modalOpen = function(x) {
  // Get the modal
  openModal = document.getElementById('modal_'+x);
  openModal.style.display = "block";
}

var modalClose = function() {
  // Get the modal
  openModal.style.display = "none";
  openModal = null;
}

window.onclick = function(event) {
    if (event.target == openModal) {
      openModal.style.display = "none";
    }
}