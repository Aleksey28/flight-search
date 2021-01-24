import React from "react";
import classes from "./Flight.module.css";
import Like from "../../icons/Like";
import cn from "classnames";

const getFormatDate = (date) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  return `${("0" + date.getDay()).slice(-2)} ${monthNames[date.getMonth() - 1]}, ${date.getFullYear()}`;
};

const getFormatTime = (seconds) => {
  const HH = Math.floor(seconds / 3600);
  const MM = Math.floor(seconds / 60) - HH * 60;
  return `${("00" + HH).slice(-2)}:${("00" + MM).slice(-2)}`;
};

const Flight = ({ data, addToFavorites, deleteFromFavorites }) => {

  const handleClickLike = () => {
    if (data.favorite) {
      deleteFromFavorites(data.id);
    } else {
      addToFavorites(data.id);
    }
  };

  return (
    <div className={classes.flight}>
      <div className={classes.leftSide}>
        <div className={classes.picture}>
          <img src={data.picture} alt="picturesque"/>
        </div>
        <div>
          <p className={classes.route}>
            {`${data.departureAirportName} (${data.departureAirport})`}
            <span className={classes.arrow}/>
            {`${data.arrivalAirportName} (${data.arrivalAirport})`}
          </p>
          <p className={classes.dataTime}>
            {getFormatDate(data.departureDate)}
            <span/>
            {getFormatTime(data.duration)}
          </p>
          <p className={classes.airlineCompany}>{data.airlineCompany}</p>
        </div>
      </div>
      <div className={classes.rightSide}>
        <Like className={cn(classes.like, { [classes.like_active]: data.favorite })} onClick={handleClickLike}/>
        <p className={classes.price}>
          Price: <span>{`${data.price.toLocaleString()} ${data.currency}`}</span>
        </p>
      </div>
    </div>
  );
};

export default Flight;
