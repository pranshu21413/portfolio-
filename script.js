// JavaScript code for handling photo upload and display
document.addEventListener('DOMContentLoaded', () => {
    const uploadButton = document.getElementById('upload-button');
    const photoInput = document.getElementById('photo-input');
    const photoGallery = document.getElementById('photo-gallery');

    uploadButton.addEventListener('click', async(e) => {
        e.preventDefault();
        const files = photoInput.files;
        if (files.length === 0) {
            alert('Please select one or more photos to upload.');
            return;
        }

        // Create a FormData object to send the files to the server
        const formData = new FormData();
        for (const file of files) {
            formData.append('photos', file);
        }

        // Send the FormData to the server (Django) for processing
        const response = await fetch('/upload/', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Handle successful upload, e.g., update the photo gallery
            const data = await response.json();
            // Display detected photos in the gallery
            // data.detectedPhotos should contain image URLs of detected photos
        } else {
            alert('Upload failed. Please try again.');
        }
    });
});