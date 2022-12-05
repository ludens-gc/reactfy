import { Link } from "react-router-dom";
import PlaylistCard from "../../components/PlaylistCard";
// import db from "../../json/db.json";
import style from "./style.module.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/playlists/")
      .then((res) => {
        console.log(res);
        setPlaylists(res.data);
      })
      .catch((error) => console.log(error))
      .finally(() => console.log(playlists));
  }, []);

  const res = playlists.map((playlist) => {
    console.log(playlist);
    return (
      <Link key={playlist.id} to={`/playlists/${playlist.id}`}>
        <li>
          <PlaylistCard playlist={playlist} />
        </li>
      </Link>
    );
  });
  return (
    <>
      <h1>Playlists</h1>
      <ul className={style.playlistCard}>{res}</ul>
    </>
  );
};

export default Playlists;
