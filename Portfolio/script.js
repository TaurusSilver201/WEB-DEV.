$(document).ready(function() {
  // Smooth scrolling
  $('a').on('click', function(e) {
      if (this.hash !== '') {
          e.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800);
      }
  });

  // Form submission
  $('#contact-form').submit(function(e) {
      e.preventDefault();
      // Handle form submission here (e.g., send data to server)
      alert('Form submitted successfully!');
  });
});
