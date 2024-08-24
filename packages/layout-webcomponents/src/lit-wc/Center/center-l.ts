import { css, LitElement } from 'lit';
import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import type { RmUnitType } from '@repo/styles/Types';

/**
 * @module center-l
 * @description
 * A custom element for generic boxes/containers
 * @property {string} max
 * @property {string} andText
 * @property {string} gutters
 * @property {boolean} intrinsic
 */



@customElement('center-l')
export class CenterClass extends LitElement {
  @property({ type: String })
  max: RmUnitType;

  @property({ type: Boolean })
  andText = false;

  @property({ type: String })
  gutters: RmUnitType = '0';

  @property({ type: Boolean })
  intrinsic = false;

  static styles =
    css`
      :host {
        display: block;
        margin-inline: auto;
      }
      :host([intrinsic]) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `
  ;

  connectedCallback() {
    super.connectedCallback();
    this.style.setProperty('text-align', this.andText ? 'center' : 'initial');
    this.style.setProperty('max-width', this.max);
  }

  updated(changedProperties) {
    if (changedProperties.has('max')) {
      this.style.setProperty('max-width', this.max);
    }
    if (changedProperties.has('gutters')) {
      this.style.setProperty('padding-inline-start', `${this.gutters}px`);
      this.style.setProperty('padding-inline-end', `${this.gutters}px`);
    }
    if (changedProperties.has('andText')) {
      this.style.setProperty('text-align', this.andText ? 'center' : 'initial');
    }
    if (changedProperties.has('intrinsic') && this.intrinsic) {
      this.style.setProperty('display', 'flex');
      this.style.setProperty('justify-content', 'center');
      this.style.setProperty('align-items', 'center');
    } else {
      this.style.setProperty('display', 'block');
    }
  }

  render() {
    const myStyles = {
      textAlign: this.andText ? 'center' : 'initial',
      maxWidth: this.max,
    };

    return html`<slot style=${styleMap(myStyles)}></slot>`;

    // const myStyles = {
    //   textAlign: this.andText ? 'center' : 'initial',
    //   maxWidth: this.max,
    // };
  }
}
