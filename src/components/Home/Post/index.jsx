import { Author } from './Author';
import style from './Post.module.sass';

export const Post = () => {
    return (
    <div className={style.Post}>
      <div className={style.postImage}></div>
      <div className={style.info}>
        <Author />
        <div>
          <h2>BLBLLBLBALBLBLABBLALBALBBALLBALBALLALBLALBLABLALBLAB</h2>
        </div>
      </div>
    </div>
  );
}