<script setup>
import './style.scss'
import { mySkeleton } from '@/shared/ui/skeleton'
import { baseButton } from '@/shared/ui/baseButton'
import { iconCross } from '@/shared/ui/icons'
</script>

<template>
  <div class="footer">
    <h2 class="h2">
      <mySkeleton />
    </h2>
    <baseButton :close="true">
      <template #icon>
        <iconCross />
      </template>
    </baseButton>
  </div>
</template>
