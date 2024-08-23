import { css, LitElement } from 'lit';
import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
// import { classMap } from 'lit/directives/class-map.js';
import type { RmUnitType, BorderStyle } from '@repo/styles/Types';
/**
 * @module box-l
 * @description
 * A custom element for generic boxes/containers
 * @property {string} padding=var(--s1) A CSS `padding` value
 * @property {string} borderWidth=var(--border-thin) A CSS `border-width` value
 * @property {string} borderStyle
 * @property {boolean} invert=false Whether to apply an inverted theme. Only recommended for greyscale designs.
 */
@customElement('box-l')
export class BoxClass extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    // Check if this component was server-side rendered
    const isSSR = this.getAttribute('is:ssr') === 'true';
    console.log(`Is SSR: ${isSSR}`);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  static styles = [
    css`
      :host {
        display: block;
        outline: 0.125rem solid transparent;
        outline-offset: -0.125rem;
        border-style: solid;
        color: inherit;
        background-color: inherit;
        /* border-width: var(--border-thin);
        padding: var(--s1); */
        /* color: var(--my-color);
        background-color: var(--my-bg-color); */
      }

      :host(.invert) {
        color: var(--my-bg-color, black);
        background-color: var(--my-color, white);
      }

      .highlighted {
        opacity: 0.2;
      }
    `,
  ];

  @property({ type: String })
  padding: RmUnitType = 'var(--s0)';

  @property({ type: String })
  borderWidth: RmUnitType = '1px';

  @property({ type: Boolean })
  invert = false;

  @property({ type: Boolean })
  highlight = false;

  @property({ type: String })
  borderStyle: BorderStyle = 'solid';

  protected render() {
    const styles = {
      borderWidth: this.borderWidth,
      borderStyle: this.borderStyle,
      padding: this.padding,
    };

    return html`<div style=${styleMap(styles)}>
      <slot></slot>
    </div>`;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'box-l': Box;
//   }
// }
