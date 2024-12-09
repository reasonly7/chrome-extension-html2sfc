<script lang="ts" setup></script>

<template>
  <div class="basic-list-header-info">
    <span>本周任务平均处理时间</span>
    <p>32分钟</p>
    <em></em>
  </div>
</template>

<style lang="less" scoped>
.basic-list-header-info {
  width: 241px;
  height: 58px;
  position: relative;
  text-align: center;
  font-size: 14px;
  line-height: 22px;
  display: block;

  span {
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 4px;
    width: 140px;
    height: 22px;
    display: inline-block;
  }

  p {
    color: rgba(0, 0, 0, 0.88);
    font-size: 24px;
    line-height: 32px;
    width: 100%;
    height: 32px;
    display: block;
  }

  em {
    background: rgba(5, 5, 5, 0.06);
    position: absolute;
    top: 2px;
    right: 0;
    width: 1px;
    height: 56px;
    display: block;
  }
}
</style>