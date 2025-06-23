class AstroForm extends HTMLElement {
  private form: HTMLFormElement | null = null;
  constructor() {
    super();
    this.onReady = this.onReady.bind(this);
  }
  connectedCallback() {
    this.form = this.querySelector('.input-validation-required');
    this.onReady().catch((err) =>
      console.error('Failed to initialize form:', err),
    );
  }

  onReady = async () => {
    await Promise.allSettled([
      customElements.whenDefined('wa-button'),
      customElements.whenDefined('wa-checkbox'),
      customElements.whenDefined('wa-input'),
      customElements.whenDefined('wa-option'),
      customElements.whenDefined('wa-select'),
      customElements.whenDefined('wa-textarea'),
    ]).then(() => {
      this.form?.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('All fields are valid!');
      });
    });
  };
}

customElements.define('astro-form', AstroForm);
