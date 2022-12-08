import style from "./style.module.scss";

const MusicList = ({ musicInfos }) => {
  return (
    <section key={musicInfos.id} className={style.musicSection}>
      <p>{musicInfos.MusicName}</p>
      <p>{musicInfos.Artist}</p>
      <audio controls>
        <source src={musicInfos.FilePath} />
      </audio>
    </section>
  );
};

export default MusicList;
