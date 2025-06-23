// import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';

class MailtoButton extends HTMLElement {
  // Decode HTML entities back to text
  private decodeEntities(encoded: string): string {
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encoded;
    return textarea.value;
  }

  // Create a partially obscured version of the email parts
  private obfuscateEmailPart(encodedText: string): string {
    const decoded = this.decodeEntities(encodedText);
    if (decoded.length <= 3) return decoded;

    // Show first character and last character, obscure the middle
    const firstChar = decoded.charAt(0);
    const lastChar = decoded.charAt(decoded.length - 1);
    const middleChars = '•'.repeat(decoded.length - 2);

    return `${firstChar}${middleChars}${lastChar}`;
  }

  connectedCallback() {
    const button = this.querySelector('button');
    const srOnlyElement = this.querySelector('#email-success-msg');
    if (!button) return;

    const encodedUser = this.dataset.user;
    const encodedDomain = this.dataset.domain;

    if (!encodedUser || !encodedDomain) {
      console.error('No user or domain provided');
      return;
    }

    // Get custom button text
    const buttonText = this.dataset.text || 'email me';

    // Display obscured version for UI
    const displayUser = this.obfuscateEmailPart(encodedUser);
    const displayDomain = this.obfuscateEmailPart(encodedDomain);

    // Proper ARIA labeling with both role and meaningful text
    button.setAttribute(
      'aria-label',
      `${buttonText}: Contact via ${displayUser} at ${displayDomain.replace(/•/g, '')}`,
    );

    // Set display text with visually hidden spans for better screen reader understanding
    button.innerHTML = `
        <span class="inline-flex items-center">
          <span class="mr-1 text-nowrap">${buttonText}:</span>
          <span aria-hidden="true" class="font-mono">${displayUser}</span>
          <span class="sr-only">partially hidden email username</span>
          <span aria-hidden="true" class="mx-1  font-mono">[at]</span>
          <span class="sr-only"> at </span>
          <span aria-hidden="true" class="font-mono">${displayDomain}</span>
          <span class="sr-only">partially hidden domain name</span>
        </span>
      `;
    // button.setAttribute('class', 'btn  btn-primary');

    // Add specific role and tabindex to ensure keyboard accessibility
    button.setAttribute('role', 'button');
    button.setAttribute('tabindex', '0');

    // Support both click and keyboard activation
    const activateMailto = () => {
      const user = this.decodeEntities(encodedUser);
      const domain = this.decodeEntities(encodedDomain);

      // Announce to screen readers that email client is opening
      if (srOnlyElement) {
        srOnlyElement.textContent = 'Opening your email client...';

        // Add a visual feedback element for sighted users
        const feedbackEl = document.createElement('div');
        feedbackEl.textContent = 'Opening email client...';
        feedbackEl.className =
          'fixed bottom-4 right-4 bg-green-50 text-green-700 px-4 py-2.5 rounded-lg shadow-lg transition duration-300 text-sm font-medium flex items-center';

        // Add a checkmark icon using inline SVG (Tailwind v4 friendly)
        const iconSpan = document.createElement('span');
        iconSpan.className = 'mr-2 text-green-600';
        iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>`;

        feedbackEl.prepend(iconSpan);
        document.body.appendChild(feedbackEl);

        // Remove both feedback elements after announcement
        setTimeout(() => {
          srOnlyElement.textContent = '';
          feedbackEl.classList.add('opacity-0');
          setTimeout(() => feedbackEl.remove(), 500);
        }, 3000);
      }

      // Create and use the actual email only on interaction
      void navigate(`mailto:${user}@${domain}`);
    };

    // Handle click events
    button.addEventListener('click', (event) => {
      event.preventDefault();
      activateMailto();
    });

    // Handle keyboard events (Enter and Space)
    // button.addEventListener('keydown', (event) => {
    //   if (event.key === 'Enter' || event.key === ' ') {
    //     event.preventDefault();
    //     activateMailto();
    //   }
    // });
  }
}

customElements.define('mailto-button', MailtoButton);

declare global {
  interface HTMLElementTagNameMap {
    'mailto-button': MailtoButton;
  }
}
