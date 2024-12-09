<script lang="ts" setup>
</script>

<template>
  <div class="card-body">
    <div class="card-meta">
      <div class="card-meta-avatar">
        <span class="avatar">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png" alt="Avatar">
        </span>
      </div>
      <div class="card-meta-detail">
        <div class="card-meta-title">
          <a>Ant Design</a>
        </div>
        <div class="card-meta-description">
          <div class="card-description">
            段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-body {
  border: 0;
  border-radius: 0 0 8px 8px;
  color: rgba(0, 0, 0, 0.88);
  cursor: pointer;
  font-size: 14px;
  line-height: 22px;
  list-style: none;
  padding: 24px;
  text-decoration: none;
  width: 346px;
  height: 150px;
  display: block;

  .card-meta {
    border: 0;
    color: rgba(0, 0, 0, 0.88);
    column-rule: 0;
    cursor: pointer;
    font-size: 14px;
    line-height: 22px;
    list-style: none;
    margin: -4px 0;
    text-decoration: none;
    width: 298px;
    height: 110px;
    display: flex;

    .card-meta-avatar {
      border: 0;
      color: rgba(0, 0, 0, 0.88);
      column-rule: 0;
      cursor: pointer;
      font-size: 14px;
      line-height: 22px;
      list-style: none;
      min-height: auto;
      min-width: auto;
      padding: 0 16px 0 0;
      text-decoration: none;
      width: 64px;
      height: 110px;
      display: block;

      .avatar {
        border: 1px solid transparent;
        border-radius: 48px;
        color: #fff;
        column-rule: 0;
        cursor: pointer;
        font-size: 14px;
        line-height: 38px;
        list-style: none;
        overflow: hidden;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-wrap: nowrap;
        vertical-align: middle;
        white-space-collapse: collapse;
        width: 48px;
        height: 48px;
        display: inline-block;

        img {
          border: 0;
          color: #fff;
          column-rule: 0;
          cursor: pointer;
          font-size: 14px;
          line-height: 38px;
          list-style: none;
          overflow: clip;
          text-align: center;
          text-decoration: none;
          text-wrap: nowrap;
          vertical-align: middle;
          white-space-collapse: collapse;
          width: 46px;
          height: 46px;
          display: block;
        }
      }
    }

    .card-meta-detail {
      border: 0;
      color: rgba(0, 0, 0, 0.88);
      column-rule: 0;
      cursor: pointer;
      flex: 1 1 0%;
      font-size: 14px;
      line-height: 22px;
      list-style: none;
      min-height: auto;
      min-width: auto;
      overflow: hidden;
      text-decoration: none;
      width: 234px;
      height: 110px;
      display: block;

      .card-meta-title {
        border: 0;
        color: rgba(0, 0, 0, 0.88);
        column-rule: 0;
        cursor: pointer;
        font-weight: 600;
        line-height: 25.1429px;
        list-style: none;
        margin: 0 0 8px;
        overflow: hidden;
        text-decoration: none;
        text-overflow: ellipsis;
        text-wrap: nowrap;
        white-space-collapse: collapse;
        width: 234px;
        height: 25.1406px;
        display: block;

        a {
          border: 0;
          color: #1677ff;
          column-rule: 0;
          cursor: pointer;
          font-weight: 600;
          line-height: 25.1429px;
          list-style: none;
          text-decoration: none;
          text-wrap: nowrap;
          transition: color 0.3s;
          white-space-collapse: collapse;
          width: auto;
          height: auto;
          display: inline;
        }
      }

      .card-meta-description {
        border: 0;
        color: rgba(0, 0, 0, 0.45);
        column-rule: 0;
        cursor: pointer;
        font-size: 14px;
        line-height: 22px;
        list-style: none;
        text-decoration: none;
        width: 234px;
        height: 63px;
        display: block;

        .card-description {
          border: 0;
          inset: 0;
          color: rgba(0, 0, 0, 0.45);
          column-rule: 0;
          cursor: pointer;
          font-size: 14px;
          line-height: 21px;
          list-style: none;
          margin: 0 -14px 14px 0;
          max-height: 63px;
          overflow: hidden;
          padding: 0 14px 0 0;
          position: relative;
          text-align: justify;
          text-decoration: none;
          width: 248px;
          height: 63px;
          display: block;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>