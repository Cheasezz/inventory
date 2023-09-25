<script setup>
import './style.scss'
import { ref } from 'vue'
import { baseButton } from '@/shared/ui/baseButton'
import { baseInput } from '@/shared/ui/baseInput'
import { useItemRemove } from '../../lib/composables'

const show = ref(false)
const { numOfItemRemoved, delItem } = useItemRemove()
</script>

<template>
  <div
    v-if="show"
    class="delete-confirm"
  >
    <div class="input-wrapper">
      <hr class="hr" />
      <baseInput
        v-model.number="numOfItemRemoved"
        placeholder="Введите количество"
      />
    </div>
    <div class="button-group">
      <baseButton
        :white-with-shadow="true"
        @click="show = false"
      >
        Отмена
      </baseButton>
      <baseButton
        :red-with-shadow="true"
        @click="delItem"
      >Подтвердить</baseButton
      >
    </div>
  </div>

  <baseButton
    v-else
    :red="true"
    @click="show = true"
  >
    Удалить предмет
  </baseButton>
</template>
