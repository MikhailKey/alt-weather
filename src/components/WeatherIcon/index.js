import React from 'react';

const WeatherIcon = ({ description, day = "sunny" }) => {
  if (description === "Clear") {
    if (day) {
      return (
        <div className="Clear">
          <i className="fas fa-sun"></i>
        </div>
      )
    }
    else {
      return (
        <div className="night">
          <i className="fas fa-moon"></i>
        </div>
      )
    }
  }
  else if (description === "Drizzle") {
    return (
      <div className="Drizzle">
        <i className="fas fa-cloud-rain"></i>
      </div>
    )
  }
  else if (description === "Rain") {
    return (
      <div className="Rain">
        <i className="fas fa-cloud-showers-heavy"></i>
      </div>
    )
  }
  else if (description === "Thunderstorm") {
    return (
      <div className="Thunderstorm">
        <i className="fas fa-cloud-showers-heavy"></i>
      </div>
    )
  }
  else if (description === "Clouds") {
    if (day) {
      return (
        <div className="Clouds-morning">
          <i className="fas fa-cloud"></i>
        </div>
      )
    }
    else {
      return (
        <div className={description}>
          <i className="fas fa-cloud"></i>
        </div>
      )
    }
  }
  else {
    return (
      <div className={description}>
        <i className="fas fa-smog"></i>
      </div>
    )
  }
}

export default WeatherIcon;