// Add counter updates when filter changes
document.addEventListener('framework-filter-change', (event: Event) => {
  // const customEvent = event as CustomEvent;
  // const { filter } = customEvent.detail;

  // Update counters in real-time
  const frameworks = ['react', 'svelte', 'vue'];
  frameworks.forEach((framework) => {
    const elements = document.querySelectorAll(
      `[data-framework="${framework}"]`,
    );
    const visibleCount = Array.from(elements).filter(
      (el) => !el.classList.contains('hidden'),
    ).length;

    // Update any counter displays if they exist
    const counterElements = document.querySelectorAll(
      `[data-counter="${framework}"]`,
    );
    counterElements.forEach((counter) => {
      counter.textContent = visibleCount.toString();
    });
  });
});
