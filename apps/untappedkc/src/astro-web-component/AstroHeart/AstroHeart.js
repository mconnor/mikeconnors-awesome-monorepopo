// Define the behaviour for our new type of HTML element.
class AstroHeart extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.count = 100;
    const heartButton = this.querySelector('button');
    const countSpan = this.querySelector('span');

    countSpan.textContent = this.count.toString();

    // Each time the button is clicked, update the count.

    heartButton.addEventListener('click', () => {
      this.count++;
      countSpan.textContent = this.count.toString();
    });
  }
  disconnectedCallBack() {
    const heartButton = this.querySelectorById('favDialog');
    const countSpan = this.querySelector('span');
    heartButton.removeEventListener('click', () => {
      this.count++;
      countSpan.textContent = this.count.toString();
    });
  }
}

// Tell the browser to use our AstroHeart class for <astro-heart> elements.
customElements.define('astro-heart', AstroHeart);
