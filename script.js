document.getElementById("showCardsBtn").addEventListener("click", function() {
    var cardsSection = document.getElementById("cardsSection");
    // Toggle the display of the cards section
    if (cardsSection.style.display === "none" || cardsSection.style.display === "") {
        cardsSection.style.display = "block"; // Show the cards
    } else {
        cardsSection.style.display = "none"; // Hide the cards
    }
});
document.getElementById("showCardsBtn").addEventListener("click", function() {
    var cardsSection = document.getElementById("cardsSection");
    cardsSection.classList.toggle("show"); // Toggle the visibility of the cards
});
