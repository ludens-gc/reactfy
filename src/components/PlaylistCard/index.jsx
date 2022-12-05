import style from "./style.module.scss";
const PlaylistCard = ({ playlist }) => {
  return (
    <div className={style.card}>
      <img
        className={style.cardCover}
        src={playlist.Cover}
        alt="capa da playlist"
      />
      <h2 className={style.cardTitle}>{playlist.PlaylistName}</h2>
    </div>
  );
};

export default PlaylistCard;
