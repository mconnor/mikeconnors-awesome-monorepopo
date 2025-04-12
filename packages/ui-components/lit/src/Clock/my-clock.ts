import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ClockController } from './clock-controller';

@customElement('my-clock')
class MyClock extends LitElement {
  // Create the controller and store it
  private clock = new ClockController(this, 100);

  // Use the controller in render()
  render() {
    const formattedTime = timeFormat.format(this.clock.value);
    return html`Current time: ${formattedTime}`;
  }
}

const timeFormat = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});

declare global {
  interface HTMLElementTagNameMap {
    'my-clock': MyClock;
  }
}
