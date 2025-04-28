class AstroDynamicCarousel extends HTMLElement {
  carousel: HTMLElement;
  addButton: HTMLButtonElement;
  removeButton: HTMLButtonElement;
  colors: string[];
  private colorIndex: number;

  constructor() {
    super();
    this.colorIndex = 2;
    this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    this.carousel = document.querySelector('.dynamic-carousel')!;
    this.addButton = document.querySelector('#dynamic-add')!;
    this.removeButton = document.querySelector('#dynamic-remove')!;
    // ...
  }

  connectedCallback() {
    // Obtain elements from the DOM (asserting non-null)

    // Define carousel colors and start at index 2

    // Bind event listeners to class methods
    this.addButton.addEventListener('click', this.addSlide.bind(this));
    this.removeButton.addEventListener('click', this.removeSlide.bind(this));
  }

  disCoonnectedCallback() {
    this.addButton.removeEventListener('click', this.addSlide());
    this.removeButton.removeEventListener('click', this.removeSlide());
  }

  addSlide(e): void {
    const slide = document.createElement('wa-carousel-item');
    // Increment colorIndex then select a new color by modulo
    const color = this.colors[++this.colorIndex % this.colors.length];
    // Use the current number of children to determine the slide number
    slide.innerText = `Slide ${this.carousel.children.length + 1}`;
    slide.style.setProperty('background', color);
    this.carousel.appendChild(slide);
    this.removeButton.disabled = false;
  }

  removeSlide(e): void {
    const numSlides = this.carousel.querySelectorAll('wa-carousel-item').length;
    if (numSlides > 1) {
      // Remove the last slide
      const slide = this.carousel.children[
        this.carousel.children.length - 1
      ] as HTMLElement;
      slide.remove();
      this.colorIndex--;
    }
    // Disable remove button if only one slide remains
    this.removeButton.disabled = numSlides - 1 <= 1;
  }
}

// Initialize the class when the DOM content is loaded.
// document.addEventListener('DOMContentLoaded', () => {
//   new DynamicCarousel();
// });

customElements.define('astro-dynamiccarousel', AstroDynamicCarousel);
