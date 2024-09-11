import type { RmUnitType } from '#UnitTypes.js';

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { styleMap } from 'lit/directives/style-map.js';

/**
 * @module stack-l
 * @description
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 * @property {string} space=var(--s1) A CSS `margin` value
 * @property {boolean} recursive=false Whether the spaces apply recursively (i.e. regardless of nesting level)
 * @property {number} splitAfter=null The element after which to _split_ the stack with an auto margin
 */

@customElement('stack-l')
export class Stack extends LitElement {
  @property({ type: String })
  space: RmUnitType = 'var(--s1)';

  @property({ type: Boolean })
  recursive = false;

  @property({ type: Number })
  splitAfter = 100;

  static styles = [
    css`
      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .noRecursion > * + * {
        margin-block-start: var(--planet-color, blue);
      }
    `,
  ];

  override render() {
    const styles = {
      gap: this.space,
    };

    return html`<div style=${styleMap(styles)}>
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stack-l': Stack;
  }
}
