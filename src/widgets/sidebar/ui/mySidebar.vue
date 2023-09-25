<script setup>
import './style.scss'
import { useItemStore } from '@/entities/inventory'
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
    <article class="article">
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
    </article>
    <baseButton
      :white="true"
      @click="itemStore.$reset"
    >Сбросить инвентарь</baseButton
    >
  </div>
</template>
