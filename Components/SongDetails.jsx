import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SongDetails() {
  const [song, setSong] = useState({ name: "" });
  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        fetch(`${API}/songs/${index}`)
          .then((res) => res.json())
          .then((res) => {
            setSong(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchSong();
  }, [index]);

  const handleDelete = () => {
    fetch(`${API}/songs/${index}`, { method: "DELETE" }).then(() =>
      navigate(`/songs`)
    );
  };

  return (
    <div className="song-details">
      <div className="song-container">
        {song ? (
          <div>
            <h1>{song.name}</h1>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Run Time: {song.run_time}</p>
            <p>Favorite: {game.is_favorite}</p>
            <div>
              <Link to={`/songs/${index}/edit`}>Edit Song Info</Link>
              <button onClick={handleDelete}>Delete Song</button>
            </div>
          </div>
        ) : (
          <div className="no-song-alert">
            <div>No Song To Jam Out Too!</div>
            <div>
              <Link to="/songs">Please select from our amazing ever growing selctions.</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SongDetails;