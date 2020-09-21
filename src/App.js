import React, { useEffect } from "react";
import Login from "./components/Login/Login";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { getTokenFromResponse } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { CTX } from "./contextApi/StateProvider";
import Player from "./components/Player/Player";

const spotify = new SpotifyWebApi();

const color = {
  primary: {
    main: "#00AAE1",
    dark: "#143C8C",
    contrastText: "#fff",
  },
  secondary: {
    main: "#64B42D",
    dark: "#008732",
    contrastText: "#fff",
  },
  error: {
    main: "#BD0043",
    contrastText: "#fff",
  },
};

function App() {
  const [{ token }, dispatch] = CTX();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
      ...color,
      background: {
        default: "#252525",
      },
    },
  });

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", payload: _token });
      spotify.setAccessToken(_token);
      spotify
        .getMe()
        .then((user) => dispatch({ type: "SET_USER", payload: user }));
      spotify
        .getUserPlaylists()
        .then((playlist) =>
          dispatch({ type: "SET_PLAYLIST", payload: playlist })
        );
    }
  }, [token]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    </ThemeProvider>
  );
}

export default App;
