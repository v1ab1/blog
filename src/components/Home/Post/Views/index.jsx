import style from './Views.module.sass';
import Icon from './icon.svg';

export const Views = () => {
    return (
    <div className={style.Views}>
        <img src={Icon} alt="" />
        <span>
            999
        </span>
    </div>
  );
}