<script setup>
import './style.scss'
</script>

<template>
  <main class="main">
    <div class="flexRow">
      <slot name="sidebar"></slot>

      <slot name="inventory"></slot>
    </div>

    <slot name="footer"></slot>
  </main>
</template>
