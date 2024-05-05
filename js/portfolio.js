// These function open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // These if statements loop the slideshow 
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    
    // This for loop takes each item in the array "slides" and sets the display to none
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // This loop takes each item in the array "dots" and removes "active" which removes the active styling
    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for and clicks on the website
document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_up_button") && !event.target.clesest(".contact")) {
        closeForm()
    }
}, false)