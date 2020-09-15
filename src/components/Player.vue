<template>
  <div class="player">
    <div class="player_body">
      <Sidebar />
      <Body />
    </div>
    <Footer />
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
export default {
  components: {
    Sidebar,
    Body,
    Footer,
  },
  props: ["spotify"],
};
</script>

<style lang="scss" scoped>
.player_body {
  display: flex;
}
</style>