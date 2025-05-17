import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";

export function RegisterFormikPage() {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe contener almenos 2 caracteres")
            .max(15, "El nombre debe ser menor a 15 caracteres")
            .required("Requerido"),
          email: Yup.string().email("Email no valido").required("Requerido"),
          password1: Yup.string().min(6, "La contraseña debe contener almenos 6 caracteres").required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Las contraseña no coinciden ")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Enrique" />
            <MyTextInput label="Email" name="email" type="email" placeholder="kike@gmail.com" />
            <MyTextInput label="Password" name="password1" type="password" placeholder="******" />
            <MyTextInput label="Repeat Password" name="password2" type="password" placeholder="******" />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
