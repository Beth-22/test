document.addEventListener("DOMContentLoaded", () => {
  const serviceCards = document.querySelectorAll(".service-card");
  const hireButton = document.querySelector(".hire-button");

  // Animate each service card with a delay
  serviceCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("animate");
    }, 800 + index * 200); // Delay increases for each card
  });

  // Animate the "Hire Me" button
  setTimeout(() => {
    hireButton.classList.add("animate");
  }, 500);
});


// form validation for contact me page
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach((error) => error.remove());

    // Name validation
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      isValid = false;
    }

    // Email validation
    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message cannot be empty.");
      isValid = false;
    }

    // Prevent form submission if there are validation errors
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Helper function to show error messages
  function showError(input, message) {
    const error = document.createElement("span");
    error.className = "error";
    error.textContent = message;
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.style.marginTop = "-10px";
    input.parentElement.appendChild(error);
  }

  // Helper function to validate email format
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});


//pop for contact
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  if (contactSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            contactSection.style.opacity = "1"; // Make visible
            contactSection.style.transform = "translateY(0)"; // Reset position
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(contactSection);
  }
});
