import React from "react";
import classes from "./Login.module.css";
import cn from "classnames";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.password) {
    errors.password = "Поле обязательно для заполнения.";
  } else if (/[а-яё]/i.test(values.password)) {
    errors.password = "В поле содержатся кирилица.";
  } else if (values.password.length < 8) {
    errors.password = `Количество символов в строке ${values.password.length}. Минимальное количество 8.`;
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

const Login = ({ pageLogin, setInput, setLogged }) => {

  const onSubmit = (data) => {
    setLogged({ logged: true });
    console.log(pageLogin);
    console.log(data);
  };

  const initialValues = {
    email: pageLogin.email,
    password: pageLogin.password,
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const handleChangeInput = (e) => {
    setInput({
      name: e.target.name,
      value: e.target.value,
    });
    formik.handleChange(e);
  };

  return (
    <div className={classes.login}>

      <form onSubmit={formik.handleSubmit} noValidate className={classes.form}>
        <h1 className={classes.title}>Simple Flight Check</h1>
        <label htmlFor="email" className={classes.label}> Логин: </label>
        <input id="email"
               name="email"
               type="email"
               onChange={handleChangeInput}
               value={formik.values.email}
               className={cn(classes.input, { [classes.input_error]: formik.errors.email })}/>
        {formik.errors.email
         ? <span className={classes.error}>{formik.errors.email}</span>
         : null}
        <label htmlFor="password" className={classes.label}> Пароль: </label>
        <input id="password"
               name="password"
               type="password"
               onChange={handleChangeInput}
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
