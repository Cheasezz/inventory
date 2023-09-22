<script setup>
import './style.scss'
import { useItemStore } from '@/entities/dragCell'
import { baseButton } from '@/shared/ui/baseButton'
import { mySkeleton } from '@/shared/ui/skeleton'

const itemStore = useItemStore()
</script>

<template>
  <div class="sidebar">
    <div class="img-wrapper">
      <img
        src="@/shared/ui/images/nicebg.png"
        class="img"
        alt="image"
      />
    </div>
    <h2 class="h2">
      <mySkeleton />
    </h2>
    <p class="p">
      <mySkeleton />
    </p>
    <p class="p">
      <mySkeleton />
    </p>
    <p class="p">
      <mySkeleton />
    </p>
    <p class="p">
      <mySkeleton />
    </p>
    <baseButton
      class="reset"
      @click="itemStore.$reset"
    >Default inventory values</baseButton
    >
  </div>
</template>
