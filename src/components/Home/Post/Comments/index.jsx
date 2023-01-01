import style from './Comments.module.sass';
import Icon from './icon.svg';

export const Comments = () => {
    return (
    <div className={style.Comments}>
        <span>
            999
        </span>
        <img src={Icon} alt="" />
    </div>
  );
}