import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  const params = useParams();
  const [playlistInfo, setPlaylistInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/playlists/${params.id}/musics/`)
      .then((res) => {
        console.log(res);
        setPlaylistInfo(res.data);
      });
    console.log(playlistInfo);
  }, []);

  const musicsList = playlistInfo.map((item) => {
    return (
      <>
        <p>{item.MusicName}</p>
        <p>{item.Artist}</p>
        <audio controls>
          <source src={item.FilePath} />
        </audio>
      </>
    );
  });

  return (
    <>
      <h1>Playlist {`${playlistInfo[0].PlaylistName}`}</h1>
      {musicsList}
    </>
  );
};

export default PlaylistPage;
