import style from './Author.module.sass';

export const Author = () => {
    return (
    <div className={style.Author}>
        <div className={style.img}></div>
        <div>
            <p>
                User
            </p>
            <span>
                Date
            </span>
        </div>
    </div>
  );
}