<template>
  <div class="body">
    <Header spotify="{spotify}" />
    <div class="body_info">
      <img src="recent_playlists.images.[0].url" alt />
      <div class="body_infoText">
        <strong>PLAYLIST</strong>
        <h2>Discover Weekly</h2>
        <p>{{recent_playlists.description}}</p>
      </div>
    </div>
    <div class="body_song">
      <div class="body_icon">
        <font-awesome-icon class="body_shuffle play" icon="play-circle" />
        <font-awesome-icon class="body_shuffle" icon="heart" />
        <font-awesome-icon class="body_shuffle" icon="ellipsis-h" />
      </div>
      <Song-Row />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "./Header";
import SongRow from "./SongRow";
export default {
  components: {
    Header,
    SongRow,
  },
  computed: { ...mapState(["recent_playlists"]) },
  props: ["spotify"],
};
</script>

<style lang="scss" scoped>
.body {
  flex: 0.8;
  height: 100vh;
  color: white;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgb(0, 0, 1));
}
.body_info {
  display: flex;
  align-items: flex-end;
  padding: 10px;
}
.body_info > img {
  height: 10vw;
  margin: 0 20px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
}

.body_infoText > h2 {
  font-size: 48px;
  margin-bottom: 10px;
}
.body_infoText > p {
  font-size: 14px;
}

.body_song {
  margin-top: 25px;
  margin-left: 47px;
}
.body_icon {
  display: flex;
  align-content: center;
}

.body_shuffle {
  font-size: 2rem;
  margin-right: 20px;
  margin-top: 10px;
}
.play {
  font-size: 4rem;
  margin-top: -8px;
  :hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
}
</style>