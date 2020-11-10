import "./styles/app.scss";

import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./util";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currSong={currSong} />
      <Player
        audioRef={audioRef}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setSongInfo={setSongInfo}
        setCurrSong={setCurrSong}
        currSong={currSong}
        songInfo={songInfo}
        timeUpdateHandler={timeUpdateHandler}
        songs={songs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrSong={setCurrSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
    </div>
  );
}

export default App;
