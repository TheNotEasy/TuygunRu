import {createPage} from "@/pages/Base.tsx";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import './Auth.scss'

type Email = `${string}@${string}.${string}`

export type SignInInputs = {
  email: Email,
  password: string,
}

function AuthContent() {
  const {
    register,
    handleSubmit,
  } = useForm<SignInInputs>()

  return (
    <div className="container auth">
      <h1 className="container__title">
        Авторизация
      </h1>

      <form className="form">
        <input type="email" {...register("email")} placeholder="Почта" />
        <input type="password" {...register("password")} placeholder="Пароль" autoComplete='current-password' />

        <br />

        <input type="submit" value="Войти" />
      </form>

      <Link className="auth__link" to="/signin">У меня нет аккаунта</Link>
    </div>
  )
}

export const Auth = createPage(<AuthContent></AuthContent>, [])
