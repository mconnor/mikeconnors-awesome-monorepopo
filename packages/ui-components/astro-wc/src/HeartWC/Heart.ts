// Define the behaviour for our new type of HTML element.
class AstroHeart extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    let initialCount = this.getAttribute('data-count');
    initialCount ??= '0';

    let count = parseInt(initialCount);

    const heartButton = this.querySelector('button');
    const countSpan = this.querySelector('span');

    heartButton &&
      countSpan &&
      heartButton.addEventListener('click', () => {
        count++;
        countSpan.textContent = count.toString();
      });
  }
}

// Tell the browser to use our AstroHeart class for <astro-heart> elements.
customElements.define('astro-heart', AstroHeart);
