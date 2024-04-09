function fetchAndDisplayContent(urls) {
    // Iterate over the array of URLs
    urls.forEach(url => {
      // Fetch content for each URL
      fetch(url)
        .then(response => {
          // Check if the response status is OK
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Return the response content as text
          return response.text();
        })
        .then(content => {
          // Display the content using an AJAX call
          ajaxDisplayContent(content);
        })
        .catch(error => {
          console.error('There was a problem with fetching the content:', error);
        });
    });
  }
  
  // Function to display content using AJAX (dummy function for demonstration)
  function ajaxDisplayContent(content) {
    // This is a dummy function representing an AJAX call to display content
    console.log('Content:', content);
  }
  
  // Example usage:
  const urls = ['https://github.com/zinduaschool/calendar-application-events-manager-Rgmg16/settings', 'https://chat.openai.com/', 'https://open.spotify.com/playlist/1O1pGLm5ygEetmN6euFt3S'];
  fetchAndDisplayContent(urls);