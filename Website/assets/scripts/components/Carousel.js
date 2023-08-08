// nextBtn = carouselEl.querySelector('.next-chevron'),
// prevBtn = carouselEl.querySelector('.prev-chevron'),
// schoolCards = carouselEl.querySelector('.school-cards'),
// childEl = schoolCards.querySelector('.school-card');

class Carousel {

 carouselEl;
amount = 200;


  constructor(carouselEl, amount){
    this.carouselEl = carouselEl;
    this.amount = amount;
    if(amount == undefined){
      this.amount = 200;
      return;
    }
    console.log(amount)
  }

  scrollAppearance() {
    this.carouselEl.forEach((carousel) => {
      const nextBtn = carousel.querySelector(".next-chevron"),
        prevBtn = carousel.querySelector(".prev-chevron"),
        cardsList = carousel.querySelector(".cards-list")
        // childEl = schoolCards.querySelector(".school-card");

      // next and prev scroll behavior

      this.leftAndRightChevronAppearance(prevBtn, nextBtn, 0, cardsList);

      prevBtn.onclick = () => {
        this.scrollToNextPrev(-1*(this.amount), cardsList, prevBtn, nextBtn);
      };
      nextBtn.onclick = () => {
        this.scrollToNextPrev(this.amount, cardsList, prevBtn, nextBtn);
      };

      window.addEventListener("resize", () => {
        let currentScrollX = cardsList.scrollLeft;
        this.leftAndRightChevronAppearance(
          prevBtn,
          nextBtn,
          currentScrollX,
          cardsList
        );
      });

      // on scroll detect
      cardsList.onscroll = () => {
        let currentScrollX = cardsList.scrollLeft;
        this.leftAndRightChevronAppearance(
          prevBtn,
          nextBtn,
          currentScrollX,
          cardsList
        );
      };
    });
  }

  // scrolls to next/prev
  scrollToNextPrev(amount, cardsList, prevBtn, nextBtn) {
    let currentScrollX = cardsList.scrollLeft;
    let newScrollX = currentScrollX + amount;

    cardsList.scrollTo({
      left: newScrollX,
      behavior: "smooth",
    });
  }

  // triggers the apperance of left and right chevron
  leftAndRightChevronAppearance(prevBtn, nextBtn, currentScrollX, cardsList) {
    let cardsListMaxWidth = cardsList.scrollWidth - cardsList.clientWidth;
    if (currentScrollX == 0) {
      prevBtn.style.visibility = "hidden";
    } else {
      prevBtn.style.visibility = "visible";
    }

    if (currentScrollX == cardsListMaxWidth) {
      nextBtn.style.visibility = "hidden";
    } else {
      nextBtn.style.visibility = "visible";
    }
  }
}



// const carouselEl = document.querySelectorAll(".carousel");
// scrollAppearance(carouselEl);
