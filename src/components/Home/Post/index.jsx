import { Author } from './Author';
import { Tag } from './Tag';
import { Views } from './Views';
import style from './Post.module.sass';

export const Post = () => {
    return (
    <div className={style.Post}>
      <div className={style.postImage}></div>
      <div className={style.info}>
        <Author />
        <div className={style.headerAndTags}>
          <h2>BLBLLBLBALBLBLABBLALBALBBALLBALBALLALBLALBLABLALBLAB</h2>
          <div className={style.tags}>
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
      </div>
      <div className={style.stats}>
        <Views />
      </div>
    </div>
  );
}