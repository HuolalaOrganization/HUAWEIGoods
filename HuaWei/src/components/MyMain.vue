<template>
  <div id="mymain">
    <!-- 我的头部 -->
    <div id="header">
      <div id="title" v-show="false">
        <img />
        <span>登录/注册</span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div id="login">
        <img id="headPortrait" />
        <div>
          <p id="clickLogin">登录/注册</p>
          <p><span class="enjoyment">签到领积分</span></p>
        </div>
      </div>
    </div>
    <!-- 小列表积分,优惠卷,代金卷 -->
    <div id="xiaoList">
      <div>
        <p>{{ scorecardNum }}</p>
        <p>积分</p>
      </div>
      |
      <div>
        <p>{{ couponsNum }}</p>
        <p>优惠卷</p>
      </div>
      |
      <div>
        <p>{{ voucherNum }}</p>
        <p>代金卷</p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div id="myOrder">
      <p id="title1">
        <span id="my">我的订单</span>
        <span id="add">全部订单&gt;</span>
      </p>
      <ul id="orderClassify">
        <li>
          <p>
            <span class="iconfont icon-daifukuan"></span>
          </p>
          <p>待付款</p>
        </li>
        <li>
          <p>
            <span class="iconfont icon-daishouhuo"></span>
          </p>
          <p>待收货</p>
        </li>
        <li>
          <p>
            <span class="iconfont icon-daipingjia"></span>
          </p>
          <p>待评价</p>
        </li>
        <li>
          <p>
            <span class="iconfont icon-youhuima"></span>
          </p>
          <p>退换/退款</p>
        </li>
        <li>
          <p>
            <span class="iconfont icon-huan"></span>
          </p>
          <p>回收单</p>
        </li>
      </ul>
      <!-- 小轮播图(插件) -->
      <div id="lunImg">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img
              v-lazy="image"
              style="width: 100%; height: 90px; display: block"
            />
          </van-swipe-item>
          <van-swipe-item>
            <img
              v-lazy="image"
              style="width: 100%; height: 90px; display: block"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 会员专享 -->
    <div id="vip">
      <p id="vipTitle">
        <span id="my">会员专享</span>
        <span id="add">更多会员权益&gt;</span>
      </p>
      <div id="vipImg">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <!-- 我的VMALL -->
    <div id="vmall">
      <p id="vmallTitle">我的VMALL</p>
      <ul>
        <li>
          <span class="iconfont icon-huiyuan"></span>
          <p>会员频道</p>
        </li>
        <li>
          <span class="iconfont icon-yaoqing"></span>
          <p>邀请有礼</p>
        </li>
        <li>
          <span class="iconfont icon-jiaoyu"></span>
          <p>教育优惠</p>
        </li>
        <li>
          <span class="iconfont icon-icon-test"></span>
          <p>优购码</p>
        </li>
      </ul>
      <ul>
        <li>
          <span class="iconfont icon-tuan"></span>
          <p>我的拼团</p>
        </li>
        <li>
          <span class="iconfont icon-weibiaoti2fuzhi08"></span>
          <p>收货地址</p>
        </li>
        <li>
          <span class="iconfont icon-yuyuejilu"></span>
          <p>预约记录</p>
        </li>
        <li>
          <span class="iconfont icon-qiye"></span>
          <p>企业购</p>
        </li>
      </ul>
    </div>
    <!-- 我的服务 -->
    <div id="serve">
      <p id="serveTitle">
        <span>我的服务</span>
        <span>联系客服&gt;</span>
      </p>
      <ul>
        <li>
          <span class="iconfont icon-fuwu"></span>
          <p>自助服务</p>
        </li>
        <li>
          <span class="iconfont icon-tesefuwu"></span>
          <p>特色服务</p>
        </li>
        <li>
          <span class="iconfont icon-dianpu1"></span>
          <p>零售店</p>
        </li>
        <li>
          <span class="iconfont icon-shimingrenzheng"></span>
          <p>实名认证</p>
        </li>
      </ul>
      <ul>
        <li>
          <span class="iconfont icon-huan"></span>
          <p>以旧换新</p>
        </li>
        <li>
          <span class="iconfont icon-baozhang"></span>
          <p>补够保障</p>
        </li>
        <li>
          <span class="iconfont icon-dianchi"></span>
          <p>一口价电 池</p>
        </li>
        <li>
          <span class="iconfont icon-question"></span>
          <p>常见问题</p>
        </li>
      </ul>
    </div>
    <!-- 图片列表 -->
    <ul id="imgList">
      <li v-for="(img, index) in imageList" :key="index">
        <img v-lazy="img" />
        <p>价格</p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
