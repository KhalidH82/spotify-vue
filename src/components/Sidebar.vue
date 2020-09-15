<template>
  <div class="sidebar">
    <img
      class="sidebar_logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt
    />
    <SidebarOptions title="Home" />
    <SidebarOptions title="Search" />
    <SidebarOptions title="Your Library" />
  </div>
</template>

<script>
import SidebarOptions from "./SidebarOptions";
export default {
  components: {
    SidebarOptions,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  flex: 0.2;
  background-color: #040404;
  color: white;
  height: 100vh;
  min-width: 230px;
  padding: 0px 10px 0px 10px;
}

.sidebar_logo {
  height: 70px;
  padding: 10px;
  margin-right: auto;
}
</style>