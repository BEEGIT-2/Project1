// Toggle card section visibility
document.getElementById("showCardsBtn").addEventListener("click", function () {
    var cardsSection = document.getElementById("cardsSection");
    if (cardsSection) {
        cardsSection.classList.toggle("show");
    }
});

// Update scrolling text (ensure element exists)
var scrollText = document.getElementById("scrollText");
if (scrollText) {
    scrollText.textContent = "Your new dynamic message goes here!";
}

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});

  // Initialize EmailJS
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

  // Form submission
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault(); // Prevents the page from reloading

      // Get form data
      var name = document.getElementById("name").value;
      var location = document.getElementById("location").value;
      var phone = document.getElementById("phone").value;
      var specialization = document.getElementById("specialization").value;

      // Send email via EmailJS
      var templateParams = {
          name: name,
          location: location,
          phone: phone,
          specialization: specialization
      };

      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
          .then(function (response) {
              alert("Email sent successfully!");
          }, function (error) {
              alert("Error sending email: " + error.text);
          });
  });