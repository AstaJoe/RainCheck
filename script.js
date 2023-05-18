window.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.navbar a');
    
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Remove active class from all links
        links.forEach(function(link) {
          link.classList.remove('active');
        });
        
        // Add active class to clicked link
        link.classList.add('active');
      });
    });
  });
  