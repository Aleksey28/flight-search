import React from "react";
import classes from "./Login.module.css";
import cn from "classnames";
import { useFormik } from "formik";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Поле обязательно для заполнения.";
  }

  if (!values.email) {
    errors.email = "Поле обязательно для заполнения.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Некорректный e-mail.";
  }
  return errors;
};

const Login = () => {

  const onSubmit = (data) => {
    console.log(data);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className={classes.login}>

      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <h1 className={classes.title}>Simple Flight Check</h1>
        <label htmlFor="email" className={classes.label}> Логин: </label>
        <input id="email"
               name="email"
               type="email"
               onChange={formik.handleChange}
               value={formik.values.email}
               className={cn(classes.input, { [classes.input_error]: formik.errors.email })}/>
        {formik.errors.email
         ? <span className={classes.error}>{formik.errors.email}</span>
         : null}
        <label htmlFor="password" className={classes.label}> Пароль: </label>
        <input id="password"
               name="password"
               type="password"
               onChange={formik.handleChange}
               value={formik.values.password}
               className={cn(classes.input, { [classes.input_error]: formik.errors.password })}/>
        {formik.errors.password
         ? <span className={classes.error}>{formik.errors.password}</span>
         : null}
        <button type="submit" className={classes.button}>Войти</button>
      </form>
    </div>
  );
};

export default Login;
