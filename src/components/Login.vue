<template>
  <div class="login">
    <!-- Spotify Logo
    LoginButton-->

    <img
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="spotify logo"
    />
    <a :href="login">Login to Spotify</a>
  </div>
</template>

<script>
import { loginUrl } from "../spotify";
export default {
  data() {
    return {
      login: `https://accounts.spotify.com/authorize?client_id=8b28ea3b25644fe7887b6d6eb5501a6b&redirect_uri=http://localhost:8080/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`,
    };
  },
  created() {
    this.login = loginUrl;
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
}
.login > img {
  width: 100%;
}
.login > a {
  padding: 20px;
  background-color: #1db954;
  border-radius: 99px;
  font-weight: 800;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}
</style>