<template>
  <div id="content">
    <p id="title">出生日期</p>
    <p id="nextTitle">你的出生日期用于确定您在法律范围内可以使用的服务</p>
    <p id="dateShow">
      <span>出生日期</span>
      <span>{{ year }}年{{ month }}月{{ day }}日</span>
    </p>
    <p id="warn" v-show="isWarn">年龄未满14周岁</p>
    <mt-datetime-picker
      v-model="dateValue"
      type="date"
      cancelText="上一步"
      confirmText="下一步"
      ref="datePicker"
      year-format="{value} "
      month-format="{value} "
      date-format="{value} "
      :startDate="FirstDate"
      :endDate="new Date()"
      @confirm="handleConfirm"
      id="myStyle"
    >
    </mt-datetime-picker>
  </div>
</template>

<script>
export default {
  name: "DateSelect",
  data: function () {
    return {
      dateValue: "",
      FirstDate: "",
      isWarn: false,
      year: 1940,
      month: 1,
      day: 1,
    };
  },
  created() {
    let d = new Date();
    d.setFullYear(1940, 1, 1);
    this.FirstDate = d;
  },
  mounted() {
    this.$refs.datePicker.open();
  },
  updated() {
    let nowDate = new Date();
    console.log(nowDate.getFullYear() - this.dateValue.getFullYear());
    if (nowDate.getFullYear() - this.dateValue.getFullYear() < 14) {
      this.isWarn = true;
    }
    this.year = this.dateValue.getFullYear();
    this.month = this.dateValue.getMonth();
    this.day = this.dateValue.getDate();
  },
  methods: {
    handleConfirm(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
#content {
  width: 366px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  /* background-color: pink; */
}
#content #title {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-top: 50px;
}
#content #nextTitle {
  margin-top: 10px;
}
#dateShow {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}
#warn {
  font-size: 14px;
  color: red;
}
#content #myStyle {
  width: 100%;
  height: 300px;
  background-color: #ffffffff;
}
</style>