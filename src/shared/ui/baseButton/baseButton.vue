<script setup>
import './style.scss'
</script>

<template>
  <button
    type="button"
    class="button"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
