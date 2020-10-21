<template>
  <div id="index">
    <div id="content">
      <!-- 中间内容 -->
      <MyMain />
    </div>
    <!-- Footer里面点击决定了content里面加载的模块 -->
    <!-- 或者在这里五个div分别隐藏和显示分别为五大模块 -->
    <Footer />
  </div>
</template>

<script>
import MyMain from "../components/MyMain";
import Footer from "../components/Footer";

export default {
  name: "App",

  components: {
    Footer,
    MyMain,
  },
};
</script>

<style>
li {
  list-style: none;
}
#index {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#content {
  flex: 1;
  overflow: auto;
}
</style>
