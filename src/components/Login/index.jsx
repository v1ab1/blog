import style from './Login.module.sass';

export const Login = () => {
    return (
    <div className={style.Login}>
        <h2>Log in</h2>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <button>
            submit
        </button>
    </div>
  );
}