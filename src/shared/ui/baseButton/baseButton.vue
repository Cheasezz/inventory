<script setup>
import './style.scss'

defineProps({
  close: {
    type: Boolean,
    default: false,
  },
  red: {
    type: Boolean,
    default: false,
  },
  white: {
    type: Boolean,
    default: false,
  },
  whiteWithShadow: {
    type: Boolean,
    default: false,
  },
  redWithShadow: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    type="button"
    class="button"
    :class="{
      'button-close':close,
      'button--white': white,
      'button--white-shadow': whiteWithShadow,
      'button--red': red,
      'button--red-shadow': redWithShadow,
    }"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>
