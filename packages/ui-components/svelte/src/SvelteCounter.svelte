<script lang="ts">
  // import type { Snippet } from 'svelte';
  // type Props = {
  //   children?: () => Snippet<[]>;
  //   klass?: string;
  // };

  let { children, klass = 'counter' } = $props();
  let count = $state(0);

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div class={klass}>
  <button onclick={subtract}>-</button>
  <pre>{count}</pre>
  <button onclick={add}>+</button>
</div>
<div class="counter-message">
  {@render children?.()}
</div>
