import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import {
  RegisterPage,
  FormikAbstractation,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractation" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink to="/register-formik" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Dynamic Form
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/formik-basic" element={<FormikBasicPage />} />
          <Route path="/formik-yup" element={<FormikYupPage />} />
          <Route path="/formik-components" element={<FormikComponents />} />
          <Route path="/formik-abstractation" element={<FormikAbstractation />} />
          <Route path="/register-formik" element={<RegisterFormikPage />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/*" element={<Navigate to="/register" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
