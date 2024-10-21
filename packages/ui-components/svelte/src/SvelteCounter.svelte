<!-- @component
A counter written with Svelte
-->
<script lang="ts">
  export let klass;
  let count = 0;

  function add() {
    count += 1;
  }

  function subtract() {
    count -= 1;
  }
</script>

<div class={klass}>
  <button on:click={subtract}>-</button>
  <pre>{count}</pre>
  <button on:click={add}>+</button>
</div>
<div class="counter-message">
  <slot />
</div>
