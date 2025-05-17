import { ErrorMessage, useField } from "formik";
interface Props {
  label: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export function MyCheckbox({ label, ...props }: Props) {
  const [field] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>

      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span className="error">{meta.error}</span>} */}
    </>
  );
}
