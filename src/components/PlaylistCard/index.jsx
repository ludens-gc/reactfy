import style from "./style.module.scss";
const PlaylistCard = ({ playlist }) => {
  return (
    <div className={style.card}>
      <img
        className={style.cardCover}
        src={playlist.cover}
        alt="capa da playlist"
      />
      <h2 className={style.cardTitle}>{playlist.title}</h2>
    </div>
  );
};

export default PlaylistCard;
