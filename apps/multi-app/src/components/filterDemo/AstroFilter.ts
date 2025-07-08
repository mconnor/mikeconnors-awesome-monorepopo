// Listen for filter changes and add smooth animations

class AstroFilter extends HTMLElement {
  frameworks = ['react', 'svelte', 'vue'];
  connectedCallback() {
    const data = this.getAttribute('data-tabledata');

    this.addEventListener('framework-filter-change', (event: Event) => {
      // const customEvent = event as CustomEvent;
      // const { filter } = customEvent.detail;

      // Add fade-in animation to visible elements
      setTimeout(() => {
        const visibleElements = this.querySelectorAll(
          '[data-framework]:not(.hidden)',
        );
        visibleElements.forEach((element, index) => {
          (element as HTMLElement).style.opacity = '0';
          (element as HTMLElement).style.transform = 'translateY(20px)';

          setTimeout(() => {
            (element as HTMLElement).style.transition =
              'opacity 0.3s ease, transform 0.3s ease';
            (element as HTMLElement).style.opacity = '1';
            (element as HTMLElement).style.transform = 'translateY(0)';
          }, index * 50);
        });
      }, 100);
    });

    // Add counter updates when filter changes
    this.addEventListener('framework-filter-change', (event: Event) => {
      // const customEvent = event as CustomEvent;
      // const { filter } = customEvent.detail;

      // Update counters in real-time

      this.frameworks.forEach((framework) => {
        const elements = this.querySelectorAll(
          `[data-framework="${framework}"]`,
        );
        const visibleCount = Array.from(elements).filter(
          (el) => !el.classList.contains('hidden'),
        ).length;

        // Update any counter displays if they exist
        const counterElements = this.querySelectorAll(
          `[data-counter="${framework}"]`,
        );
        counterElements.forEach((counter) => {
          counter.textContent = visibleCount.toString();
        });
      });
    });
  }

  render() {
    // use this._config here
  }
}
customElements.define('astro-filter', AstroFilter);
