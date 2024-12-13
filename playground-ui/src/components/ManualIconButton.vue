<script lang="ts" setup></script>

<template>
  <div class="manual-icon-button">
    <img
      src="https://img.alicdn.com/imgextra/i1/O1CN018Rdpz51IxGo11CYqq_!!6000000000959-55-tps-28-26.svg"
    />
    <span class="text">仓库通</span>
  </div>
</template>

<style lang="less" scoped>
.manual-icon-button {
  background-color: rgb(242, 244, 253);
  width: 72px;
  height: 72px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 7px 0;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  > img {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
  }
  > .text {
    font-size: 12px;
    line-height: 18px;
    color: #181c1f;
  }
  &:hover {
    background-color: #fff;
  }
}
</style>
