# Filter Component Usage Guide

The enhanced `Filter.astro` component provides a powerful way to toggle visibility of other components based on framework selection. Here's how to use it:

## Basic Usage

### 1. Include the Filter Component

```astro
---
import Filter from '../components/Filter.astro';
---

<Filter />
```

### 2. Mark Elements as Filterable

Add the `data-framework` attribute to any element you want to be filterable:

```astro
<!-- Single framework -->
<div data-framework="svelte">This shows only when Svelte is selected</div>
<div data-framework="vue">This shows only when Vue is selected</div>
<div data-framework="react">This shows only when React is selected</div>
```

## How It Works

### 1. **Data Attributes**

- Add `data-framework="framework-name"` to any element
- Supported values: `svelte`, `vue`, `react`, `all`
- Elements with `data-framework="all"` are always visible

### 2. **CSS Classes**

- The filter adds/removes `hidden` and `block` classes
- Uses Tailwind CSS utility classes for visibility
- Smooth transitions with CSS `transition` properties

### 3. **Custom Events**

- Dispatches `framework-filter-change` events when filter changes
- Event contains `detail: { filter: string, timestamp: number }`
- Other components can listen to this event for custom behavior

## Advanced Usage

### Multi-Framework Components

For components that support multiple frameworks:

```astro
---
import MultiFrameworkAlert from '../components/MultiFrameworkAlert.astro';
---

<MultiFrameworkAlert
  frameworks={['svelte', 'react']}
  title="Cross-framework Library"
/>
```

### Custom Event Listeners

Listen to filter changes in your components:

```javascript
document.addEventListener('framework-filter-change', (event) => {
  const customEvent = event as CustomEvent;
  const { filter } = customEvent.detail;

  // Your custom filtering logic here
  console.log(`Filter changed to: ${filter}`);
});
```

### Dynamic Content Updates

Update counters, stats, or other dynamic content:

```javascript
document.addEventListener('framework-filter-change', (event) => {
  const customEvent = event as CustomEvent;
  const { filter } = customEvent.detail;

  // Count visible items
  const visibleItems = document.querySelectorAll(`[data-framework="${filter}"]:not(.hidden)`);

  // Update counter display
  const counter = document.getElementById('item-counter');
  if (counter) {
    counter.textContent = visibleItems.length.toString();
  }
});
```

## Styling Options

### DaisyUI Integration

The filter uses DaisyUI classes for consistent styling:

- `btn` - Base button styling
- `btn-primary` - Active state styling
- `btn-outline` - Inactive state styling
- `join` - Groups buttons together
- `join-item` - Individual button in group

### Custom Styling

Override styles with CSS:

```css
.filter .btn {
  @apply text-sm; /* Smaller text */
}

.filter .btn:checked {
  @apply btn-primary; /* Active state */
}

.filter .btn:not(:checked) {
  @apply btn-outline; /* Inactive state */
}
```

## Component Examples

### Framework Cards

```astro
<FrameworkCard
  framework="svelte"
  title="Svelte Project"
  description="A reactive framework"
/>
```

### Project Rows (Table)

```astro
<ProjectRow
  framework="react"
  projectName="Dashboard"
  description="Admin interface"
  githubUrl="https://github.com/..."
  demoUrl="https://demo...."
/>
```

### Stats Components

```astro
<div class="stat" data-framework="vue">
  <div class="stat-title">Vue Projects</div>
  <div class="stat-value">5</div>
</div>
```

## Best Practices

1. **Always include a "Show All" option** - The filter includes this by default
2. **Use consistent data-framework values** - Stick to `svelte`, `vue`, `react`
3. **Add smooth transitions** - Include CSS transitions for better UX
4. **Handle loading states** - Consider what shows before JavaScript loads
5. **Test accessibility** - Ensure keyboard navigation works properly

## Accessibility Features

- **ARIA labels** - Each radio button has appropriate aria-label
- **Keyboard navigation** - Standard radio button keyboard behavior
- **Screen reader support** - Clear labeling and state changes
- **Focus management** - Proper focus indicators

## Browser Support

- **Modern browsers** - Uses ES6+ features and CSS Grid
- **Progressive enhancement** - Works without JavaScript (shows all items)
- **Mobile responsive** - Touch-friendly button sizes
