import { NavLink } from "react-router-dom";
import React from "react";

const SearchFlights = ({ pageSearchFlights, selectDateDeparture, addToFavorites }) => {

  const { departureAirport, arrivalAirport, departureDate, pictures, flights } = pageSearchFlights;

  const picturesElements = pictures.map(p => (
    <li key={p.id}>
      <img src={p.url} alt="place"/>
    </li>
  ));

  const flightsElements = flights.map(f => (
    <li key={f.id}>
      <img src={f.picture} alt="pictureesq"/>
      <div>
        <p>{f.departureAirport}-{f.arrivalAirport}</p>
        <p>{f.departureDate.toString()} - {f.duration}</p>
        <p>{f.airlineCompany}</p>
      </div>
      <div>
        <div>
          {f.favorite}
        </div>
        <p>
          Price: <span>{`${f.price} ${f.currency}`}</span>
        </p>
      </div>
    </li>
  ));

  return (
    <div>
      <div>
        <div>
          <div>
            <NavLink to={"/"}>Вылеты</NavLink>
            <NavLink to={"/"}>
              {departureAirport} - {arrivalAirport}
            </NavLink>
          </div>
          <div>{departureDate.toString()}</div>
        </div>
        <div>
          <ul>
            {picturesElements}
          </ul>
        </div>
        <div>
          <p>Добавлено в Избранное: <span>0</span> рейсов</p>
          <ul>
            {flightsElements}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;
