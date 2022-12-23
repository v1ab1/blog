import { Author } from './Author';
import style from './Post.module.sass';

export const Post = () => {
    return (
    <div className={style.Post}>
      <div className={style.postImage}></div>
      <Author />
    </div>
  );
}