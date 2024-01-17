var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds (adjust as needed).
}

// JavaScript for photo upload section
const photoInput = document.getElementById('photo-input');
const detectedPhoto = document.getElementById('detected-photo');
const downloadLink = document.getElementById('download-link');

photoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            detectedPhoto.src = e.target.result;
            detectedPhoto.style.transform = 'scale(1.05)';
            downloadLink.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

detectedPhoto.addEventListener('mouseenter', function() {
    detectedPhoto.style.transform = 'scale(1.1)';
});

detectedPhoto.addEventListener('mouseleave', function() {
    detectedPhoto.style.transform = 'scale(1.05)';
});