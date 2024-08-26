import { css, html, LitElement } from 'lit';

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
 */
@customElement('box-l')
export class Box extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        outline: 0.125rem solid transparent;
        outline-offset: -0.125rem;
        border-style: solid;
        color: var(--my-color, black);
        background-color: var(--my-bg-color, white);
      }

      :host([invert]) {
        color: var(--my-bg-color, white);
        background-color: var(--my-color, black);
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

declare global {
  interface HTMLElementTagNameMap {
    'box-l': Box;
  }
}
