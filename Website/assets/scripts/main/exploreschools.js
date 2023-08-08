// for carousel
const carousel = new Carousel(document.querySelectorAll(".carousel"), 400);
carousel.scrollAppearance(); //adds left and right function and scroll effects

//School generator
const municipalitySelect = document.getElementById("municipal_select"),
  submitBtn = document.querySelector("#find_school-btn"),
  form = document.querySelector(".choose_track"),
  schoolsDiv = document.getElementById("search_results");

let schools;

const phpFile = "../../assets/scripts/main/php/exploreSchools.php";

function initialize() {
  fetch(`${phpFile}`)
    .then((response) => response.json())
    .then((data) => {
      schools = data;
      while (municipalitySelect.options.length > 1) {
        municipalitySelect.remove(1);
      }
      function getUniqueRowsByMunicipality(arr) {
        const seenMunicipalities = {};
        return arr.filter((row) => {
          if (!seenMunicipalities[row.municipality]) {
            seenMunicipalities[row.municipality] = true;
            return true;
          }
          return false;
        });
      }
      const uniqueRows = getUniqueRowsByMunicipality(data);
      uniqueRows.forEach((municipality) => {
        const option = document.createElement("option");
        option.value = municipality.municipality.toLowerCase();
        option.textContent = municipality.municipality;
        municipalitySelect.appendChild(option);
      });
    })
    .catch((error) => {
  console.log(error)
    });
}

initialize();

submitBtn.addEventListener("click", (e) => {
  const trackRadio = form.querySelector("input[type=radio]:checked");
  e.preventDefault();
  let chosenMunicipality = municipalitySelect.value;
  if (chosenMunicipality == "default") {
    schoolsDiv.textContent = "Choose A Municipality.";
    return;
  }
  let chosenTrack = trackRadio.value;
  currentDisplayCount = 0;
  schoolsData = schools;
  displayFilteredData(schoolsData, chosenMunicipality, chosenTrack);
});

let currentDisplayCount = 0;
const schoolsPerPage = 10;
let schoolsData = null;

function displayFilteredData(data, municipality, track) {
  schoolsDiv.textContent = "";

  let foundSchool = false;
  let schoolsToShow = data.filter((school) => {
    return (
      school.municipality.toLowerCase() === municipality.toLowerCase() &&
      school.tracks_offering.includes(track.toUpperCase())
    );
  });

  const nextButton = document.getElementById("nextButton");
  nextButton.style.display =
    schoolsToShow.length > currentDisplayCount + schoolsPerPage
      ? "inline-block"
      : "none";

  const prevButton = document.getElementById("prevButton");
  prevButton.style.display = currentDisplayCount > 0 ? "inline-block" : "none";

  if (schoolsToShow.length === 0) {
    const noSchoolInfo = document.createElement("p");
    noSchoolInfo.textContent = "None";
    schoolsDiv.appendChild(noSchoolInfo);
    return;
  }

  for (
    let i = currentDisplayCount;
    i < currentDisplayCount + schoolsPerPage;
    i++
  ) {
    const school = schoolsToShow[i];
    if (!school) break;

    const schoolInfo = document.createElement("p");
    schoolInfo.textContent = `${school.school_name} - ${school.tracks_offering}`;
    schoolsDiv.appendChild(schoolInfo);
    foundSchool = true;
  }
}

const prevButton = document.getElementById("prevButton");
prevButton.addEventListener("click", () => {
  if (currentDisplayCount >= schoolsPerPage) {
    currentDisplayCount -= schoolsPerPage;
    displayFilteredData(
      schoolsData,
      municipalitySelect.value,
      form.querySelector("input[type=radio]:checked").value
    );
  }
});

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
  currentDisplayCount += schoolsPerPage;
  displayFilteredData(
    schoolsData,
    municipalitySelect.value,
    form.querySelector("input[type=radio]:checked").value
  );
});
