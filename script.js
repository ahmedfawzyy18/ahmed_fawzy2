// Get the modal (pop-up)
var modal = document.getElementById('popupModal');

// Get all the project images and set event listeners to open the modal
var projects = document.querySelectorAll('.project-item img');
projects.forEach(function(project) {
    project.addEventListener('click', function() {
        var modalImage = document.getElementById('popupImage');
        var modalText = document.getElementById('popupText');

        // Set the image and text in the modal
        modalImage.src = this.src;  // Set the clicked image in the modal
        modalText.innerHTML = this.alt;  // Set the alt text of the image as the project description

        // Show the modal with a smooth animation
        modal.style.display = 'block';
        modal.style.opacity = '0';
        setTimeout(function() {
            modal.style.opacity = '1';
            modal.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);
    });
});

// Get the close button to close the modal
var closeBtn = document.getElementsByClassName('close')[0];

closeBtn.addEventListener('click', function() {
    // Hide the modal with a smooth fade-out effect
    modal.style.transition = 'opacity 0.5s ease-in-out';
    modal.style.opacity = '0';

    setTimeout(function() {
        modal.style.display = 'none';
    }, 500); // Match the transition duration
});

// Ensure the modal closes if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.transition = 'opacity 0.5s ease-in-out';
        modal.style.opacity = '0';
        setTimeout(function() {
            modal.style.display = 'none';
        }, 500);
    }
});
