import { actions } from 'astro:actions';
import { z } from 'astro:schema';
// helps with zod error messages
import { fromError } from 'zod-validation-error';

const nameSchema = z.string().min(4).max(40);

class GreetingButton extends HTMLElement {
  constructor() {
    super();
  }

  onKlick = async (val: string) => {
    // Show alert pop-up with greeting from action
    const enteredNamedParsed = nameSchema.safeParse(val);

    const {
      success: clientSideSuccess,
      error: clientSideError,
      data: clientSideData,
    } = enteredNamedParsed;

    if (clientSideError) {
      alert(fromError(clientSideError).toString());
      return;
    } else {
      console.error('passed clientside validation');
    }

    const { data, error } = await actions.getGreeting({
      name: clientSideData,
    });

    if (error?.code === 'UNAUTHORIZED') {
      alert('show log in page');
      return;
    }
    alert(data);
    return;
  };
  connectedCallback() {
    // const stringLiteralSchema = z.literal(this.dataset.message);

    const button = this.querySelector('button');
    const input = this.querySelector('input[name="login"]')!;
    if (!button || !input) {
      console.error('Button or input element not found');
      return;
    }

    button.addEventListener('click', () => {
      this.onKlick(input.value).catch((error: Error) => {
        console.error('Error in greeting button:', error);
      });
    });
  }
}

customElements.define('greeting-button', GreetingButton);

// declare global {
//   interface HTMLElementTagNameMap {
//     'greeting-button': GreetingButton;
//   }
// }
