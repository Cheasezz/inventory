<script setup>
import './style.scss'
import { useSaveItemList } from '../lib/composables/useSaveItemList'
import { draggableItem, droppableZone } from '@/entities/dragCell'

useSaveItemList()
</script>

<template>
  <div class="inventory">
    <droppableZone
      v-for="id in 25"
      :id="id"
      :key="id"
    >
      <draggableItem :id="id" />
    </droppableZone>
  </div>
</template>
