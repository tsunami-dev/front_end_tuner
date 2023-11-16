import { Link } from "react-router-dom";

function Song ({ song }) {
    return(
        <tr>
            <td>
             {game.is_banned ? (
                <span>💫</span>
            ) :  (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}
            </td>
            <td>
                <Link to ={`/songs/${song.id}`}>{song.name}</Link>
            </td>
        </tr>
    );
}

export default Song;