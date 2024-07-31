/**
 * @module stack-l
 * @description
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 * @property {string} space=var(--s1) A CSS `margin` value
 * @property {boolean} recursive=false Whether the spaces apply recursively (i.e. regardless of nesting level)
 * @property {number} splitAfter=null The element after which to _split_ the stack with an auto margin
 */
export default class Stack extends HTMLElement {
  private styleEl: HTMLStyleElement | null = null;
  private i = '';

  constructor() {
    super();
  }

  get space(): string {
    return this.getAttribute('space') || 'var(--s1)';
  }

  set space(val: string) {
    this.setAttribute('space', val);
  }

  get recursive(): boolean {
    return this.hasAttribute('recursive');
  }

  set recursive(val: boolean) {
    if (val) {
      this.setAttribute('recursive', '');
    } else {
      this.removeAttribute('recursive');
    }
  }

  get splitAfter(): number | null {
    const attr = this.getAttribute('splitAfter');
    return attr ? parseInt(attr, 10) : null;
  }

  set splitAfter(val: number | null) {
    if (val !== null) {
      this.setAttribute('splitAfter', val.toString());
    } else {
      this.removeAttribute('splitAfter');
    }
  }

  static get observedAttributes(): string[] {
    return ['space', 'recursive', 'splitAfter'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    this.i = `Stack-${[this.space, this.recursive, this.splitAfter].join('')}`;
    this.dataset.i = this.i;

    if (!this.styleEl) {
      this.styleEl = document.createElement('style');
      this.styleEl.id = this.i;
      document.head.appendChild(this.styleEl);
    }

    this.styleEl.innerHTML = `
      [data-i="${this.i}"]${this.recursive ? '' : ' >'} * + * {
        margin-block-start: ${this.space};
      }

      ${
        this.splitAfter
          ? `
        [data-i="${this.i}"]:only-child {
          block-size: 100%;
        }

        [data-i="${this.i}"] > :nth-child(${this.splitAfter}) {
          margin-block-end: auto;
        }`
          : ''
      }
    `
      .replace(/\s{2,}/g, ' ')
      .trim();
  }
}

customElements.define('stack-l', Stack);
