let slideIndex = 0;
const slideInterval = 5000; // Change image every 5 seconds (adjust as needed).

showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    for (const slide of slides) {
        slide.style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, slideInterval);
}

// JavaScript for photo upload section
const photoInput = document.getElementById('photo-input');
const detectedPhoto = document.getElementById('detected-photo');
const downloadLink = document.getElementById('download-link');

photoInput.addEventListener('change', handlePhotoInputChange);

detectedPhoto.addEventListener('mouseenter', () => {
    detectedPhoto.style.transform = 'scale(1.1)';
});

detectedPhoto.addEventListener('mouseleave', () => {
    detectedPhoto.style.transform = 'scale(1.05)';
});

function handlePhotoInputChange() {
    const file = photoInput.files[0];

    if (file) {
        displayUploadedPhoto(file);
    }
}

function displayUploadedPhoto(file) {
    const reader = new FileReader();

    reader.onload = function(e) {
        detectedPhoto.src = e.target.result;
        detectedPhoto.style.transform = 'scale(1.05)';
        downloadLink.style.display = 'block';
    };

    reader.readAsDataURL(file);
}