import "./styles/app.scss";

import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currSong={currSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currSong={currSong}
      />
    </div>
  );
}

export default App;
