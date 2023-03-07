import React from 'react';


// Function to add Smooth Scrolling.
$('a.scroll-link').click(function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
}); 
// Function to add Image Slider.
$(document).ready(function() {
    var sliderImages = $('.slider img');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000);
  
    function nextSlide() {
      sliderImages.eq(currentSlide).removeClass('active');
      currentSlide = (currentSlide + 1) % sliderImages.length;
      sliderImages.eq(currentSlide).addClass('active');
    }
  });

  import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scroll' : ''}`}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;


  // const navbar = document.querySelector('.navbar');
  // window.addEventListener('scroll', () => {
  //   if (window.pageYOffset > 50) {
  //     navbar.classList.add('navbar-scroll');
  //   } else {
  //     navbar.classList.remove('navbar-scroll');
  //   }
  // });