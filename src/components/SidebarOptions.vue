<template>
  <div class="sidebar_option" v-if="Icon">
    <font-awesome-icon class="sidebar_icon" :icon="Icon" />
    <h4 class="sidebar_title">{{title}}</h4>
  </div>
  <div class="sidebar_option" v-else>
    <ul class="sidebar_playlist">
      <li
        class="sidebar_option sidebar_playlist_title"
        v-for="playlist in playLists.items"
        v-bind:key="playlist.name"
      >{{ playlist.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["title", "Icon"],

  computed: { ...mapState(["playLists"]) },
};
</script>

<style lang="scss" scoped>
.sidebar_option {
  display: flex;
  align-items: center;
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
  padding-left: 15px;
}
.sidebar_option:hover {
  color: white;
}

.sidebar_playlist {
  margin-top: 25px;
}

.sidebar_playlist_title {
  margin-left: -30px;
  padding-top: 5px;
}
.sidebar_icon {
  font-size: 1em;
  padding: 0px 15px 0px 15px;
}
</style>