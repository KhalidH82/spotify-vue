<template>
  <div class="sidebar_option" v-if="Icon">
    <font-awesome-icon class="sidebar_icon" :icon="Icon" />
    <h4 class="sidebar_title">{{title}}</h4>
  </div>
  <div class="sidebar_option" v-else>
    <ul id="v-for-object" class="demo">
      <li v-for="value in playLists.items">{{ value.name }}</li>
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

.sidebar_title {
  padding-left: 15px;
}
.sidebar_icon {
  font-size: 1.5em;
  padding: 0px 15px 0px 15px;
}
</style>