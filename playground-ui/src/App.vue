<script lang="ts" setup></script>

<template>
  <div class="card-body">
    <h1 class="title">
      早安，Serati Ma <span class="welcome-text">，祝你开心每一天！</span>
    </h1>
    <p class="desc">蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</p>
  </div>
</template>

<style lang="less" scoped>
.card-body {
  border: 0;
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  background-color: #27a6fe;
  line-height: 22px;
  list-style: none;
  padding: 24px;
  text-decoration: none;
  width: calc(100% - 40px);
  height: 134px;
  margin: 20px;

  .title {
    border: 0;
    color: #fff;
    column-rule: 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 38px;
    list-style: none;
    margin: 0 0 12px;
    text-decoration: none;
    width: 1389px;
    height: 38px;

    .welcome-text {
      display: inline;
      font-size: 24px;
      font-weight: 500;
      line-height: 38px;
    }
  }

  .desc {
    border: 0;
    color: #fff;
    column-rule: 0;
    font-size: 14px;
    line-height: 22px;
    list-style: none;
    margin: 0 0 14px;
    text-decoration: none;
    width: 1389px;
    height: 22px;
  }
}
</style>
