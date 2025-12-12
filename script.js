// Show recipe popup
function showRecipe(title, ingredients, steps) {
    document.getElementById("recipeTitle").innerText = title;
    document.getElementById("recipeIngredients").innerText = ingredients;
    document.getElementById("recipeSteps").innerText = steps;

    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Search filter
function searchRecipe() {
    const input = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.querySelector("h2").innerText.toLowerCase();
        card.style.display = title.includes(input) ? "block" : "none";
    });
}
