import { storeToRefs } from 'pinia'
import { useItemStore } from '../../model/store'

export function useStartDrag() {
  const itemStore = useItemStore()
  const { items } = storeToRefs(itemStore)

  function getItem(id) {
    return items.value.filter((item) => item.id === id)
  }
  function startDrag(e, item) {
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('itemID', item.id)
  }
  return {
    getItem,
    startDrag
  }
}
