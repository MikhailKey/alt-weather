import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../hooks/contextHook';
import { useHttp } from '../../hooks/httpHook';
import Skeleton from '@material-ui/lab/Skeleton';
//MUI
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const WeatherCard = ({ handleOpen, city }) => {
  const [item, setItem] = useState({
    country: '',
    name: '',
    coordinates: {},
    temperature: '',
    temp_min: '',
    temp_max: '',
    weather: {}
  });
  const classes = useStyles();
  const { key } = useContext(Context);
  const { request, loading, error } = useHttp();

  const openWindow = () => {
    if (Object.keys(item).length) {
      handleOpen(item);
    }
    else return;
  }

  const getData = async () => {
    const data = await request(`weather?q=${city}&units=metric&appid=${key}`, 'get');
    if (data) {
      const targetItem = {
        name: `${data.name}, ${data.sys.country}`,
        coordinates: data.coord,
        temperature: data.main.temp.toFixed(0),
        temp_min: data.main.temp_min.toFixed(0),
        temp_max: data.main.temp_max.toFixed(0),
        weather: data.weather
      }
      setItem(targetItem);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={openWindow}>
          {
            loading ? <Skeleton variant="rect" width="100%" height={200} /> : (
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  Day {item.temp_max}°C - Night {item.temp_min}°C
                </Typography>
                <Grid className={classes.main}>
                  <Typography variant="h2" color="textSecondary">
                    {item.temperature}°C
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.weather.description}
                  </Typography>
                </Grid>
              </CardContent>
            )
          }
        </CardActionArea>
        <CardActions>
          <Button onClick={openWindow} size="small" color="primary">
            More
        </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={!!error}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          severity="error">An error occurred, please try again later</Alert>
      </Snackbar>
    </>

  );
}

export default WeatherCard