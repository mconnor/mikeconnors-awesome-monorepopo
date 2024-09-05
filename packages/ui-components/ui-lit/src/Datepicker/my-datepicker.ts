import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { localDateFromUTC } from './date-utils.js';
import DateDisplay from './date-display.js';

@customElement('my-datepicker')
class MyDatePicker extends LitElement {
  @property() date?: Date;

  render() {
    return html`
      <p>Choose a date: <input type="date" @change=${this._dateChanged} /></p>
      <p><button @click=${this._chooseToday}>Choose Today</button></p>
      <p>Date chosen: <date-display .date=${this.date}></date-display></p>
    `;
  }

  _dateChanged(e: Event) {
    const utcDate = (e.target as HTMLInputElement).valueAsDate;
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
    }
  }

  _chooseToday() {
    this.date = new Date();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-datepicker': MyDatePicker;
  }
}
