import { defineStore } from 'pinia'
import { ref } from 'vue'
import { itemGreen, itemBrown, itemPurple } from '@/shared/ui/icons'

export const useItemStore = defineStore('items', () => {
  const items = ref([
    { id: 1, counter: 4, src: itemGreen },
    { id: 2, counter: 2, src: itemBrown },
    { id: 3, counter: 5, src: itemPurple },
  ])

  function $reset() {
    localStorage.clear()
    items.value = [
      { id: 1, counter: 4, src: itemGreen },
      { id: 2, counter: 2, src: itemBrown },
      { id: 3, counter: 5, src: itemPurple },
    ]
  }

  return {
    items,
    $reset,
  }
})
