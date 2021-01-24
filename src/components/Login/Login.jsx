import React from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <div className={classes.login}>
      <form action="" className={classes.form}>
        <h1 className={classes.title}>Simple Flight Check</h1>
        <label className={classes.label}>Логин:</label>
        <input className={classes.input} type="text" name="" id=""/>
        <label className={classes.label}>Пароль:</label>
        <input className={classes.input} type="password" name="" id=""/>
        <button className={classes.button} type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
