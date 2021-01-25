import React from "react";
import classes from './Header.module.css';
import Exit from "../icons/Exit";

const Header = ({ setLogged }) => {

  const handleClickOnButton = () => {
    setLogged(false);
  };

  return (
    <header className={classes.header}>
      <button onClick={handleClickOnButton} className={classes.button}>Выйти<Exit/></button>
    </header>
  );
};

export default Header;
