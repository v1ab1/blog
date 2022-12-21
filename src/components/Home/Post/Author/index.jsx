import style from './Author.module.sass';

export const Author = () => {
    return (
    <div className={style.Author}>
        <img src='' alt="" />
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