<script lang="ts" setup>
</script>

<template>
  <div class="content-title">
    早安， 
    <span class="text-red">Serati Ma</span>
    <span class="welcome-text">，祝你开心每一天！</span>
  </div>
</template>

<style lang="less" scoped>
.content-title {
  border: none;
  color: rgba(0, 0, 0, 0.88);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  list-style: none;
  margin: 0 0 12px;
  text-decoration: none;
  width: 922px; // 四舍五入取整
  height: 28px;
  display: block;

  .text-red {
    color: rgb(248, 113, 113);
  }

  .welcome-text {
    color: rgba(0, 0, 0, 0.88);
  }
}
</style>