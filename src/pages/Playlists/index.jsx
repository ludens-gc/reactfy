import { Link } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard";
import db from "../../json/db.json";
import style from "./style.module.scss";

const Playlists = () => {
  return (
    <>
      <h1>Playlists</h1>
      <ul className={style.playlistCard}>
        {db.playlists.map((playlist) => {
          console.log(playlist);
          return (
            <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
              <li>
                <PlaylistCard playlist={playlist} />
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Playlists;
