<script lang="ts" setup>
</script>

<template>
  <div class="goods-card-item">
    <div class="content">
      <div class="title-wrapper">
        <span class="free-use-tag">解决方案</span>
        <h4 class="title">AI智能文档摘要助手</h4>
      </div>
      <div class="desc grid-style-1">
        <p>基于qwen-long长文本大模型，实现从大量报告文件中快速提取关键信息结合文本大模型生成回复给用户。提高工作效率，减少人力成本。</p>
      </div>
    </div>
    <div class="btn-wrapper">
      <div class="btn">
        <a class="btn-free-use" href="https://www.aliyun.com/solution/tech-solution/bailian-ai-summary" target="_blank">立即体验</a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.goods-card-item {
  background: url("https://img.alicdn.com/imgextra/i3/O1CN01WmzxYH1izGWvE2oMt_!!6000000004483-0-tps-448-222.jpg") 100% 50% / auto 100% no-repeat;
  box-shadow: rgba(19, 102, 236, 0.12) 0px 12px 20px 0px;
  color: #181818;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: space-between;
  line-height: 21px;
  margin: 0px 24px 24px;
  min-height: 222px;
  padding: 40px 40px 30px;
  text-decoration: none;
  transition: box-shadow 0.15s ease-in-out;
  width: 538px;
  height: 222px;

  .content {
    display: block;
    width: 458px;
    height: 84px;

    .title-wrapper {
      align-items: center;
      display: flex;
      width: 458px;
      height: 20px;

      .free-use-tag {
        background: rgba(19, 102, 236, 0.1);
        border-radius: 4px;
        color: #1366ec;
        font-size: 12px;
        line-height: 20px;
        margin: 0px 12px 0px 0px;
        padding: 0px 6px;
        text-align: justify;
        text-wrap: nowrap;
        white-space-collapse: collapse;
        width: 60px;
        height: 20px;
        display: block;
      }

      .title {
        color: #181818;
				padding-top: 3px;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        width: 160.852px;
        height: 20px;
        display: block;
      }
    }

    .desc {
      color: #8c8c8c;
      display: flex;
      flex-wrap: wrap;
      font-size: 14px;
      line-height: 24px;
      margin: 16px 0px 0px;
      width: 458px;
      height: 48px;

      p {
        display: block;
        width: 458px;
        height: 48px;
      }
    }
  }

  .btn-wrapper {
    display: block;
    min-height: 57px;
    width: 458px;
    height: 57px;

    .btn {
      cursor: pointer;
      display: inline-block;
      width: 458px;
      height: 32px;

      .btn-free-use {
        border: 1px solid #7f8fa9;
        color: #3384ff;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        line-height: 32px;
        min-width: 104px;
        padding: 0px 10px;
        text-align: center;
        text-decoration: none;
        transition: 0.15s ease-in-out;
        width: 104px;
        height: 32px;
        display: inline-block;
      }
    }
  }
}
</style>