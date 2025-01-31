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
