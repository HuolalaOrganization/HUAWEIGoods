<template>
  <div id="countryselect">
    <p id="title">🡨国家/地区</p>
    <form action="/">
      <van-search
        v-model="value"
        @input="sousuo"
        :show-action="false"
        placeholder="搜索"
      />
    </form>
    <van-index-bar :sticky="false" id="nationStyle">
      <van-index-anchor index="A" />
      <van-cell
        v-for="(item, index) in nationJson.A"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="B" />
      <van-cell
        v-for="(item, index) in nationJson.B"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="C" />
      <van-cell
        v-for="(item, index) in nationJson.C"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="D" />
      <van-cell
        v-for="(item, index) in nationJson.D"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="E" />
      <van-cell
        v-for="(item, index) in nationJson.E"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="F" />
      <van-cell
        v-for="(item, index) in nationJson.F"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="G" />
      <van-cell
        v-for="(item, index) in nationJson.G"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="H" />
      <van-cell
        v-for="(item, index) in nationJson.H"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="I" />
      <van-cell
        v-for="(item, index) in nationJson.I"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="J" />
      <van-cell
        v-for="(item, index) in nationJson.J"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="K" />
      <van-cell
        v-for="(item, index) in nationJson.K"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="L" />
      <van-cell
        v-for="(item, index) in nationJson.L"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="M" />
      <van-cell
        v-for="(item, index) in nationJson.M"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="N" />
      <van-cell
        v-for="(item, index) in nationJson.N"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="O" />
      <van-cell
        v-for="(item, index) in nationJson.O"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="P" />
      <van-cell
        v-for="(item, index) in nationJson.P"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="Q" />
      <van-cell
        v-for="(item, index) in nationJson.Q"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="R" />
      <van-cell
        v-for="(item, index) in nationJson.R"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="S" />
      <van-cell
        v-for="(item, index) in nationJson.S"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="T" />
      <van-cell
        v-for="(item, index) in nationJson.T"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="U" />
      <van-cell
        v-for="(item, index) in nationJson.U"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="V" />
      <van-cell
        v-for="(item, index) in nationJson.V"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="W" />
      <van-cell
        v-for="(item, index) in nationJson.W"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="X" />
      <van-cell
        v-for="(item, index) in nationJson.X"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="Y" />
      <van-cell
        v-for="(item, index) in nationJson.Y"
        :key="index"
        :title="item.nation"
      />
      <van-index-anchor index="Z" />
      <van-cell
        v-for="(item, index) in nationJson.Z"
        :key="index"
        :title="item.nation"
      />
    </van-index-bar>
  </div>
</template>

<script>
import Vue from "vue";
import { IndexBar, IndexAnchor, Cell, Search } from "vant";

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
Vue.use(Search);

