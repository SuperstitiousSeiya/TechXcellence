function toggleAnswer(flipper) {
    flipper.parentElement.classList.toggle('flipped');
}
function ToggleAnswer(button) {
    const response = button.parentElement.parentElement.nextElementSibling;
    response.style.display = (response.style.display === 'none') ? 'block' : 'none';

    const plusButton = button.parentElement.querySelector('.fa-plus');
    const minusButton = button.parentElement.querySelector('.fa-minus');

    plusButton.style.display = (response.style.display === 'none') ? 'block' : 'none';
    minusButton.style.display = (response.style.display === 'none') ? 'none' : 'block';

}
const hideMenuIcon = document.getElementById("hide-menu");
hideMenuIcon.style.display = "none";

function toggleMenu() {
    const showMenuIcon = document.getElementById("show-menu");
    const hideMenuIcon = document.getElementById("hide-menu");
    const menuItems = document.querySelectorAll("a, .dropdown, .theme");
    if (showMenuIcon.style.display !== "none") {
        showMenuIcon.style.display = "none";
        hideMenuIcon.style.display = "block";
        menuItems.forEach(item => item.style.display = "block");
    } else {
        hideMenuIcon.style.display = "none";
        showMenuIcon.style.display = "block";
        menuItems.forEach(item => item.style.display = "none");
    }
}
