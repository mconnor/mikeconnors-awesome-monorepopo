import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('astro-theme-switcher')
export class AstroThemeDropdown extends LitElement {
  // @property({ type: Boolean })
  // isVisible = false;

  connectedCallback() {
    super.connectedCallback();
    const form = this.querySelector('[data-select-theme]');
    form?.addEventListener(
      'input',
      this.handleChange.bind(this) as EventListenerOrEventListenerObject,
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.querySelector('[data-select-theme]')?.removeEventListener(
      'input',
      this.handleChange,
    );
  }

  handleChange = (e: Event): void => {
    console.log('handleChange', e);
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme', (e.target as HTMLInputElement).value);
    localStorage.setItem('theme', (e.target as HTMLInputElement).value);
  };

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-theme-dropdown': AstroThemeDropdown;
  }
}
