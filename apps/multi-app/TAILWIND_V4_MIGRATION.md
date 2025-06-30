# Tailwind CSS v4 Migration Notes

## Changes Made

### Replaced `container` class

- **Before**: `<div class="container mx-auto p-8">`
- **After**: `<div class="max-w-7xl mx-auto p-8">`

The `container` class in Tailwind CSS v4 works differently than v3. Instead of using the built-in container, we now use explicit max-width utilities:

- `max-w-7xl` provides a maximum width of 80rem (1280px)
- `mx-auto` centers the content horizontally
- This approach gives more explicit control over layout

### Replaced DaisyUI `stat` component

- **Before**: Complex `stat`, `stat-figure`, `stat-title`, `stat-value`, `stat-desc` structure
- **After**: Simple flexbox layout with explicit spacing and typography

```astro
<!-- Before -->
<div class="stat bg-base-100 rounded-box shadow-lg">
  <div class="stat-figure text-primary">
    <span class="text-3xl">⚛️</span>
  </div>
  <div class="stat-title">React Projects</div>
  <div class="stat-value text-primary">2</div>
  <div class="stat-desc">Dashboard & Blog</div>
</div>

<!-- After -->
<div class="bg-base-100 flex items-center gap-4 rounded-xl p-6 shadow-lg">
  <div class="text-primary">
    <span class="text-4xl">⚛️</span>
  </div>
  <div>
    <div class="text-base-content/60 text-sm font-medium">React Projects</div>
    <div class="text-primary text-3xl font-bold">2</div>
    <div class="text-base-content/70 text-sm">Dashboard & Blog</div>
  </div>
</div>
```

## Benefits

1. **More explicit**: Classes clearly show the intended layout and styling
2. **Better control**: No reliance on complex component classes
3. **v4 compatible**: Uses standard Tailwind utilities that work across versions
4. **Simpler maintenance**: Easier to understand and modify layout

## Preserved Features

- All DaisyUI theme colors (`text-primary`, `text-secondary`, `text-accent`)
- Card components (`card`, `card-body`, `card-title`)
- Button styling (`btn`, `btn-primary`, etc.)
- Table styling (`table`, `table-zebra`)
- Background and text colors (`bg-base-100`, `text-base-content`)

## Current CSS Setup

The project uses Tailwind CSS v4 syntax in `global.css`:

```css
@import 'tailwindcss';
@plugin "daisyui" { ... }
```

This provides both Tailwind utilities and DaisyUI components while being compatible with v4.
