import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';

@customElement('box-l')
export class Box extends LitElement {
  connectedCallback() {
    // Check if this component was server-side rendered
    // const isSSR = this.getAttribute('is:ssr') === 'true';
    // console.log(`Is SSR: ${isSSR}`);
  }

  static styles = [
    css`
      :host {
        display: block;
        outline: 0.125rem solid transparent;
        outline-offset: -0.125rem;
      }
    `,
  ];

  @property()
  padding = 'var(--s0)';

  @property()
  borderWidth = 'var(--border-thin)';

  @property({ type: Boolean })
  invert = false;

  @property({ type: Boolean })
  is = false;

  override render() {
    const styles = {
      border: `${this.borderWidth} solid`,
      padding: this.padding,
      color: this.invert ? 'var(--my-bg-color)' : 'var(--my-color)',
      backgroundColor: this.invert ? 'var(--my-color)' : 'var(--my-bt-color)',
    };

    return html`<div style=${styleMap(styles)}><slot></slot></div>`;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'box-l': Box;
//   }
// }
