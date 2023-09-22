<script setup>
import './style.scss'
import { useStartDrag } from '../../lib/composables'

defineProps({
  id: {
    type: Number,
    default: null,
  },
})

const { getItem, startDrag } = useStartDrag()
</script>

<template>
  <div
    v-if="getItem(id).length"
    class="drag-el"
    draggable="true"
    @dragstart="startDrag($event, getItem(id)[0])"
  >
    <img
      class="drag-el__img"
      :src="getItem(id)[0].src"
    />
    <span class="drag-el__counter">{{ getItem(id)[0].counter }}</span>
  </div>
</template>
