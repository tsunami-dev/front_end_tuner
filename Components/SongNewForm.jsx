import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongNewForm() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    run_time: 0,
    isFavorite: false,
  });

  const addSong = () => {
    const songData = {
        name: song.name,
        artist: song.artist,
        album: song.album,
        run_time: song.run_time,
        isFavorite: song.isFavorite
    };
    try {
      fetch(`${API}/songs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(songData)
      })
        .then((res) => res.json())
        .then(() => navigate("/songs"));
    } catch (error) {
      return error;
    }
  };

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setSong({ ...song, [id]: value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, isFavorite: !song.is_favorite });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addGame();
    resetForm();
  };

  function resetForm() {
    setSong({
        name: "",
        artist: "",
        album: "",
        run_time: 0,
        isFavorite: false
    });
  }

  return (
    <div className="New">
    <h2 className="returnheader">New Song Details:</h2>
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="name">Song Name:</label>
      <input
        id="name"
        value={song.name}
        type="text"
        onChange={handleTextChange}
        placeholder="Name of Song..."
        required
      />
      <label htmlFor="artist">Artist: </label>
      <input
        id="artist"
        value={song.artist}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter Artist..."
        required
      />
      <br />
      <br />
      <label htmlFor="Album">Album: </label>
      <input
        id="album"
        value={song.album}
        type="text"
        onChange={handleTextChange}
        placeholder="Enter The Album..."
      />
      <br />
      <br />
      <label htmlFor="run time">Run Time</label>
      <input
        id="run time"
        value={song.run_time}
        type="number"
        min="0"
        step="1"
        max="999"
        onChange={handleTextChange}
        placeholder="Enter Time..."
      />
      <label htmlFor="isFavorite">Favorite Tune: </label>
      <input
        id="isFavorite"
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={song.isFavorite}
      />
      <br />
      <button type="submit">Time to vamp!</button>
    </form>
    <br />
    <Link to={`/songs`}>
      <button>Back To Songs!</button>
    </Link>
  </div>
);
}

export default GameNewForm;