<template>
  <div id="app">
    <div v-if="$store.state.token">
      <Player spotify="{spotify}" />
    </div>
    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
import Login from "./components/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { store } from "./store/store";

const spotify = new SpotifyWebApi();

export default {
  name: "app",
  components: { Login, Player },

  created() {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const xtoken = hash.access_token;
    console.log(xtoken);
    if (xtoken) {
      store.commit("setToken", xtoken);
      spotify.setAccessToken(xtoken);
      spotify.getMe().then((user) => {
        console.log(user);
        store.commit("setUser", user);
      });
      spotify.getUserPlaylists().then((playlists) => {
        console.log(playlists.items[0].name);
        store.commit("setPlaylists", playlists);
      });
    }
  },
  computed: {},
};
</script>

<style>
* {
  margin: 0;
  font-family: proxima-nova, sans-serif;
  font-style: normal;
}
</style>
