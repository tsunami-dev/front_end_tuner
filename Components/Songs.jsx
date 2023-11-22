import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetch(`${API}/songs`)
          .then((res) => res.json())
          .then((res) => {
            setSongs(res);
          });
      } catch (error) {
        return error;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container-songs">
      <h1>Songs Inventory:</h1>
      <table>
        <thead>
          <tr>
            <th>Song Name</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Run Time</th>
            <th>Is Favorite</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((item) => (
            <tr key={item.id} className="Song">
              <td>
                <Link to={`/songs/${item.id}`}>{item.name}</Link>
              </td>
              <td>{item.artist}</td>
              <td>{item.album}</td>
              <td>{item.run_time}</td>
              <td>{item.is_favorite}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Songs;