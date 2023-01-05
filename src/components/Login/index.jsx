import style from './Login.module.sass';

export const Login = () => {
    return (
    <div className={style.Login}>
        <h2>Log in</h2>
        <input type="email" />
        <input type="password" />
        <button>
            submit
        </button>
    </div>
  );
}