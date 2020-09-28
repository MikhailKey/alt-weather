import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../hooks/contextHook';
import DayWeather from '../DayWeather';
import SimpleBar from 'simplebar-react';
import { useMutation } from '@apollo/client';
import { GET_TOWN_WINDOW } from '../../queries/townWindow';
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
  const { key } = useContext(Context);
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [getTownCard, { data, loading }] = useMutation(GET_TOWN_WINDOW);

  const [item, setItem] = useState({
    current: {
      temperature: 0,
      temp_min: 0,
      temp_max: 0
    },
    daily: {

    }
  });

  useEffect(() => {
    if (city.name) {
      getTownCard({
        variables: { key, lat: city.coordinates.lat, lon: city.coordinates.lon }
      })
    }
  }, [city])

  useEffect(() => {
    if (data && data.getTownCard) {
      const { daily } = data.getTownCard;
      setItem({
        daily: daily.slice(1, daily.length),
        current: city
      })
    }
  }, [data])



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
            loading ? <Skeleton width={'100%'} height={400} /> : (
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
                <Typography variant="h5">7-day forecast</Typography>
                <SimpleBar style={{ maxHeight: 300 }}>
                  <List>
                    {
                      item.daily.length ? item.daily.map((day) => {
                        return <DayWeather key={day.dt} day={day} />
                      }) : null
                    }
                  </List>
                </SimpleBar>
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