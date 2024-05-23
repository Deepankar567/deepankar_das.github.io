// Select the element to be resized
const resizableDiv = document.getElementById('myVideo');

// Function to update the height of the element
function updateHeight() {
    // Set the height to a value based on the window height (e.g., 50% of the window height)
    resizableDiv.style.height = window.innerHeight+ 'px';
}

// Initial call to set the height when the page loads
updateHeight();

// Add event listener for window resize to update the height
window.addEventListener('resize', updateHeight);
