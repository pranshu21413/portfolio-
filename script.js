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

        try {
            // Send the FormData to the server (Django) for processing
            const response = await fetch('/upload/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Handle successful upload, e.g., update the photo gallery
                const data = await response.json();

                if (data.detectedPhotos && data.detectedPhotos.length > 0) {
                    // Display detected photos in the gallery
                    data.detectedPhotos.forEach((photoUrl) => {
                        const image = document.createElement('img');
                        image.src = photoUrl;
                        image.alt = 'Detected Photo';
                        photoGallery.appendChild(image);
                    });
                } else {
                    alert('No photos detected. Please upload valid images.');
                }
            } else {
                alert('Upload failed. Please try again.');
            }
        } catch (error) {
            console.error('An error occurred during the upload:', error);
            alert('Something went wrong. Please try again later.');
        }
    });
});