import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// import { styleMap } from 'lit/directives/style-map.js';
// import { classMap } from 'lit/directives/class-map.js';
import { wcStyles } from './wc-styles.ts';

@customElement('heart-button')
export class LitHeartButton extends LitElement {
  static styles = [
    wcStyles,
    css`
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-style: solid;
        max-inline-size: var(--size-content-1);
      }
    `,
  ];

  @property({ type: Number, reflect: true }) count = 0;

  constructor() {
    super();

    // event listner added to to HOST element
    this.addEventListener('click', this.inc);
  }

  inc = () => {
    this.count++;
  };

  protected render() {
    /* const styles = wcStyles; */
    return html`
      <div>
        <button type="button" class="" aria-label="Heart">💜</button>

        <div>count: ${this.count}</div>
      </div>
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'heart-button': LitHeartButton;
//   }
// }
