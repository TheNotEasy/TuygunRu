import {SignInInputs} from "@/pages/Auth/Auth.tsx";
import {useForm, FieldError} from "react-hook-form";
import {Link} from "react-router-dom";

import classnames from "classnames";

import "./SignUp.scss"

type SignUpInputs = SignInInputs & {
  password2: string,
  role: 'student' | 'teacher',

  firstname: string
  lastname: string
}

const OnlyCyrillic = {value: /^[А-Яа-я]/, message: "Только русские буквы"}

export function Alert({error}: {error?: FieldError}) {
  return (
    <>
      {error && <p role="alert">{error.message}</p>}
    </>
  )
}

export function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<SignUpInputs>({
    mode: 'onChange'
  })

  function passwordConfirmValidation(val: string) {
    const password = watch("password")
    if (val.length >= 8 && password != val) {
      return "Пароли не совпадают"
    }
  }

  function inputStyle(name: keyof SignUpInputs) {
    return {className: classnames({"invalid": errors[name]})}
  }

  return (
    <div className="container container-gap container-center">
      <h1 className="container__title">
        Создание аккаунта
      </h1>

      <form className="form" onSubmit={handleSubmit(console.log, )}>
        <input type="email" {...register("email")} placeholder="Почта" required autoComplete='email' />
        <input type="password" {...register("password")} placeholder="Пароль" required autoComplete='new-password' minLength={8} />
        <input
          type="password"
          {...register("password2", {validate: passwordConfirmValidation})}
          placeholder="Подтвердите пароль" required autoComplete='off'
          {...inputStyle("password2")}
        />
        <Alert error={errors.password2} />

        <br/>

        <select {...register("role")} required defaultValue="">
          <option value="" disabled hidden>Роль</option>
          <option value="student">Ученик</option>
          <option value="teacher">Учитель</option>
        </select>

        <input type="text" {...register("firstname", {pattern: OnlyCyrillic})} {...inputStyle("firstname")} placeholder="Имя" />
        <Alert error={errors.firstname} />
        <input type="text" {...register("lastname", {pattern: OnlyCyrillic})} {...inputStyle("lastname")} placeholder="Фамилия" />
        <Alert error={errors.lastname} />

        <br/>

        <input type="submit" value="Войти"/>
      </form>

      <Link className="signup__link" to="/auth">У меня уже есть аккаунт</Link>
    </div>
  )
}
