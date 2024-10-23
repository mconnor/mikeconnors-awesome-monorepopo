import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// import { styleMap } from 'lit/directives/style-map.js';
// import { classMap } from 'lit/directives/class-map.js';
import { wcStyles } from '../wcStyles/wc-styles.js';

@customElement('heart-button')
export class HeartButton extends LitElement {
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

  @property({ type: Number, reflect: true })
  count = 0;

  @property({ attribute: false })
  borderW = '1px';

  click = () => {
    this.count++;
  };

  protected render() {
    /* const styles = wcStyles; */
    return html`
      <div class="surface1">
        <button class="btn" @click=${this.click} aria-label="Heart">💜</button>
        <slot></slot>
        <span>${this.count}</span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'heart-button': HeartButton;
  }
}
