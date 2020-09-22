<template>
  <div class="song_row">
    <div v-for="song in recent_playlists.tracks.items" v-bind:key="song.id">
      <img src alt />
      <div class="song_rowInfo">
        <h1 class>{{ song.track.name }}</h1>
        <!-- <div v-for="song in song.artists" v-bind:key="song.name"> -->
        <p>{{song.name}}</p>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: { ...mapState(["recent_playlists"]) },
};
</script>

<style lang="scss" scoped>
</style>