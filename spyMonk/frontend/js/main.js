// Define the base URL for the backend API
const backendUrl = 'http://localhost:5000';

// Function to handle form submission
async function handleSubmit(event) {
  event.preventDefault();

  // Get the input values from the form
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageUrl = document.getElementById('image-url').value;

  // Create the request body
  const requestBody = {
    title: title,
    description: description,
    image_url: imageUrl
  };

  try {
    // Call the backend API to generate NFT
    const response = await fetch(`${backendUrl}/generate_nft`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if the request was successful
    if (response.ok) {
      const generatedNft = await response.json();
      // Display the generated NFT to the user or use it as needed
      displayGeneratedNFT(generatedNft);
    } else {
      // Handle error if the request was not successful
      console.error('Error generating NFT:', response.statusText);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Function to display the generated NFT
function displayGeneratedNFT(nftData) {
  // Update the DOM to display the generated NFT details
  const nftContainer = document.getElementById('nft-container');
  const nftImage = document.createElement('img');
  nftImage.src = nftData.image_url;
  nftImage.alt = nftData.title;
  const titleElement = document.createElement('h3');
  titleElement.textContent = nftData.title;
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = nftData.description;

  // Clear previous results, if any
  nftContainer.innerHTML = '';

  // Append the generated NFT details to the container
  nftContainer.appendChild(nftImage);
  nftContainer.appendChild(titleElement);
  nftContainer.appendChild(descriptionElement);
}

// Add an event listener to the form for form submission
const form = document.getElementById('nft-form');
form.addEventListener('submit', handleSubmit);
