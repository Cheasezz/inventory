<script setup>
import { storeToRefs } from 'pinia'
import { useItemStore } from '@/entities/inventory'
import draggableItem from '../draggableItem/draggableItem.vue'
import droppableZone from '../droppableZone/droppableZone.vue'

const itemStore = useItemStore()
const { inventorySieze } = storeToRefs(itemStore)
</script>

<template>
  <droppableZone
    v-for="id in inventorySieze"
    :id="id"
    :key="id"
  >
    <draggableItem
      :id="id"
    />
  </droppableZone>
</template>
