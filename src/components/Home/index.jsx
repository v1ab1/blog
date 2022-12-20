import style from './Home.module.sass';
import { Post } from './Post';
import { Tags } from './Tags';

export const Home = () => {
    return (
    <div className={style.Home}>
      <div className={style.content}>
        <div className={style.lilHeader}>
          <p className={style.active}>
            New
          </p>
          <p>
            Popular
          </p>
        </div>
        <div className={style.main}>
          <div className={style.Posts}>
            <Post />
            <Post />
            <Post />
          </div>
          <Tags />
        </div>
      </div>
    </div>
  );
}