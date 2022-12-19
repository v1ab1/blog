import style from './Header.module.sass';

export const Header = () => {
    return (
    <div className={style.Header}>
      <div className={style.content}>
          <div>
            Главная
          </div>
          <div>
            Вход
          </div>
      </div>
    </div>
  );
}