<script lang="ts" setup>
</script>

<template>
  <div class="list-header-info">
    <span class="list-header-title">我的待办</span>
    <p class="list-header-count">8个任务</p>
    <em class="list-header-divider"></em>
  </div>
</template>

<style lang="less" scoped>
.list-header-info {
  width: 241px;
  height: 58px;
  display: block;
  position: relative;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.88);
  border: none;

  .list-header-title {
    width: 56px;
    height: 22px;
    display: inline-block;
    margin-bottom: 4px;
    color: rgba(0, 0, 0, 0.65);
  }

  .list-header-count {
    width: 100%;
    height: 32px;
    display: block;
    font-size: 24px;
    line-height: 32px;
  }

  .list-header-divider {
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 1px;
    height: 56px;
    background-color: rgba(5, 5, 5, 0.06);
  }
}
</style>