<script setup>
import { baseButton } from '../baseButton'
import { iconCross } from '../icons'
import { mySkeleton } from '../skeleton'
import './style.scss'

defineProps({
  closeClickHandler: {
    type: Function,
    default: null,
  },
  imgSrc: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="modal">
    <baseButton
      :close="true"
      @click="closeClickHandler"
    >
      <template #icon>
        <iconCross />
      </template>
    </baseButton>
    <div
      v-if="imgSrc"
      class="img-wrapper"
    >
      <img
        :src="imgSrc"
        alt="itemImg"
        class="img"
      />
    </div>

    <article class="article">
      <hr class="hr" />

      <h2 class="h2">
        <mySkeleton />
      </h2>
      <p class="p">
        <mySkeleton />
        <mySkeleton />
        <mySkeleton />
        <mySkeleton />
        <mySkeleton />
        <mySkeleton />
      </p>
      <hr class="hr" />
    </article>
    <slot name="modalFooter"></slot>
  </div>
</template>
