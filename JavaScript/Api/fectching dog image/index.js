const api = "https://dog.ceo/api/breeds/image/random";
const fetchBtn = document.getElementById("fetch-btn");
const dogImage = document.getElementById("dog-image");
const loadingDiv = document.getElementById("loading");
const errorDiv = document.getElementById("error-msg");

async function fetchDog() {

  errorDiv.classList.add("hidden"); 
  dogImage.classList.add("hidden");
  loadingDiv.classList.remove("hidden");
  fetchBtn.disabled = true; 

  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === "success") {
     
      const newImg = new Image();
      newImg.onload = () => {
        dogImage.src = data.message;
        dogImage.classList.remove("hidden");
        loadingDiv.classList.add("hidden");
        fetchBtn.disabled = false;
      };
      newImg.onerror = () => {
        throw new Error("Failed to load image");
      };
      newImg.src = data.message;
    } else {
      throw new Error("API returned failure status");
    }
  } catch (error) {
    console.error("Error fetching dog:", error);
    loadingDiv.classList.add("hidden");
    errorDiv.textContent = "Failed to fetch a dog. Please try again.";
    errorDiv.classList.remove("hidden");
    fetchBtn.disabled = false;
  }
}


fetchDog();


fetchBtn.addEventListener("click", fetchDog);
