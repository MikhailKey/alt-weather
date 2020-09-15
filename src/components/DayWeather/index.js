import React, { useEffect, useState } from 'react';
import { useTime } from '../../util/dateFormatter';
import WeatherIcon from '../WeatherIcon';
//MUI
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const DayWeather = ({ day }) => {
  const [dayItem, setDayItem] = useState({});
  const { formatDate } = useTime();

  useEffect(() => {
    if (day.dt) {
      setDayItem({
        min: day.temp.min.toFixed(0),
        max: day.temp.max.toFixed(0),
        description: day.weather[0].description,
        icon: day.weather[0].main,
      })
    }
  }, [day])

  return (
    <ListItem role={undefined} dense button >
      {day.dt ? (
        <>
          <ListItemIcon>
            <WeatherIcon description={dayItem.icon} />
          </ListItemIcon>
          <ListItemText primary={`${formatDate(day.dt)}, ` + dayItem.max + '/' + dayItem.min + '°C'} secondary={dayItem.description} />
        </>
      ) : null}
    </ListItem>
  )
}

export default DayWeather
