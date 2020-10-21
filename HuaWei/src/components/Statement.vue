<template>
  <div id="statement">
    <div id="content">
      <p id="title">华为账号与云空间通知</p>
      <div id="region">
        <p id="regionCon">
          <span>国家/地区</span>
          <span>{{ nation }} &gt;</span>
        </p>

        <p>正在注册{{ nation }}华为账号</p>
      </div>
      <p>
        “华为帐号”与“云空间”是由华为软件技术有限公司（以下称“我们”或“华为”）为您提供的华为终端云业务的基础服务。请在使用本服务前仔细阅读以下内容：
      </p>
      <p class="text">
        在华为手机上使用华为帐号登录后，将启用云空间，查找我的手机和会员中心等服务，华为帐号也将作为华为终端类业务的通行凭证为华为应用市场、华为视频、华为音乐等业务及华为其他终端类设备及相关合作伙伴提供的一致的用户体验和认证安全。
      </p>
      <p class="text">
        <i>.</i>
        “云空间”为您提供实时同步和备份功能，可以安全存储您的照片、联系人、日历、备忘录、浏览器书签等数据，并且在您的各个设备上保持同步，以保护您的个人数据，防止意外丢失。
      </p>
      <p class="text">
        <i>.</i>
        国家要求的实名认证信息（包括
        <span>身份证、银行卡信息</span>
        ）可能会提供给国家机关、企业事业单位进行核对以确保安全。我们同时构建了健全的风险控制系统，收集上述信息以保障华为、您或其他华为客户的权利，防止欺诈等违法活动并减少信用风险。
      </p>
      <p>
        <i>.</i>
        设备会关联您的华为帐号以为您提供更好的服务与支持。
      </p>
      <p>上述数据将会传输并保存至中华人民共和国境内的服务器。</p>
      <p class="is">
        如果您不同意我们采集上述信息，我们可能无法为您提供完整的服务，您可以退出或注销华为帐号以终止以上数据或功能的收集与处理。
      </p>
      <p>
        点击
        <span>“同意”</span>
        ，即表示您同意上述内容及
        <a
          href="https://id1.cloud.huawei.com/AMW/portal/agreements/userAgreement/zh-cn_userAgreement.html?version=china&amp;reqClientType=26"
          >华为帐号与云空间用户协议</a
        >
      </p>
    </div>
    <div id="bottom">
      <div id="bottomCon">
        <van-checkbox v-model="checked" shape="square" id="change"
          >随时了解产品、服务、优惠活动的最新信息。信息会以邮件、短信、彩信或通知等形式发送。</van-checkbox
        >
        <div id="consent">
          <p>取消</p>
          <p>同意</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
  name: "Statement",
  data: function () {
    return {
      nation: "中国",
      areaCode: 86,
      checked: true,
    };
  },
};
</script>

<style scoped>
#statement {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#content {
  width: 366px;
  flex: 1;
  /* background-color: rgb(241, 100, 100); */
  margin: 0 auto;
  margin-top: 40px;
  overflow: auto;
}
#content #title {
  font-size: 24px;
  text-align: center;
  font-weight: 600;
}
#content #region {
  border-bottom: 1px solid grey;
  margin-top: 60px;
  margin-bottom: 20px;
}
#content #regionCon {
  height: 40px;
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  align-items: center;
}
#content #regionCon span:nth-of-type(1) {
  color: #191919;
  font-weight: 600;
}
#content #region p:nth-of-type(2) {
  font-size: 12px;
  height: 20px;
  margin-top: -10px;
}
#content p {
  color: #191919;
  font-family: "Regular", "Droid";
}
#content .text {
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
}
#content i {
  margin-left: -10px;
}
#content .is {
  margin-top: 10px;
  margin-bottom: 10px;
}
#content a {
  color: #007dff;
}
#bottom {
  width: 100%;
  height: 116px;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 10px;
  box-shadow: 1px 1px 10px gray;
}
#bottomCon {
  width: 366px;
  margin: 0 auto;
}
#bottomCon #change {
  font-size: 14px;
}
#consent {
  display: flex;
  justify-content: space-around;
  font-size: 10px;
  margin-top: 10px;
}
#consent p {
  width: 47%;
  height: 36px;
  background-color: #007dff;
  border-radius: 36px;
  text-align: center;
  line-height: 36px;
  font-size: 16px;
}
#consent p:nth-of-type(1) {
  background-color: #0000000d;
  color: #007dff;
}
#consent p:nth-of-type(2) {
  color: #ffffff;
  background-color: #007dff;
}
</style>