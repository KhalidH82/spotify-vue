<template>
  <div id="app">
    <div v-if="token">
      <Player />
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

const spotify = new SpotifyWebApi();

export default {
  name: "app",
  components: { Login, Player },
  data: function () {
    return { token: null };
  },
  created() {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const xtoken = hash.access_token;
    if (xtoken) {
      this.token = xtoken;

      spotify.setAccessToken(xtoken);
      spotify.getMe().then((user) => {
        console.log(user);
      });
    }
    console.log("I have a token", this.token);
  },
  // methods: {
  //   logOut: function () {
  //     this.token = null;
  //   },
  // },
};
</script>

<style>
* {
  margin: 0;
  font-family: proxima-nova, sans-serif;
  font-style: normal;
}
</style>
