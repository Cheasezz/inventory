<script setup>
import { myInventory } from '@/entities/inventory'
import { dragCell } from '@/features/inventoryDragCell'
import { modalItem } from '@/features/modalItem';
</script>

<template>
  <myInventory>
    <template #inventoryCell>
      <dragCell />
    </template>
    <template #modal>
      <modalItem/>
    </template>
  </myInventory>
</template>
