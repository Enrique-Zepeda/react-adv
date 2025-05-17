import { type FormEvent } from "react";
import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export function RegisterPage() {
  const { email, name, onChange, password1, password2, formData, resetForm, isValidEmail } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    resetForm();
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChange}
          name="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este Campo es necesario</span>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          name="email"
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}

        <input type="password" placeholder="Password" value={password1} onChange={onChange} name="password1" />
        {password1.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>El password debe de ser de mas de 6 caracteres</span>
        )}
        <input type="password" placeholder="Repeat Password" value={password2} onChange={onChange} name="password2" />
        {name.trim().length <= 0 && <span>Este Campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
