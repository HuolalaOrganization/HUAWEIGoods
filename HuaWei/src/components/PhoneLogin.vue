<template>
  <div id="content">
    <p id="region">
      <span>国家/地区</span>
      <span>{{ nation }} {{ areaCode }} &gt;</span>
    </p>
    <p class="phone" :class="{ bottomLine: phoneIsLine }">
      <input
        type="text"
        v-model.number="phoneCode"
        @focus="phoneInput"
        @blur="phoneInputOk"
        placeholder="手机号"
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
        placeholder="短信验证码"
      />
      <span :class="{ getCode: idGet }">获取验证码</span>
    </p>
    <p id="phoneLogin" :class="{ clickLogin: isLogin }">登录/注册</p>
    <p id="passwordLogin" @click="passwordLogin">密码登录</p>
  </div>
</template>

<script>
export default {
  neme: "phoneLogin",
  data: function () {
    return {
      nation: "中国",
      areaCode: "+86",
      phoneCode: "",
      verifyCode: "",
      isError: false,
      phoneIsLine: false,
      verifyIsLine1: false,
      idGet: true,
      isLogin: true,
    };
  },
  methods: {
    passwordLogin() {
      this.$router.push("../components/PasswordLogin");
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
    phoneInputOk() {
      if (!/^1[3-9]\d{9}$/.test(this.phoneCode) && this.phoneCode != "") {
        this.isError = true;
        this.idGet = true;
      } else {
        this.isError = false;
      }
    },
  },
  updated() {
    console.log(typeof this.phoneCode);
    if (typeof this.phoneCode == "string") {
      this.phoneCode = "";
    }
    if (this.phoneCode != "" && this.verifyCode != "") {
      this.isLogin = false;
    }
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
#content #region {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 268px;
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
#passwordLogin {
  font-size: 14px;
  color: #007dff;
  margin-top: 16px;
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