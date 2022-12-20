import style from './Tags.module.sass';

export const Tags = () => {
    return (
    <div className={style.Tags}>
      <h3>
        Popular tags
      </h3>
      <p>
        Tinkoff
      </p>
      <p>
        Podozhdite
      </p>
      <p>
        Esche v razrabotke
      </p>
    </div>
  );
}