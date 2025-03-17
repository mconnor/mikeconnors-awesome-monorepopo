import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// import { styleMap } from 'lit/directives/style-map.js';
// import { classMap } from 'lit/directives/class-map.js';
import { wcStyles } from '../wcStyles/wc-styles';

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

  @property() hostName = '';
  @property() shadowName = '';

  @property({ type: Number, reflect: true }) count = 0;

  @property({ attribute: false }) borderW = '1px';

  constructor() {
    super();

    // event listner added to to HOST element
    this.addEventListener(
      'click',
      (e: Event) => (this.hostName = (e.target as Element).localName),
    );
  }

  protected createRenderRoot() {
    const root = super.createRenderRoot();
    root.addEventListener('click', (e: Event) => {
      this.shadowName = (e.target as Element).localName;
      this.click();
    });

    return root;
  }

  click = () => {
    this.count++;
  };

  protected render() {
    /* const styles = wcStyles; */
    return html`
      <div class="surface1 cluster">
        <button class="btn blue-button" aria-label="Heart">💜</button>

        <h4>
          Component target:
          <span style="font-style: italic">${this.hostName}</span>
        </h4>
        <h4>
          Shadow target:
          <span style="font-style: italic">${this.shadowName}</span>
        </h4>
        <div><slot></slot></div>
        <h4>count: ${this.count}</h4>
      </div>
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'heart-button': LitHeartButton;
//   }
// }
