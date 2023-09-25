import { useItemStore } from '@/entities/inventory'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

export function useItemRemove() {
  const itemStore = useItemStore()
  const { selectedItem } = storeToRefs(itemStore)

  const numOfItemRemoved = ref(null)
  function delItem() {
    if (!numOfItemRemoved.value) return
    if (0 < numOfItemRemoved.value && numOfItemRemoved.value <= selectedItem.value.counter) {
      selectedItem.value.counter -= numOfItemRemoved.value
    }
    numOfItemRemoved.value = null
  }
  return {
    numOfItemRemoved,
    delItem,
  }
}
