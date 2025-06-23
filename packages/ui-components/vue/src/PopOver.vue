<template>
  <Popover>
    <PopoverButton>
      Solutions <ChevronDownIcon class="ui-open:rotate-180 ui-open:transform" />
    </PopoverButton>
    <PopoverPanel>
      <a href="/insights">Insights</a> <a href="/automations">Automations</a>
      <a href="/reports">Reports</a>
    </PopoverPanel>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
</script>
