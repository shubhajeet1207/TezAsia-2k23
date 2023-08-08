// utils.js

// Function to display an error message on the frontend
function displayErrorMessage(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
  }
  
  // Function to clear the error message on the frontend
  function clearErrorMessage() {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }
  
  // Function to display loading spinner while waiting for a response from the backend
  function showLoadingSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';
  }
  
  // Function to hide the loading spinner once the response is received from the backend
  function hideLoadingSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';
  }
  
  // Utility function to convert an image file to a base64-encoded string
  async function imageFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  
  // Other utility functions can be added here as needed
  