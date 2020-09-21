<template>
  <div class="footer">
    <div class="footer_left">
      <p>Album and song details</p>
    </div>
    <div class="footer_center">
      <p>Player Controls</p>
      <font-awesome-icon class="sidebar_icon" icon="random" />
      <font-awesome-icon class="sidebar_icon" icon="arrow-alt-circle-left" />
      <font-awesome-icon class="sidebar_icon play" icon="play-circle" />
      <font-awesome-icon class="sidebar_icon" icon="arrow-alt-circle-right" />
      <font-awesome-icon class="sidebar_icon" icon="redo" />
    </div>
    <div class="footer_right">
      <p>Volumn Controls</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  height: 65px;
  width: 97%;
  background-color: #282828;
  padding: 20px;
}
.sidebar_icon {
  font-size: 1.5em;
  padding: 0px 15px 0px 15px;
  &.play {
    font-size: 2.5em;
  }
}

.footer_left {
  flex: 0.3;
}
.footer_center {
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.footer_right {
  flex: 0.3;
}
</style>