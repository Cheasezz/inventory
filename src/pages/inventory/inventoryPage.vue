<script setup>
import { mainScreen } from '@/shared/ui/layouts/mainScreen'
import { myFooter } from '@/widgets/footer'
import { mySidebar } from '@/widgets/sidebar'
import { interactiveInventory } from '@/widgets/interactiveInventory'
</script>

<template>
  <mainScreen>
    <template #sidebar>
      <mySidebar />
    </template>
    <template #inventory>
      <interactiveInventory />
    </template>
    <template #footer>
      <myFooter />
    </template>
  </mainScreen>
</template>
