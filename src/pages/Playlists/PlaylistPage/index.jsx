import { useParams } from "react-router-dom";
import db from "../../../json/db.json";

const PlaylistPage = () => {
  const params = useParams();

  console.log(params);
  console.log(db);

  const playlist = db.find((playlist) => {
    return playlist.id === Number(params.id);
  });

  console.log(playlist);

  return (
    <>
      <h1>Playlist {`${params.id}`}</h1>
    </>
  );
};

export default PlaylistPage;
