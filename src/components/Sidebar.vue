<template>
  <div class="sidebar">
    <img
      class="sidebar_logo"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt
    />
    <SidebarOptions Icon="home" title="Home" />
    <SidebarOptions Icon="search" title="Search" />
    <SidebarOptions Icon="book-open" title="Your Library" />
    <br />
    <strong class="sidebar_title">PLAYLISTS</strong>
    <hr />
    <SidebarOptions title="Hip Hop" />
    <SidebarOptions title="Rock" />
    <SidebarOptions title="RnB" />
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

.sidebar_title {
  margin-left: 15px;
  font-size: 12px;
  padding: 15px;
}

.sidebar > hr {
  border: 1px solid #282828;
  width: 80%;
  margin: 10px auto;
}
</style>