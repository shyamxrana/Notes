
        // API configuration - using Pixabay API
        const API_KEY = '51230966-59add119bf91c7d38cf2e6c33'; // Replace with your Pixabay key
        const API_URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=';

        // Get DOM elements we need to work with
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');
        const resultsContainer = document.getElementById('resultsContainer');
        const loadingSpinner = document.getElementById('loadingSpinner');
        const errorMessage = document.getElementById('errorMessage');

        // Function to fetch images from API
        async function fetchImages(query) {
            try {
                // Show loading spinner
                loadingSpinner.classList.remove('hidden');
                // Hide any previous error
                errorMessage.classList.add('hidden');
                // Clear previous search results
                resultsContainer.innerHTML = '';

                // Fetch data from Pixabay API (no headers needed)
                const response = await fetch(API_URL + encodeURIComponent(query));

                // Check if request was successful
                if (!response.ok) {
                    throw new Error('Failed to fetch images: ' + response.status);
                }

                // Convert response to JSON format
                const data = await response.json();

                // Display the images
                displayImages(data.hits);
                
            } catch (error) {
                // Show error if something went wrong
                console.error('Error:', error);
                errorMessage.classList.remove('hidden');
                errorMessage.querySelector('p').textContent = 'Oops! Something went wrong. Please try again.';
            } finally {
                // Hide loading spinner when done
                loadingSpinner.classList.add('hidden');
            }
        }

        // Function to display images in the results container
        function displayImages(photos) {
            // If no photos found, show message
            if (photos.length === 0) {
                resultsContainer.innerHTML = '<p class="col-span-full text-center text-gray-500">No images found. Try a different search term.</p>';
                return;
            }

            // Create HTML for each photo and add to container
            photos.forEach(photo => {
                const photoElement = document.createElement('div');
                photoElement.classList.add('overflow-hidden', 'rounded-lg', 'shadow-md', 'bg-white', 'hover:shadow-lg', 'transition-shadow');
                
                // Image element with placeholder initially
                photoElement.innerHTML = `
                    <img 
                        src="${photo.webformatURL}" 
                        alt="${photo.tags || 'Stock photo'}" 
                        class="w-full h-48 object-cover hover:scale-105 transition-transform"
                        onerror="this.onerror=null; this.src='https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f08a452d-fead-4b86-9774-9323d795b1ff.png'"
                    >
                    <div class="p-4">
                        <p class="text-gray-600 text-sm">User: ${photo.user}</p>
                    </div>
                `;
                
                resultsContainer.appendChild(photoElement);
            });
        }

        // Event listener for form submission
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submit behavior
            
            // Get search term from input
            const searchTerm = searchInput.value.trim();
            
            // Only search if there's a valid search term
            if (searchTerm) {
                fetchImages(searchTerm);
            }
        });

        // Optional: Load some default images when page first loads
        window.addEventListener('DOMContentLoaded', () => {
            fetchImages('nature'); // Show "nature" images by default
        });
    