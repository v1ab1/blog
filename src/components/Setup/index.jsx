import style from './Setup.module.sass';

export const Setup = () => {
    return (
    <div className={style.Setup}>
        <h2>Set up</h2>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>
            submit
        </button>
    </div>
  );
}