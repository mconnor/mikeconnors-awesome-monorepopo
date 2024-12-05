import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/* playground-fold */
import { pause, play, replay } from './icons';
/* playground-fold-end */

@customElement('my-timer')
export class MyTimer extends LitElement {
  static styles = css`
    /* playground-fold */

    :host {
      display: inline-block;
      min-width: 4em;
      text-align: center;
      padding: 0.2em;
      margin: 0.2em 0.1em;
    }
    footer {
      user-select: none;
      font-size: 0.6em;
    }
    /* playground-fold-end */
  `;

  @property({ type: Number })
  duration = 60;

  @state() private end: number | null = null;

  @state() private remaining = 0;

  render() {
    const { remaining, running } = this;
    const min = Math.floor(remaining / 60000);
    const sec = pad(min, Math.floor((remaining / 1000) % 60));
    const hun = padHun(Math.floor((remaining % 1000) / 10));

    return html`
      ${min ? `${min}:${sec}` : `${sec}.${hun}`}
      <footer>
        ${remaining === 0 ? ''
        : running ? html`<span @click=${this.pause}>${pause}</span>`
        : html`<span @click=${this.start}>${play}</span>`}
        <span @click=${this.reset}>${replay}</span>
      </footer>
    `;
  }
  /* playground-fold */

  start() {
    this.end = Date.now() + this.remaining;
    this.tick();
  }

  pause() {
    this.end = null;
  }

  reset() {
    const running = this.running;
    this.remaining = this.duration * 1000;
    this.end = running ? Date.now() + this.remaining : null;
  }

  tick() {
    if (this.running) {
      this.remaining = Math.max(0, this.end - Date.now());
      requestAnimationFrame(() => this.tick());
    }
  }

  get running() {
    return this.end && this.remaining;
  }

  connectedCallback() {
    super.connectedCallback();
    this.reset();
  } /* playground-fold-end */
}
/* playground-fold */

function pad(pad: number, val: number) {
  console.log('pad', pad, val);
  if (pad) {
    return String(val).padStart(2, '0');
  }

  return val;
}

function padHun(val: number) {
  return String(val).padStart(2, '0');
}

/* playground-fold-end */
