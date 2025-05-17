import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialValues: { [key: string]: any } = {};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 1} caracteres`);
    }
    if (rule.type === "email") {
      schema = schema.email("Email no valido");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export function DynamicForm() {
  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
            <span>Hola mundo</span>
            {formJson.map(({ label, name, type, placeholder, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  <MyTextInput key={name} type={type as any} label={label} name={name} placeholder={placeholder} />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select a option</option>
                    {options?.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return <h3>Type: {type} no es soportado</h3>;
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
