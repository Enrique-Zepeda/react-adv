import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, MyCheckbox, MySelect } from "../components";
import "../styles/styles.css";

export function FormikAbstractation() {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, "Debe de tener 15 caracteres o menos").required("Requerido"),
          lastName: Yup.string().max(15, "Debe de tener 15 caracteres o menos").required("Requerido"),
          email: Yup.string().required("Requerido").email("Email no valido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string().notOneOf(["it-jr"], "Esta opcion no es permitida").required("Requerido"),
        })}
      >
        {() => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />
            <MyTextInput label="Last Name" name="lastName" />
            <MyTextInput label="Email" name="email" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">It Senior</option>
              <option value="it-jr">It Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
