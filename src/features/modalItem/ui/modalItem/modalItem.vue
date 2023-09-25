<script setup>
import './style.scss'
import { useItemStore } from '@/entities/inventory'
import { baseModal } from '@/shared/ui/baseModal'
import { storeToRefs } from 'pinia'
import DeleteItem from '../deleteItem/deleteItem.vue'

const itemStpre = useItemStore()
const { selectedItem } = storeToRefs(itemStpre)
function close() {
  selectedItem.value = null
}
</script>

<template>
  <Transition>
    <baseModal
      v-if="selectedItem"
      :close-click-handler="close"
      :img-src="selectedItem.src"
    >
      <template #modalFooter>
        <DeleteItem />
      </template>
    </baseModal>
  </Transition>
</template>
