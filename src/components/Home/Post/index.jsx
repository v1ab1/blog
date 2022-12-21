import { Author } from './Author';
import style from './Post.module.sass';

export const Post = () => {
    return (
    <div className={style.Post}>
      <img className={style.image} alt="" src=""/>
      <Author />
    </div>
  );
}