const axios = require('axios');

// Example API endpoint
const apiUrl = 'https://api.example.com/data';
const apiKey = 'YOUR_API_KEY'; // Replace with your API key

// Function to make API call
async function fetchData() {
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call the function to fetch data
fetchData();
