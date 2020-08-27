<template>
  <div class="composition-api"> 
    <span>{{ count }}</span>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/composition-api';
import counterStore from '@/store/compositionAPI/index'

export default {
  setup() {
    const counter = counterStore();
    const count = computed(() => counter.count);

    return {
      count,
      increment: counter.increment,
      decrement: counter.decrement,
    };
  },
};
</script>