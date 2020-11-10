import React from "react";

const LibrarySong = ({
  song,
  songs,
  setCurrSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrSong(song);
    if (isPlaying) {
      audioRef.current.play();
    } // Check if the new song is playing
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
