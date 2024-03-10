import {SignInInputs} from "@/pages/Auth/Auth.tsx";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {createPage} from "@/pages/Base.tsx";

import classnames from "classnames";

type SignUpInputs = SignInInputs & {
  password2: string,
  role: 'student' | 'teacher',

  firstname: string
  lastname: string
}

export function SignUpContent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    clearErrors
  } = useForm<SignUpInputs>({
    mode: 'onSubmit'
  })

  function passwordConfirmValidation(val: string) {
    if (watch('password') != val) {
      return "Пароли не совпадают"
    }
  }

  console.log(errors, register("password2"))

  return (
    <div className="container auth">
      <h1 className="container__title">
        Создание аккаунта
      </h1>

      <form className="form" onSubmit={handleSubmit(console.log)}>
        <input type="email" {...register("email")} placeholder="Почта" required autoComplete='email'/>
        <input type="password" {...register("password")} placeholder="Пароль" required autoComplete='new-password'/>
        <input
          type="password"
          {...register("password2", {validate: passwordConfirmValidation})}
          placeholder="Подтвердите пароль" required autoComplete='off'
          className={classnames({"invalid": errors.password2})}
          onChange={() => {
            errors.password2 && clearErrors("password2")
          }}
        />
        {errors.password2 && (
          <p role="alert">{errors.password2.message}</p>
        )}

        <br/>

        <select {...register("role")} required defaultValue="">
          <option value="" disabled hidden>Роль</option>
          <option value="student">Ученик</option>
          <option value="teacher">Учитель</option>
        </select>

        <input type="text" {...register("firstname", {pattern: /^[А-Яа-я]/})} placeholder="Имя" />
        <input type="text" {...register("lastname", {pattern: /^[А-Яа-я]/})} placeholder="Фамилия" />

        <br/>

        <input type="submit" value="Войти"/>
      </form>

      <Link className="auth__link" to="#">У меня нет аккаунта</Link>
    </div>
  )
}

export const SignUp = createPage(<SignUpContent></SignUpContent>, [])
