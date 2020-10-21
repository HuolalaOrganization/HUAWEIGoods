<template>
  <!-- 底部 -->
  <ul id="footer">
    <li>
      <p></p>
      <p>首页</p>
    </li>
    <li>
      <p></p>
      <p>分类</p>
    </li>
    <li>
      <p></p>
      <p>发现</p>
    </li>
    <li>
      <p></p>
      <p>购物车</p>
    </li>
    <li>
      <p></p>
      <p>我的</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: row;
  background-color: #a1a11a;
  justify-content: space-around;
}
</style>