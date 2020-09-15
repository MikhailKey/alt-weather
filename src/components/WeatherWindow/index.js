import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../hooks/contextHook';
import { useHttp } from '../../hooks/httpHook';
import DayWeather from '../DayWeather';
//MUI
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Skeleton from '@material-ui/lab/Skeleton';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const WeatherWindow = ({ handleClose, open, city }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { request, loading, error } = useHttp();
  const { key } = useContext(Context);
  const [item, setItem] = useState({
    current: {
      temperature: 0,
      temp_min: 0,
      temp_max: 0
    },
    daily: {

    }
  });

  const getData = async () => {
    const data = await request(`onecall?lat=${city.coordinates.lat}&lon=${city.coordinates.lon}&exclude=hourly,minutely&units=metric&appid=${key}`, 'get');
    if (data) {
      setItem({
        daily: data.daily.slice(0, data.daily.length - 1),
        current: city
      })
    }
  }

  useEffect(() => {
    if (city.name) {
      getData()
    }
  }, [city])



  return (
    <div>
      <Dialog
        fullWidth
        maxWidth="sm"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{city.name}</DialogTitle>
        <DialogContent>
          {
            loading ? <Skeleton width={'100%'} height={700} /> : (
              <>
                <Grid>
                  <Typography variant="h2" color="textSecondary">
                    {item.current.temperature}°C
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Day {item.current.temp_max}°C - Night {item.current.temp_min}°C
                </Typography>
                </Grid>
                <Divider />
                <Grid>
                  <Typography variant="h5">7-day forecast</Typography>
                  <List>
                    {
                      item.daily.length ? item.daily.map((day) => {
                        return <DayWeather key={day.dt} day={day} />
                      }) : null
                    }
                  </List>
                </Grid>
              </>
            )
          }
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default WeatherWindow