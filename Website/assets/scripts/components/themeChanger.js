const themeChangerEl = document.getElementById("theme_changer");
const bodyEl = document.querySelector("body");
let defaultTheme = localStorage.getItem("Theme");


// themeChangerEl.onchange = () => {
//   const selectedTheme = themeChangerEl.value;
//   console.log(themeChangerEl.selectedn)
//     localStorage.setItem("Theme", selectedTheme);
//   console.log(selectedTheme);
//   applyTheme(selectedTheme);
// };


themeChangerEl.onclick = e =>{
  if(e.target.tagName === "LI"){
   let selectedTheme = e.target.dataset.value;
   localStorage.setItem("Theme", selectedTheme)
   applyTheme(selectedTheme);
    
  }
}

function applyTheme(selected) {

  // themeChangerEl.value = selected; //saves the value
  bodyEl.classList.remove(...bodyEl.classList);
  switch (selected) {
    case "bold_vibrant":
      bodyEl.classList.remove(...bodyEl.classList);
      break;
    case "mystic":
      bodyEl.classList.add("mystic");
      break;
    case "green":
      bodyEl.classList.add("green");
      break;
    default:
      bodyEl.classList.remove(...bodyEl.classList);
      break;
  }
}


applyTheme(defaultTheme);