import {InputHTMLAttributes} from "react";
import "./Input.scss";
import {FieldErrors} from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errors: FieldErrors
}

export function AppInput({onChange, errors, ...input}: InputProps) {
  return <input {...input} onChange={(...p) => {
    onChange?.(...p);

  }}></input>
}
