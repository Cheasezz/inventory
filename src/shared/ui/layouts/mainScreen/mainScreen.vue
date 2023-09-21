<script setup>
import './style.scss'
</script>

<template>
  <main class="main">
    <div class="main__item">
      <slot name="sidebar"></slot>
    </div>
    
    <div class="main__item">
      <slot name="inventory"></slot>
    </div>

    <div class="main__item">
      <slot name="footer"></slot>
    </div>
  </main>
</template>
