<template>
  <div id="app">
    <Index v-show="false" />
    <Login v-show="true" />
    <CountrySelect v-show="false" />
  </div>
</template>

<script>
import Index from "./pages/index";
import Login from "./pages/Login";
import CountrySelect from "./pages/CountrySelect";

export default {
  name: "App",
  components: {
    Index,
    Login,
    CountrySelect,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
#app {
  width: 100%;
  height: 100vh;
}
</style>
