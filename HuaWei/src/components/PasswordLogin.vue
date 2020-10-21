<template>
  <div id="content">
    <p class="phone" :class="{ bottomLine: phoneIsLine }">
      <input
        type="text"
        v-model.number="phoneCode"
        @focus="phoneInput"
        placeholder="手机号/邮箱地址/华为号"
      />
    </p>
    <p
      id="phoneCodeErrorTitle"
      v-show="isError"
      :class="{ errorBottomLine: isError }"
    >
      手机号码错误，请重新输入
    </p>
    <p class="verify" :class="{ bottomLine: verifyIsLine1 }">
      <input
        type="text"
        v-model="verifyCode"
        @focus="verifyInput"
        placeholder="密码"
      />
      <span></span>
    </p>
    <p id="chageTitle">
      <span @click="phoneLogin">短信验证码登录</span>
      <span>忘记密码</span>
    </p>
    <p id="phoneLogin" :class="{ clickLogin: isLogin }">登录</p>
    <p id="register" @click="register">注册账号</p>
  </div>
</template>

<script>
export default {
  neme: "phoneLogin",
  data: function () {
    return {
      phoneCode: "",
      verifyCode: "",
      isError: false,
      phoneIsLine: false,
      verifyIsLine1: false,
      isLogin: true,
    };
  },
  methods: {
    phoneLogin() {
      this.$router.push("../components/PhoneLogin");
    },
    register() {
      this.$parent.$data.isLogin = false;
      // this.$router.push("../components/Statement");
    },
    phoneInput() {
      this.verifyIsLine1 = false;
      this.phoneIsLine = true;
      this.isError = false;
      this.idGet = false;
    },
    verifyInput() {
      this.verifyIsLine1 = true;
      this.phoneIsLine = false;
    },
  },
};
</script>

<style scoped>
#content {
  width: 366px;
  height: 410px;
  /* background-color: rgb(241, 100, 100); */
  margin: 0 auto;
  margin-top: 40px;
}
#content p {
  margin-top: 20px;
}
#content #region span:nth-of-type(1) {
  color: #191919;
  font-size: 16px;
}
#content #region span:nth-of-type(2) {
  font-size: 14px;
  color: #00000080;
}
#content p input {
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border: none;
  height: 35px;
  box-sizing: border-box;
  font-size: 16px;
}
.phone {
  border-bottom: 1px solid rgb(226, 226, 226);
}
.verify {
  display: flex;
  border-bottom: 1px solid rgb(226, 226, 226);
}
#content .verify input {
  width: 288px;
  height: 35px;
}
#content .verify span {
  display: block;
  flex: 1;
  line-height: 36px;
  font-size: 16px;
  font-weight: 700;
  color: #007dff;
}
#content #chageTitle {
  display: flex;
  color: #007dff;
  justify-content: space-between;
  font-weight: 700;
}
#content #phoneLogin {
  width: 100%;
  height: 36px;
  border-radius: 36px;
  background-color: #007dff;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  color: aliceblue;
  margin-top: 40px;
  text-align: center;
}
#register {
  width: 100%;
  height: 36px;
  border-radius: 36px;
  color: #007dff;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  background-color: aliceblue;
  margin-top: 40px;
  text-align: center;
}
.bottomLine {
  border-bottom: 1px solid rgb(0, 0, 0);
}
.errorBottomLine {
  border-top: 1px solid red;
}
#content #phoneCodeErrorTitle {
  height: 15px;
  font-size: 12px;
  font-weight: 400;
  color: red;
  margin: 0;
  text-align: left;
}
.getCode {
  opacity: 0.4;
}
.clickLogin {
  opacity: 0.4;
}
</style>