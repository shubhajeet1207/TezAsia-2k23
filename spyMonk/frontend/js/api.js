const BASE_URL = 'http://your_backend_api_url'; // Replace with your actual backend API URL

// Function to generate NFT based on user input
async function generateNFT(title, description, image_url) {
  try {
    const response = await fetch(`${BASE_URL}/generate_nft`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        image_url,
      }),
    });

    if (!response.ok) {
      throw new Error('Unable to generate NFT. Please try again later.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error generating NFT:', error.message);
    throw error;
  }
}

export { generateNFT };
