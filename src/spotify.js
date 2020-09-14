export const authEndpoint = "https://accounts.spotify/authorize";

const redirectUri = "http://localhost:8080/";

const clientId = "8b28ea3b25644fe7887b6d6eb5501a6b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `https://accounts.spotify.com/authorize?client_id=8b28ea3b25644fe7887b6d6eb5501a6b&redirect_uri=http://localhost:8080/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`;
