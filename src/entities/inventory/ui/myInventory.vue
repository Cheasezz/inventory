<script setup>
import './style.scss'
import { useSaveItemList } from '../lib/composables'

useSaveItemList()
</script>

<template>
  <div class="inventory">
    <slot name="inventoryCell"></slot>
    <slot name="modal"></slot>
  </div>
</template>
