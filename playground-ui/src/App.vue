<script lang="ts" setup>
import AICard from "./components/AICard.vue";
import AIIconButton from "./components/AIIconButton.vue";
import ManualIconButton from "./components/ManualIconButton.vue";
</script>

<template>
  <div class="outer-wrapper">
    <ManualIconButton></ManualIconButton>
    <AIIconButton></AIIconButton>
    <AICard></AICard>
  </div>
</template>

<style lang="less" scoped>
.outer-wrapper {
  padding: 100px;
}
</style>
