const careerItems = [
  {
    career: "Carpentry",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Welding",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Solar Energy Technician",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Plumbing",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Metal Fabrication",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Automotive Technician",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Masonry",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
  {
    career: "Woodworking",
    careerSrc: "../../../assets/images/Websites/careers/s-technician.jpg",
  },
];

const careerChoicesDiv = document.querySelector(
    ".__container.career_paths_boxes"
  ),
  viewMoreCareerBtn = document.querySelector(".career_paths button");

viewMoreCareerBtn.addEventListener("click", () => {
  careerChoicesDiv.innerHTML = "";
  careerItems.forEach((career) => {
    let container = document.createElement("div");
    container.classList.add("container");
    let careerBtn = document.createElement("a");
    careerBtn.href = "./careers/careers.html";
    careerBtn.textContent = career.career;
    container.appendChild(careerBtn);
    careerChoicesDiv.appendChild(container);
  });
  viewMoreCareerBtn.style.display = "none";
  initializeBtnLinks();
});

const initializeBtnLinks = () => {
  const careerBtnLinks = careerChoicesDiv.querySelectorAll(".container a");
  careerBtnLinks.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      localStorage.setItem("selectedCareer", e.target.textContent);
    });
  });
};

initializeBtnLinks();
