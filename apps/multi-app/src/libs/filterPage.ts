// Listen for filter changes and add smooth animations

document.addEventListener('astro:page-load', () => {
  setTimeout(() => okNow(), 2000);
});

const okNow = () => {
  document.addEventListener('framework-filter-change', (event: Event) => {
    // const customEvent = event as CustomEvent;
    // const { filter } = customEvent.detail;
    // console.log(`Filter changed to: ${filter}`);

    // Add fade-in animation to visible elements
    setTimeout(() => {
      const visibleElements = document.querySelectorAll(
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
    }, 1000);
  });
};
