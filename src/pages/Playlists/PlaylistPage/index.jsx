import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MusicList from "../../../components/MusicList";
import style from "./style.module.scss";

const PlaylistPage = () => {
  const params = useParams();
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/playlists/${params.id}/musics/`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setPlaylistInfo(res.data);
        setPlaylistName(res.data[0].PlaylistName);
      });
    console.log(playlistInfo);
  }, []);

  const musicsList = playlistInfo.map((item) => {
    return <MusicList musicInfos={item} />;
  });

  return (
    <main>
      <h1>Playlist {playlistName}</h1>
      {musicsList}
    </main>
  );
};

export default PlaylistPage;