// 注册时可以配置额外的选项
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
  name: "MyMain",
  data: function () {
    return {
      scorecardNum: "-",
      couponsNum: "-",
      voucherNum: "-",
      image: "https://img.yzcdn.cn/vant/apple-1.jpg",
      imageList: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style scoped>
@import url("../assets/font/iconfont.css");
#mymain {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(221, 221, 221);
}
#header {
  color: aliceblue;
  width: 100%;
  height: 190px;
  border-radius: 0 0 20px 20px;
  position: relative;
  background-image: linear-gradient(
      180deg,
      rgba(255, 0, 103, 0.1) 100%,
      rgba(255, 59, 48, 0.1) 0%
    ),
    linear-gradient(rgba(202, 20, 29, 0.4), rgba(202, 20, 29, 0.4)),
    linear-gradient(143deg, #ff7346 0%, #e41f2b 100%);
}
#title {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 19px;
  background-image: linear-gradient(
      180deg,
      rgba(255, 59, 48, 0.1) 0%,
      rgba(255, 0, 103, 0.1) 100%
    ),
    linear-gradient(rgba(202, 20, 29, 0.4), rgba(202, 20, 29, 0.4)),
    linear-gradient(143deg, #e41f2b 0%, #ff7346 100%);
}
#title img {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: 10px;
}
#login {
  display: flex;
  align-items: center;
  position: absolute;
  left: 20px;
  top: 42px;
}
#headPortrait {
  width: 69px;
  height: 69px;
  border-radius: 50%;
  background-color: #fff;
}
#login div {
  margin-left: 10px;
}
#login div #clickLogin {
  font-size: 24px;
  height: 26px;
  line-height: 26px;
}
#login div p .enjoyment {
  display: inline-block;
  width: 90px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 10px;
  background-color: #e41f2b;
  text-align: center;
}
#xiaoList {
  width: 394px;
  height: 78px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 160px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgb(196, 196, 196);
  padding: 0px 20px;
  box-sizing: border-box;
}
#xiaoList div p {
  text-align: center;
  font-size: 12px;
  color: rgb(83, 83, 83);
}
#myOrder {
  width: 394px;
  height: 226px;
  margin: 0 auto;
  margin-top: 60px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0px 11px;
  background-color: #11aadd;
}
#myOrder #title1 {
  display: flex;
  justify-content: space-between;
  height: 46px;
  line-height: 46px;
}
#myOrder #title1 #my {
  font-size: 16px;
}
#myOrder #title1 #add {
  font-size: 14px;
  color: #525252;
}
#myOrder #lunImg {
  width: 98%;
  margin: 5px auto;
  height: 90px;
  overflow: hidden;
  border-radius: 10px;
}

#orderClassify {
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-evenly;
}
#orderClassify li {
  width: 18%;
  height: 100%;
  background-color: #fff;
}
#orderClassify p {
  display: block;
  text-align: center;
  width: 100%;
  font-size: 12px;
  color: #525252;
  margin-top: 10px;
}

#orderClassify p .iconfont {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 30px;
  color: rgb(196, 196, 196);
}
#vip {
  width: 394px;
  height: 177px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0px 10px;
  background-color: #fff;
}
#vipTitle {
  display: flex;
  justify-content: space-between;
  height: 46px;
  line-height: 46px;
}
#vipImg {
  margin-top: 10px;
  width: 100%;
  height: 104px;
  overflow: auto;
}
#vipImg ul {
  height: 100%;
  display: flex;
}
#vipImg ul li {
  width: 177px;
  height: 100%;
  border: 1px solid darkgray;
  flex-shrink: 0;
  margin: 0 10px;
}
#vmall {
  width: 394px;
  height: 248px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
#vmallTitle {
  height: 46px;
  line-height: 46px;
}
#serve {
  width: 394px;
  height: 248px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
}
#serveTitle {
  display: flex;
  justify-content: space-between;
  height: 46px;
  line-height: 46px;
}
#serveTitle span:nth-of-type(1) {
  font-size: 16px;
}
#serveTitle span:nth-of-type(2) {
  font-size: 14px;
  color: #525252;
}
#vmall ul,
#serve ul {
  width: 100%;
  height: 82px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
}
#vmall ul li,
#serve ul li {
  width: 22%;
  height: 100%;
  background-color: #fff;
}
#vmall ul li span,
#serve ul li span {
  display: block;
  width: 100%;
  height: 40%;
  margin-top: 20px;
  font-size: 30px;
  text-align: center;
}
#vmall ul li p,
#serve ul li p {
  width: 100%;
  height: 30%;
  margin-top: 10px;
  text-align: center;
}
#imgList {
  width: 100%;
  background-color: #aaddbb;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
#imgList li {
  width: 50%;
  height: 300px;
  background-color: #11aabb;
  flex-shrink: 0;
}
#imgList li img {
  display: block;
  width: 100%;
  height: 300px;
}
</style>