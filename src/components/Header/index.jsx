import style from './Header.module.sass';

export const Header = () => {
    return (
    <div className={style.Header}>
      <div className={style.content}>
          <div className={style.active}>
            Main
          </div>
          <div>
            Log in
          </div>
      </div>
    </div>
  );
}