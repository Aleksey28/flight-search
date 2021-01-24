import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./SearchFlights.module.css";
import Flight from "./Flight/Flight";

const getFormatDate = (date) => {
  const monthNames = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  return `${("0" + date.getDay()).slice(-2)} ${monthNames[date.getMonth() - 1]} ${date.getFullYear()}`;
};

const SearchFlights = ({ pageSearchFlights, selectDateDeparture, addToFavorites }) => {

  const { departureAirport, arrivalAirport, departureDate, pictures, flights } = pageSearchFlights;

  const picturesElements = pictures.map(p => (
    <li key={p.id}>
      <img src={p.url} alt="place"/>
    </li>
  ));

  const flightsElements = flights.map(f => (
    <li key={f.id}>
      <Flight data={f}/>
    </li>
  ));

  console.log(departureDate);
  return (
    <section className={classes.page}>
      <div className={classes.container}>
        <div className={classes.header}>
          <div className={classes.title}>
            <div className={classes.breadCrumbs}>
              <NavLink to={"/"} className={classes.link}>Вылеты</NavLink>
              <div className={classes.corner}/>
              <NavLink to={"/"} className={classes.link}>
                {departureAirport} - {arrivalAirport}
              </NavLink>
            </div>
            <div className={classes.departureDateBlock}>
              <div className={classes.departureDate}>{getFormatDate(departureDate)}</div>
              <button className={classes.calendar}/>
            </div>
          </div>
          <ul className={classes.pictures}>
            {picturesElements}
          </ul>
          <p className={classes.favorites}>
            Добавлено в Избранное: <span>{flights.filter(f => f.favorite).length}</span> рейсов
          </p>
        </div>
        <ul className={classes.flights}>
          {flightsElements}
        </ul>
      </div>
    </section>
  );
};

export default SearchFlights;
