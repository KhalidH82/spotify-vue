<template>
  <div class="header">
    <div class="header_left">
      <font-awesome-icon class="sidebar_icon" icon="search" />
      <input placeholder="Search for Artists, Songs, or Podcasts..." type="text" />
    </div>
    <div class="header_right">
      <figure class="image is-128x128">
        <img class="is-rounded" src="{user.images[0].url}" />
      </figure>
      <h4>{{user.display_name}}</h4>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["user"]) },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.header_left {
  flex: 0.5;
  min-width: 70px;
  background-color: white;
  color: gray;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 10px;
}

.header_left > input {
  border: none;
  width: 100%;
}

.header_right {
  display: flex;
  align-items: center;
}
.header_right > h4 {
  margin-left: 10px;
}
</style>