export default {
  name: "CountrySelect",
  data: function () {
    return {
      value: "",
      sticky: false,
      none: "",
      nationJson: {
        A: [
          {
            nation: "阿尔巴尼亚",
            areaCode: 355,
          },
          {
            nation: "阿尔及利亚",
            areaCode: 213,
          },
          {
            nation: "阿富汗",
            areaCode: 93,
          },
          {
            nation: "阿根廷",
            areaCode: 54,
          },
          {
            nation: "阿拉伯联合酋长国",
            areaCode: 971,
          },
          {
            nation: "阿拉伯也门共和国",
            areaCode: 967,
          },
          {
            nation: "阿拉斯加",
            areaCode: 1907,
          },
          {
            nation: "阿林松",
            areaCode: 247,
          },
          {
            nation: "阿鲁巴岛",
            areaCode: 297,
          },
          {
            nation: "阿曼",
            areaCode: 968,
          },
          {
            nation: "阿塞拜疆",
            areaCode: 994,
          },
          {
            nation: "埃及",
            areaCode: 20,
          },
          {
            nation: "埃塞俄比亚",
            areaCode: 251,
          },
          {
            nation: "爱尔兰",
            areaCode: 353,
          },
          {
            nation: "爱沙尼亚",
            areaCode: 372,
          },
          {
            nation: "安道尔",
            areaCode: 376,
          },
          {
            nation: "安哥拉",
            areaCode: 244,
          },
          {
            nation: "安圭拉岛",
            areaCode: 1264,
          },
          {
            nation: "奥地利",
            areaCode: 43,
          },
          {
            nation: "澳大利亚",
            areaCode: 61,
          },
        ],
        B: [
          {
            nation: "巴巴多斯",
            areaCode: 1246,
          },
          {
            nation: "巴布亚新几内亚",
            areaCode: 675,
          },
          {
            nation: "巴哈马",
            areaCode: 1242,
          },
          {
            nation: "巴基斯坦",
            areaCode: 92,
          },
          {
            nation: "巴拉圭",
            areaCode: 595,
          },
          {
            nation: "巴勒斯坦",
            areaCode: 970,
          },
          {
            nation: "巴林",
            areaCode: 973,
          },
          {
            nation: "巴拿马",
            areaCode: 507,
          },
          {
            nation: "巴西",
            areaCode: 55,
          },
          {
            nation: "白俄罗斯",
            areaCode: 375,
          },
          {
            nation: "百慕大",
            areaCode: 1809,
          },
          {
            nation: "保加利亚",
            areaCode: 359,
          },
          {
            nation: "贝宁",
            areaCode: 229,
          },
          {
            nation: "比利时",
            areaCode: 32,
          },
          {
            nation: "冰岛",
            areaCode: 354,
          },
          {
            nation: "波多黎哥",
            areaCode: 1787,
          },
          {
            nation: "波黑",
            areaCode: 387,
          },
          {
            nation: "波兰",
            areaCode: 48,
          },
          {
            nation: "玻利维亚",
            areaCode: 591,
          },
          {
            nation: "伯利兹",
            areaCode: 501,
          },
          {
            nation: "博斯瓦纳",
            areaCode: 267,
          },
          {
            nation: "不丹",
            areaCode: 975,
          },
          {
            nation: "布隆迪",
            areaCode: 257,
          },
        ],
        C: [
          {
            nation: "朝鲜",
            areaCode: 850,
          },
        ],
        D: [
          {
            nation: "丹麦",
            areaCode: 45,
          },
          {
            nation: "德国",
            areaCode: 49,
          },
          {
            nation: "迪戈加西亚岛",
            areaCode: 246,
          },
          {
            nation: "多哥",
            areaCode: 228,
          },
          {
            nation: "多米尼加共和国",
            areaCode: 1809,
          },
        ],
        E: [
          {
            nation: "俄罗斯",
            areaCode: 7,
          },
          {
            nation: "厄瓜多尔",
            areaCode: 593,
          },
          {
            nation: "厄立特里亚",
            areaCode: 291,
          },
        ],
        F: [
          {
            nation: "法国",
            areaCode: 33,
          },
          {
            nation: "法罗群岛",
            areaCode: 298,
          },
          {
            nation: "法属波里尼西亚",
            areaCode: 689,
          },
          {
            nation: "法属圭亚那",
            areaCode: 594,
          },
          {
            nation: "梵蒂冈",
            areaCode: 3906698,
          },
          {
            nation: "菲律宾",
            areaCode: 63,
          },
          {
            nation: "斐济",
            areaCode: 679,
          },
          {
            nation: "芬兰",
            areaCode: 358,
          },
        ],
        G: [
          {
            nation: "刚果",
            areaCode: 242,
          },
          {
            nation: "哥伦比亚",
            areaCode: 57,
          },
          {
            nation: "哥斯达黎加",
            areaCode: 506,
          },
          {
            nation: "格林纳达",
            areaCode: 1473,
          },
          {
            nation: "格陵兰岛",
            areaCode: 299,
          },
          {
            nation: "古巴",
            areaCode: 53,
          },
          {
            nation: "瓜得罗普岛",
            areaCode: 590,
          },
          {
            nation: "关岛",
            areaCode: 1671,
          },
          {
            nation: "圭亚那",
            areaCode: 592,
          },
        ],
        H: [
          {
            nation: "哈萨克斯坦",
            areaCode: 7,
          },
          {
            nation: "海地",
            areaCode: 509,
          },
          {
            nation: "韩国",
            areaCode: 82,
          },
          {
            nation: "荷兰",
            areaCode: 31,
          },
          {
            nation: "洪都拉斯",
            areaCode: 504,
          },
        ],
        J: [
          {
            nation: "吉尔吉斯斯坦",
            areaCode: 996,
          },
          {
            nation: "几内亚",
            areaCode: 224,
          },
          {
            nation: "加拿大",
            areaCode: 1,
          },
          {
            nation: "加纳",
            areaCode: 233,
          },
          {
            nation: "加蓬",
            areaCode: 241,
          },
          {
            nation: "柬埔寨",
            areaCode: 855,
          },
          {
            nation: "捷克",
            areaCode: 420,
          },
          {
            nation: "津巴布韦",
            areaCode: 263,
          },
        ],
        K: [
          {
            nation: "喀麦隆",
            areaCode: 237,
          },
          {
            nation: "卡塔尔",
            areaCode: 974,
          },
          {
            nation: "开曼群岛",
            areaCode: 1809,
          },
          {
            nation: "科克群岛",
            areaCode: 682,
          },
          {
            nation: "科摩罗",
            areaCode: 269,
          },
          {
            nation: "科威特",
            areaCode: 965,
          },
          {
            nation: "克罗地亚",
            areaCode: 385,
          },
          {
            nation: "肯尼亚",
            areaCode: 254,
          },
        ],
        L: [
          {
            nation: "拉脱维亚",
            areaCode: 371,
          },
          {
            nation: "老挝",
            areaCode: 856,
          },
          {
            nation: "黎巴嫩",
            areaCode: 961,
          },
          {
            nation: "立陶宛",
            areaCode: 370,
          },
          {
            nation: "利比里亚",
            areaCode: 231,
          },
          {
            nation: "利比亚",
            areaCode: 218,
          },
          {
            nation: "列支敦士登",
            areaCode: 423,
          },
          {
            nation: "留尼汪岛",
            areaCode: 262,
          },
          {
            nation: "卢森堡",
            areaCode: 352,
          },
          {
            nation: "卢旺达",
            areaCode: 250,
          },
          {
            nation: "罗马尼亚",
            areaCode: 40,
          },
        ],
        M: [
          {
            nation: "马达加斯加",
            areaCode: 261,
          },
          {
            nation: "马尔代夫群岛",
            areaCode: 960,
          },
          {
            nation: "马尔维纳斯群岛",
            areaCode: 500,
          },
          {
            nation: "马耳他",
            areaCode: 356,
          },
          {
            nation: "马拉维",
            areaCode: 265,
          },
          {
            nation: "马来西亚",
            areaCode: 60,
          },
          {
            nation: "马里",
            areaCode: 223,
          },
          {
            nation: "马里亚那群岛",
            areaCode: 670,
          },
          {
            nation: "马其顿",
            areaCode: 389,
          },
          {
            nation: "马绍尔群岛",
            areaCode: 692,
          },
          {
            nation: "毛里求斯",
            areaCode: 230,
          },
          {
            nation: "美国",
            areaCode: 1,
          },
          {
            nation: "蒙古",
            areaCode: 976,
          },
          {
            nation: "孟加拉",
            areaCode: 880,
          },
          {
            nation: "秘鲁",
            areaCode: 51,
          },
          {
            nation: "密克罗尼西亚",
            areaCode: 691,
          },
          {
            nation: "缅甸",
            areaCode: 95,
          },
          {
            nation: "摩尔多瓦",
            areaCode: 373,
          },
          {
            nation: "摩洛哥",
            areaCode: 212,
          },
          {
            nation: "摩纳哥",
            areaCode: 377,
          },
          {
            nation: "莫桑比克",
            areaCode: 258,
          },
          {
            nation: "墨西哥",
            areaCode: 52,
          },
        ],
        N: [
          {
            nation: "纳米比亚",
            areaCode: 264,
          },
          {
            nation: "南非",
            areaCode: 27,
          },
          {
            nation: "南极",
            areaCode: 64672,
          },
          {
            nation: "南斯拉夫",
            areaCode: 381,
          },
          {
            nation: "尼泊尔",
            areaCode: 977,
          },
          {
            nation: "尼加拉瓜",
            areaCode: 505,
          },
          {
            nation: "尼日尔",
            areaCode: 227,
          },
          {
            nation: "尼日利亚",
            areaCode: 234,
          },
          {
            nation: "纽埃岛",
            areaCode: 683,
          },
          {
            nation: "挪威",
            areaCode: 47,
          },
          {
            nation: "诺福克岛",
            areaCode: 672,
          },
          {
            nation: "帕劳",
            areaCode: 680,
          },
        ],
        P: [
          {
            nation: "葡萄牙",
            areaCode: 351,
          },
        ],
        R: [
          {
            nation: "日本",
            areaCode: 81,
          },
          {
            nation: "瑞典",
            areaCode: 46,
          },
          {
            nation: "瑞士",
            areaCode: 41,
          },
        ],
        S: [
          {
            nation: "萨尔瓦多",
            areaCode: 503,
          },
          {
            nation: "塞拉利昂",
            areaCode: 232,
          },
          {
            nation: "塞内加尔",
            areaCode: 221,
          },
          {
            nation: "塞浦路斯",
            areaCode: 357,
          },
          {
            nation: "沙特阿拉伯",
            areaCode: 966,
          },
          {
            nation: "圣诞岛",
            areaCode: 619164,
          },
          {
            nation: "圣卢西亚",
            areaCode: 1758,
          },
          {
            nation: "圣马力诺",
            areaCode: 378,
          },
          {
            nation: "圣文森特岛",
            areaCode: 1784,
          },
          {
            nation: "斯里兰卡",
            areaCode: 94,
          },
          {
            nation: "斯洛伐克",
            areaCode: 421,
          },
          {
            nation: "斯洛文尼亚",
            areaCode: 386,
          },
          {
            nation: "苏丹",
            areaCode: 249,
          },
          {
            nation: "苏里南",
            areaCode: 597,
          },
          {
            nation: "所罗门群岛",
            areaCode: 677,
          },
          {
            nation: "索马里",
            areaCode: 252,
          },
        ],
        T: [
          {
            nation: "塔吉克斯坦",
            areaCode: 992,
          },
          {
            nation: "泰国",
            areaCode: 66,
          },
          {
            nation: "坦桑尼亚",
            areaCode: 255,
          },
          {
            nation: "突尼斯",
            areaCode: 216,
          },
          {
            nation: "图瓦卢",
            areaCode: 688,
          },
          {
            nation: "土耳其",
            areaCode: 90,
          },
          {
            nation: "土库曼斯坦",
            areaCode: 993,
          },
        ],
        W: [
          {
            nation: "危地马拉",
            areaCode: 502,
          },
          {
            nation: "委内瑞拉",
            areaCode: 58,
          },
          {
            nation: "汶莱",
            areaCode: 673,
          },
          {
            nation: "乌干达",
            areaCode: 256,
          },
          {
            nation: "乌克兰",
            areaCode: 380,
          },
          {
            nation: "乌拉圭",
            areaCode: 598,
          },
        ],
        X: [
          {
            nation: "西班牙",
            areaCode: 34,
          },
          {
            nation: "希腊",
            areaCode: 30,
          },
          {
            nation: "新加坡",
            areaCode: 65,
          },
          {
            nation: "新西兰",
            areaCode: 64,
          },
          {
            nation: "匈牙利",
            areaCode: 36,
          },
          {
            nation: "叙利亚",
            areaCode: 963,
          },
        ],
        Y: [
          {
            nation: "牙买加",
            areaCode: 1876,
          },
          {
            nation: "亚美尼亚",
            areaCode: 374,
          },
          {
            nation: "也门民主人民共和国",
            areaCode: 969,
          },
          {
            nation: "伊拉克",
            areaCode: 964,
          },
          {
            nation: "伊朗",
            areaCode: 98,
          },
          {
            nation: "以色列",
            areaCode: 972,
          },
          {
            nation: "意大利",
            areaCode: 39,
          },
          {
            nation: "印度",
            areaCode: 91,
          },
          {
            nation: "印度尼西亚",
            areaCode: 62,
          },
          {
            nation: "英国",
            areaCode: 44,
          },
          {
            nation: "约旦",
            areaCode: 962,
          },
          {
            nation: "越南",
            areaCode: 84,
          },
        ],
        Z: [
          {
            nation: "赞比亚",
            areaCode: 260,
          },
          {
            nation: "扎伊尔",
            areaCode: 243,
          },
          {
            nation: "乍得",
            areaCode: 235,
          },
          {
            nation: "直布罗陀",
            areaCode: 350,
          },
          {
            nation: "智利",
            areaCode: 56,
          },
          {
            nation: "中非",
            areaCode: 236,
          },
          {
            nation: "中国",
            areaCode: 86,
          },
          {
            nation: "中途岛",
            areaCode: 1808,
          },
        ],
      },
    };
  },
  methods: {
    sousuo() {
      console.log(this.value);
    },
    fun() {
      console.log(111);
    },
  },
};
</script>

<style scoped>
#countryselect {
  width: 100%;
  height: 100vh;
  overflow: auto;
}
#title {
  box-sizing: border-box;
  font-size: 18px;
  height: 80px;
  line-height: 80px;
  padding: 8px 24px;
}
#countryselect #nationStyle {
  width: 100%;
}
#countryselect #nationStyle:only-child {
  width: 100%;
}
</style>