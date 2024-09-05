import { css, html, LitElement } from 'lit';

import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
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
export class BoxClass extends LitElement {
  static styles = [
    css`
      :host {
        font-family: var(--box-font-family, Roboto);
        display: block;

        outline: 0.125rem solid transparent;
        outline-offset: -0.125rem;
      }

      .highlighted {
        opacity: 0.2;
      }
      .inverted {
        color: var(--box-background-color, white);
        background-color: var(--box-text-color, green);
      }
      .notInverted {
        color: var(--box-text-color, green);
        background-color: var(--box-background-color, white);
      }
    `,
  ];

  @property({ type: String })
  padding: RmUnitType = 'var(--s0)';

  @property({ type: String })
  borderWidth: RmUnitType = '1px';

  @property({ type: String })
  borderStyle: BorderStyle = 'solid';

  @property({ type: Boolean })
  invert = false;

  protected render() {
    const styles = {
      borderWidth: this.borderWidth,
      borderStyle: this.borderStyle,
      padding: this.padding,
    };

    return html`<div
      class=${classMap({ inverted: this.invert, notInverted: !this.invert })}
      style=${styleMap(styles)}
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'box-l': BoxClass;
  }
}
