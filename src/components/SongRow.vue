<template>
  <div class="song_row">
    <div v-for="song in recent_playlists.tracks.items" v-bind:key="song.id">
      <div class="song_rowInfo">
        <!-- <img
          class="songRow__album"
          v-for="s in recent_playlists.tracks.items.track.album.images"
          v-bind:key="s.url"
          :src="s.url"
          alt
        />-->
        <h1>{{ song.track.name }}</h1>

        <p v-for="x in song.track.artists" v-bind:key="x.id">{{ x.name }}</p>
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
.song_row {
  margin-left: 20px;
  padding: 20px;
  /* display: flex;
  align-items: center; */
  z-index: 100;
  color: white;
}
.song_row:hover {
  cursor: pointer;
  background-color: black;
  opacity: 0.8;
}
.song_rowInfo {
  margin-left: 20px;
}
.song_rowInfo > h1 {
  font-size: 16px;
}
.song_rowInfo > p {
  font-size: 14px;
  margin-top: 3px;
  color: gray;
}
.songRow__album {
  height: 40px;
  width: 40px;
}
</style>