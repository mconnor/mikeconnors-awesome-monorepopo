class AstroSunMoon extends HTMLElement {
  connectedCallback() {
    const group = this.querySelector('wa-button-group');
    group?.addEventListener('click', (event) => {
      console.log('click');
      const btn = (event.target as HTMLElement).closest('wa-icon-button')!;

      const theme = btn.getAttribute('label');

      theme && document.firstElementChild?.setAttribute('data-theme', theme);
      // } catch (e) {
      //   console.error(e);
      // }
    });
  }

  constructor() {
    super();
    // this.classList.add('ready');
  }
}

customElements.define('astro-sun-moon', AstroSunMoon);
