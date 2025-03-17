// await Promise.allSettled([
// customElements.whenDefined('wa-button-group'),
//   customElements.whenDefined('wa-icon-button'),
// ]);

// document.addEventListener('astro:page-load', () => {
//   await Promise.allSettled([
//     customElements.whenDefined('wa-button'),
//     customElements.whenDefined('wa-button-group'),
//   ]);

//     document.body.classList.add('ready');

//   document
//     .querySelector('wa-button-group')!
//     .addEventListener('click', (event) => {
//       console.log('click');
//       const button = event.target?.closest('wa-icon-button');
//       if (!button) return;

//       const theme = button.getAttribute('label') as string;
//       document.firstElementChild!.setAttribute('data-theme', theme);
//     });
// });

class AstroSunMoon extends HTMLElement {
  #btn: HTMLElement;

  constructor() {
    super();
    // this.classList.add('ready');
    const group = this.querySelector('wa-button-group');
    group!.addEventListener('click', (event) => {
      try {
        this.#btn = (event.target as HTMLElement).closest('wa-icon-button')!;

        const theme = this.#btn.getAttribute('label');

        theme && document.firstElementChild!.setAttribute('data-theme', theme);
      } catch (e) {
        console.error(e);
      }
    });
  }
}

customElements.define('astro-sun-moon', AstroSunMoon);
