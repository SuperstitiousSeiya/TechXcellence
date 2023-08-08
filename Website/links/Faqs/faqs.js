function toggleAnswer(flipper) {
  const response = flipper.nextElementSibling;
  const angleDown = flipper.querySelector('.fa-angle-down');
  const angleUp = flipper.querySelector('.fa-angle-up');

  response.style.display = (response.style.display === 'none') ? 'block' : 'none';
  angleDown.style.display = (response.style.display === 'none') ? 'block' : 'none';
  angleUp.style.display = (response.style.display === 'none') ? 'none' : 'block';
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
