<template>
  <div id="LoginCon">
    <div id="login" v-if="isLogin">
      <p id="logo">
        <img src="../assets/loginImg/ic_huaweiid_security_logo40.png" />
      </p>
      <p id="title">华为账号</p>
      <p id="titleDown">登录华为账号以使用云空间、华为应用及更多服务</p>
      <router-view></router-view>
      <p id="loginClass">其他登录方式</p>
      <p id="QQ">
        <img src="../assets/loginImg/qq.png" alt="" />
      </p>
      <p id="bottom">
        <span>遇到问题</span>
        |
        <span>隐私声明</span>
      </p>
    </div>
    <Statement v-show="false" />
    <DateSelect v-show="false" />
  </div>
</template>

<script>
import Statement from "../components/Statement";
import DateSelect from "../components/DateSelect";
export default {
  name: "Login",
  data: function () {
    return {
      isLogin: true,
    };
  },
  components: {
    Statement,
    DateSelect,
  },
};
</script>
<style scoped>
#LoginCon {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
#login {
  width: 100%;
  height: 100vh;
}
#logo {
  text-align: center;
  margin-top: 14px;
}
#logo img {
  width: 40px;
  height: 40px;
}
#login p {
  text-align: center;
}

#login #title {
  font-size: 24px;
  font-family: "宋体";
  font-weight: 700;
  color: #191919;
  margin-top: 14px;
}
#titleDown {
  font-size: 14px;
  color: #00000080;
  margin-top: 4px;
}

#loginClass {
  font-size: 14px;
  color: #00000080;
}
#QQ {
  margin-top: 20px;
  margin-bottom: 20px;
}
#QQ img {
  width: 20px;
  height: 20px;
}
#bottom {
  font-size: 14px;
  font-weight: 600;
  color: #007dff;
}
</style>