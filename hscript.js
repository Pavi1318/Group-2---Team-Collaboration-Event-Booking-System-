
// Get the date element and set today's date
var dateElement = document.getElementById("date");
var today = new Date();
dateElement.innerText = "Today: " + today.toDateString();

// Image hero section
var heroSlides = document.querySelectorAll(".hero-slide");
var currentHeroImage = 0;

// Change hero 
setInterval(function() {
  heroSlides[currentHeroImage].classList.remove("active");
  currentHeroImage = currentHeroImage + 1;
  if (currentHeroImage >= heroSlides.length) {
    currentHeroImage = 0;
  }
  heroSlides[currentHeroImage].classList.add("active");
}, 3500);


var mobileMenu = document.getElementById("mobilemenu");
var mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
var menuButton = document.querySelector(".menu-icon");
var closeButton = document.querySelector(".close-btn");
var goEventsButtons = document.querySelectorAll(".go-events-btn");
var goBookingButtons = document.querySelectorAll(".go-booking-btn");

// Open mobile menu
function openMenu() {
  mobileMenu.classList.add("active");
  mobileMenuOverlay.classList.add("active");
  document.body.classList.add("menu-open");
}

// Close mobile menu
function closeMenu() {
  mobileMenu.classList.remove("active");
  mobileMenuOverlay.classList.remove("active");
  document.body.classList.remove("menu-open");
}

if (menuButton) {
  menuButton.addEventListener("click", function() {
    openMenu();
  });
}

if (closeButton) {
  closeButton.addEventListener("click", function() {
    closeMenu();
  });
}

if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", function() {
    closeMenu();
  });
}

if (goEventsButtons.length > 0) {
  for (var i = 0; i < goEventsButtons.length; i++) {
    goEventsButtons[i].addEventListener("click", function() {
      window.location.href = "events.html";
    });
  }
}

if (goBookingButtons.length > 0) {
  for (var i = 0; i < goBookingButtons.length; i++) {
    goBookingButtons[i].addEventListener("click", function() {
      window.location.href = "booking.html";
    });
  }
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeMenu();
  }
});
