import {useForm} from "react-hook-form";

import './Auth.scss'
import {Link} from "react-router-dom";

type Email = `${string}@${string}.${string}`

export type SignInInputs = {
  email: Email,
  password: string,
}

export function Auth() {
  const {
    register,
    handleSubmit
  } = useForm<SignInInputs>()

  return (
    <div className="auth__card">
      <div className="container auth">
        <div className="card-left">
          <div className="card__text">
            <h1>Туйгун.Ру</h1>
            <p>образовательная платформа якутского языка</p>
          </div>
          <Link to="/signup" className="button auth-card__signup-button">Зарегистрироваться</Link>
        </div>

        <form className="form" onSubmit={handleSubmit(console.log)}>
          <input type="email" {...register("email")} placeholder="Почта" />
          <input type="password" {...register("password")} placeholder="Пароль" autoComplete='current-password' minLength={8} />

          <br/>

          <input type="submit" value="Войти" />
        </form>

        <Link to="/signup" className="button auth__signup-button">Зарегистрироваться</Link>
      </div>
    </div>
  )
}
