<script lang="ts" setup>
</script>

<template>
  <div class="sider-logo">
    <a href="/pro/preview/" class="logo-link">
      <img src="https://store.antdv.com//pro/preview/assets/logo-e8f0c0c2.png" alt="logo" class="logo-image">
      <h1 class="logo-text">Admin Pro</h1>
    </a>
  </div>
</template>

<style lang="less" scoped>
.sider-logo {
  align-items: center;
  inset: 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 32px;
  min-height: auto;
  min-width: auto;
  padding: 16px;
  position: relative;
  width: 208px;
  height: 64px;
  display: flex;
  background-color: #333;
  border-radius: 4px;

  .logo-link {
    align-items: center;
    border: none;
    color: #1677ff;
    column-rule: 0;
    cursor: pointer;
    font-size: 14px;
    justify-content: center;
    line-height: 32px;
    min-height: 32px;
    min-width: auto;
    text-decoration: none;
    transition: color 0.3s;
    width: 130.734px;
    height: 32px;
    display: flex;

    .logo-image {
      border: none;
      color: #1677ff;
      column-rule: 0;
      cursor: pointer;
      font-size: 14px;
      line-height: 32px;
      min-height: auto;
      min-width: auto;
      overflow: clip;
      text-decoration: none;
      transition: height 0.2s;
      vertical-align: middle;
      width: 32px;
      height: 32px;
      display: block;
    }

    .logo-text {
      border: none;
      color: #ffffff;
      column-rule: 0;
      cursor: pointer;
      font-size: 18px;
      font-weight: 600;
      line-height: 32px;
      margin: 0 0 0 12px;
      min-height: auto;
      min-width: auto;
      overflow: hidden;
      text-decoration: none;
      vertical-align: middle;
      width: 86.7344px;
      height: 32px;
      display: block;
    }
  }
}
</style>