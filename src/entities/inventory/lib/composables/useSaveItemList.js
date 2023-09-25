import { useItemStore } from '../../model/store'
import { storeToRefs } from 'pinia'
import { onBeforeMount, watch } from 'vue'

export function useSaveItemList() {
  const itemStore = useItemStore()
  const { items } = storeToRefs(itemStore)
  onBeforeMount(() => {
    const itemList = localStorage.getItem('itemList')
    if (itemList) items.value = JSON.parse(itemList)
  })

  watch(
    items,
    () => {
      localStorage.setItem('itemList', JSON.stringify(items.value))
    },
    { deep: true },
  )
}
