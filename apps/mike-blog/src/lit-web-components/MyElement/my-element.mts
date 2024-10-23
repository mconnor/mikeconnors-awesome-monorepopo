/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { css,html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */

const mainColor = css`var(--text-1)`;
@customElement('my-element')
export class MyElement extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      color: ${mainColor};
    }
  `;

  /**
   * The name to say "Hello" to.
   */
  @property({ type: String })
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  @property({ type: Boolean })
  enabled = false;

  @property({ attribute: false })
  borderW = '1px';

  render() {
    const styles = {
      borderWidth: this.borderW,
      borderColor: 'black',
      borderStyle: 'solid',
    };
    const classes = { enabled: this.enabled, hidden: false };
    return html`
      <div class=${classMap(classes)} style=${styleMap(styles)}>
        <p>${this.sayHello(this.name)}!</p>
        <div>Classy text</div>

        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </div>
    `;
  }

  _onClick = () => {
    this.count++;
    // this.dispatchEvent(new CustomEvent('count-changed'));
  };

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'my-element': MyElement;
//   }
// }
