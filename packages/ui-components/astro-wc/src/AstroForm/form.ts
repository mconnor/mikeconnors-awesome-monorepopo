const errorMessage = `Don't forget to check me!`;

class AstroForm extends HTMLElement {
  private form: HTMLFormElement | null = null;
  // private checkBox: HTMLFormElement | null = null;

  constructor() {
    super();
    this.form = this.querySelector('.input-validation-required');
  }
  connectedCallback() {
    async () => {
      await Promise.allSettled([
        customElements.whenDefined('wa-button'),
        customElements.whenDefined('wa-checkbox'),
        customElements.whenDefined('wa-input'),
        customElements.whenDefined('wa-option'),
        customElements.whenDefined('wa-select'),
        customElements.whenDefined('wa-textarea'),
      ]).then(() => {
        //  this.checkBox = this.form!.querySelector('wa-checkbox');
        this.form?.addEventListener('submit', (event) => {
          event.preventDefault();
          alert('All fields are valid!');
        });
      });
    };
  }

  // onReady = async () => {
  //   await Promise.allSettled([
  //     customElements.whenDefined('wa-button'),
  //     customElements.whenDefined('wa-checkbox'),
  //     customElements.whenDefined('wa-input'),
  //     customElements.whenDefined('wa-option'),
  //     customElements.whenDefined('wa-select'),
  //     customElements.whenDefined('wa-textarea'),
  //   ]).then(() => {
  //     this.form = this.querySelector('.input-validation-required');

  //     this.checkBox = this.form.querySelector('wa-checkbox');

  //     this.form?.addEventListener('submit', (event) => {
  //       event.preventDefault();
  //       alert('All fields are valid!');
  //     });
  //   });
  // };
}

customElements.define('astro-form', AstroForm);
