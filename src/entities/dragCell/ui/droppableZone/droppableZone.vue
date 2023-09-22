<script setup>
import './style.scss'
import { useOnDrop } from '../../lib/composables'

defineProps({
  id: {
    type: Number,
    default: null,
  },
})

const { isTarget, onDrop } = useOnDrop()
</script>

<template>
  <div
    class="drop-zone"
    :class="isTarget ? 'target' : false"
    @drop.prevent="onDrop($event, id)"
    @dragenter.prevent="isTarget = true"
    @dragover.prevent
    @dragleave="isTarget = false"
  >
    <slot></slot>
  </div>
</template>
