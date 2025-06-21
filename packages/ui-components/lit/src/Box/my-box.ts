import type { BorderStyle, RmUnitType } from '../Types.ts';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

/**
 * @module box-l
 * @description
 * A custom element for generic boxes/containers
 * @property {String} padding=var(--s1) A CSS `padding` value
 * @property {String} borderWidth=var(--border-thin) A CSS `border-width` value
 * @property {String} borderStyle
 * @property {Boolean} invert
 */

const mainColor = css`var(--text-1, --blue-6)`;
const bgColor = css`var(--surface-2,--orange-6)`;

const styles = css`
  :host {
    display: block;
    outline: 0.125rem solid transparent;
    outline-offset: -0.125rem;
    color: inherit;
    background-color: inherit;
  }

  ::slotted {
    color: inherit;
    background-color: inherit;
  }

  .highlighted {
    opacity: 0.2;
  }

  .inverted {
    color: ${bgColor};
    background-color: ${mainColor};
  }
`;

@customElement('box-l')
export class Box extends LitElement {
  static styles = styles;

  @property({ type: String })
  padding: RmUnitType = 'var(--s0, 1rem)';

  @property({ type: String })
  borderWidth: RmUnitType = '1px';

  @property({ type: String })
  borderStyle: BorderStyle = 'solid';

  @property({ type: Boolean })
  invert = false;

  // wrapperTemplate() {
  //   return html`<div
  //     class=${classMap({ inverted: this.invert })}
  //     style=${styleMap(styles)}
  //   >
  //     <slot></slot>
  //   </div>`;
  // }

  protected render() {
    const styles = {
      borderWidth: this.borderWidth,
      borderStyle: this.borderStyle,
      padding: this.padding,
    };

    return html`<div
      class=${classMap({ inverted: this.invert })}
      style=${styleMap(styles)}
    >
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'box-l': Box;
  }
}
