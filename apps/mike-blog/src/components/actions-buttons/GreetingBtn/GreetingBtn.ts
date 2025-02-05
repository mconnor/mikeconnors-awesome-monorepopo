import { actions } from 'astro:actions';
import { z } from 'astro:schema';

const nameSchema = z.string().min(2).max(40);

class GreetingButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    // const stringLiteralSchema = z.literal(this.dataset.message);
    const input = this.querySelector('input[name="login"]');

    const btn = this.querySelector('wa-button');
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    btn?.addEventListener('click', async () => {
      // Show alert pop-up with greeting from action
      const result = nameSchema.parse(input?.value);
      const greetingResponse = await actions.getGreeting.orThrow({
        name: result,
      });
      alert(greetingResponse);
      return;
    });
  }
}

customElements.define('greeting-button', GreetingButton);

// declare global {
//   interface HTMLElementTagNameMap {
//     'greeting-button': GreetingButton;
//   }
// }
