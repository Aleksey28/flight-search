import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./SearchFlights.module.css";
import Flight from "./Flight/Flight";
import { Scrollbar } from "react-scrollbars-custom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Carousel from "nuka-carousel";

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
  return `${("0" + date.getDate()).slice(-2)} ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const CalendarButton = ({ onClick }) => <button className={classes.calendar} onClick={onClick}/>;

const SearchFlights = ({ pageSearchFlights, selectDateDeparture, addToFavorites, deleteFromFavorites }) => {

  const { departureAirport, arrivalAirport, departureDate, pictures, flights } = pageSearchFlights;

  const picturesElements = pictures.map(p => (
    <img
      key={p.id}
      src={p.url}
      className={classes.picture}
      alt="place"
    />
  ));

  const flightsElements = flights.map(f => (
    <li key={f.id}>
      <Flight data={f} addToFavorites={addToFavorites} deleteFromFavorites={deleteFromFavorites}/>
    </li>
  ));

  const handleChangeDate = (date) => {
    selectDateDeparture(date);
  };

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
              <DatePicker
                selected={departureDate}
                onChange={handleChangeDate}
                customInput={<CalendarButton/>}
              />
            </div>
          </div>
          <Carousel
            slidesToShow={3}
            cellSpacing={12}
            slideWidth={0.85}
            withoutControls={true}
            wrapAround={true}
            opacityScale={0.65}
          >
            {picturesElements}
          </Carousel>
          <p className={classes.favorites}>
            Добавлено в Избранное: <span>{flights.filter(f => f.favorite).length}</span> рейсов
          </p>
        </div>
        <Scrollbar
          trackYProps={{
            renderer: (props) => {
              const { elementRef, ...restProps } = props;
              restProps.style = {};
              return <span {...restProps} ref={elementRef} className={classes.scroll_type_track}/>;
            },
          }}
          thumbYProps={{
            renderer: (props) => {
              const { elementRef, ...restProps } = props;
              restProps.style = {};
              return <div {...restProps} ref={elementRef} className={classes.scroll_type_thumb}/>;
            },
          }}
        >
          <ul className={classes.flights}>
            {flightsElements}
          </ul>
        </Scrollbar>
      </div>
    </section>
  );
};

export default SearchFlights;
