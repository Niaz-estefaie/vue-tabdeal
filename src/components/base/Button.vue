<script setup>
defineProps({
  borderClasses: String,
  colorClasses: String,
  effectClass: String,
});
</script>

<template>
  <button
    class="px-3 text-sm rounded h-8 flex items-center justify-center"
    :class="[borderClasses, colorClasses, effectClass]"
  >
    <slot name="text"></slot>
  </button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
