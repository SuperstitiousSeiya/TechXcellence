const containerDiv = document.querySelector(".container"),
  faqsDiv = document.querySelector(".faqs"),
  popularDiv = document.querySelector(".popular"),
  filtersDiv = document.querySelectorAll(".filter");

function initialize() {
  fetch("fetch_faqs.php")
    .then((response) => response.json())
    .then((data) => {
      showFaqs(data);
      return data;
    })
    .catch((error) => {});
}
initialize();

const showFaqs = (array) => {
  for (let i = 0; i < 13; i++) {
    let randomIndex = Math.floor(Math.random() * array.length);
    let template = `<div class="question">
                      <p>${array[randomIndex].question}</p>
                      <div class="answer">${array[randomIndex].answer}</div>
                    </div>`;
    if (i < 3) {
      popularDiv.insertAdjacentHTML("beforeend", template);
    } else {
      faqsDiv.insertAdjacentHTML("beforeend", template);
    }
  }
  filtersDiv.forEach((filter) => {
    filter.addEventListener("click", () => {
      faqsDiv.textContent = "";
      for (let i = 0; i < array.length; i++) {
        let filters = array[i].filters.split(",");
        if (filters.includes(filter.value)) {
          let template = `<div class="question">
                            <p>${array[i].question}</p>
                            <div class="answer">${array[i].answer}</div>
                          </div>`;
          faqsDiv.insertAdjacentHTML("beforeend", template);
        }
      }
    });
  });
};
