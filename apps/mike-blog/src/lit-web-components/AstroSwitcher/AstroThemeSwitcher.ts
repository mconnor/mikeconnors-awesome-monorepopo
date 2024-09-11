import { css, html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

@customElement('astro-theme-switcher')
export class AstroThemeSwitcher extends LitElement {
  static styles = [
    css`
      form {
        display: flex;
        flex-wrap: wrap;
        gap: var(--s0);
        font-size: var(--font-size-0);
      }
    `,
  ];

  @property({ type: Boolean })
  isVisible = false;

  connectedCallback() {
    const form: Element = this.querySelector('[data-select-theme]')!;
    form.addEventListener(
      'input',
      this.handleChange.bind(this) as EventListenerOrEventListenerObject,
    );
  }

  disconnectedCallback() {
    const form = this.querySelector('[data-select-theme]')!;
    form.removeEventListener('input', this.handleChange);
  }

  handleChange = (e: Event): void => {
    const htmlTag = document.documentElement;
    htmlTag.setAttribute('data-theme', (e.target as HTMLInputElement).value);
    localStorage.setItem('theme', (e.target as HTMLInputElement).value);
  };

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'astro-theme-switcher': AstroThemeSwitcher;
  }
}
