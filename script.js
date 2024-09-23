$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
    
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
    
            // Construct an object with the form data
            const data = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
    
            // Send form data to server
            fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Optionally show a success message to the user
                alert('Message sent successfully!');
                // Clear the form fields if needed
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                // Show an error message to the user if submission fails
                alert('Oops! Something went wrong. Please try again later.');
            });
        });
    });
            
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["UI/UX developer","Fresher","Technician","Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["UI/UX developer","Fresher","Technician","Web Designer","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// script.js

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // You can add client-side validation here if needed
    
    // Submit the form using Ajax
    var form = event.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Accept", "application/json");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        
        if (xhr.status === 200) {
            // Success message or redirect can go here
            alert("Thank you! Your message has been sent.");
            form.reset(); // Optionally reset the form
        } else {
            // Error handling
            alert("Oops! Something went wrong.");
        }
    };
    
    xhr.send(formData);
});
