<script setup>
import './style.scss'
import { baseButton } from '@/shared/ui/baseButton'
import { mySkeleton } from '@/shared/ui/skeleton'
import { iconCross } from '@/shared/ui/icons'
</script>

<template>
  <div class="footer">
    <h2 class="h2">
      <mySkeleton />
    </h2>
    <baseButton
    ><template #icon>
      <iconCross class="cross" />
    </template>
    </baseButton>
  </div>
</template>
