<script setup>
import { myFooter } from '@/widgets/footer'
import { mySidebar } from '@/widgets/sidebar'
import { mainScreen } from '@/shared/ui/layouts/mainScreen'
import { myInventory } from '@/features/inventory';
</script>

<template>
  <mainScreen>
    <template #sidebar>
      <mySidebar />
    </template>
    <template #inventory>
      <myInventory />
    </template>
    <template #footer>
      <myFooter />
    </template>
  </mainScreen>
</template>
