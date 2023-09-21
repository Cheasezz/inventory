<script setup>
import './style.scss'
import { mySkeleton } from '@/shared/ui/skeleton'
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
  </div>
</template>
