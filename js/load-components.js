/**
 * Load modular HTML components
 * This script loads HTML components from the includes directory
 * and inserts them into the page at the specified target elements.
 */
(function() {
  // Load the footer component
  fetch('/includes/footer.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(html => {
      document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => {
      console.error('Error loading footer component:', error);
    });
})();