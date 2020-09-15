<template>
  <div class="sidebar_option">{{title}}</div>
</template>

<script>
export default {
  props: ["title", "Icon"],
};
</script>

<style lang="scss" scoped>
.sidebar_option {
  color: grey;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;
}
.sidebar_option:hover {
  color: white;
}
</style>