// logic.js

// Function to check if local storage is supported
function isLocalStorageSupported() {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Function to clear form fields
  function clearFormFields() {
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  }
  
  // Function to get posts from local storage
  function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
  }
  
  


document.addEventListener('DOMContentLoaded', function() {
  // Get a reference to the toggle switch element
  const themeToggle = document.getElementById('themeToggle');

  //event listener 
  themeToggle.addEventListener('change', function() {
    // Toggle the 'dark-theme' class on the body element when the toggle switch is clicked
    document.body.classList.toggle('dark-theme');
  });
});
