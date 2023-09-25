<script setup>
import './style.scss'
// eslint-disable-next-line vue/require-prop-types
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    class="input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
