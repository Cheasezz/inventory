import { ref } from "vue"
import { useItemStore } from "../../model/store"
import { storeToRefs } from "pinia"

export function useOnDrop() {
  const isTarget = ref(false)

  const itemStore = useItemStore()
  const { items } = storeToRefs(itemStore)

  function onDrop(e, id) {
    if (e.target.classList[0] === 'drop-zone') {
      const itemID = e.dataTransfer.getData('itemID')
      const item = items.value.find((item) => item.id == itemID)
      item.id = id
      isTarget.value = false
    }
  }
  return {
    isTarget,
    onDrop
  }
}
