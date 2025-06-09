/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../hooks/contextHook';
import Skeleton from '@material-ui/lab/Skeleton';
import { GET_TOWN_CARD } from '../../queries/townCard';
import { useQuery } from '@apollo/client';
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
    margin: '0 auto',
  },
  media: {
    height: 140,
  },
});

const WeatherCard = ({ handleOpen, city }) => {
  const { key } = useContext(Context);
  
  const { data, loading, error } = useQuery(GET_TOWN_CARD, {
    variables: { city, key }
  });

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

  const openWindow = () => {
    if (Object.keys(item).length) {
      handleOpen(item);
    }
    else return;
  }

  useEffect(() => {
    if (data) {
      const { response } = data;
      const targetItem = {
        name: `${response.name}, ${response.sys.country}`,
        coordinates: response.coord,
        temperature: response.main.temp.toFixed(0),
        temp_min: response.main.temp_min.toFixed(0),
        temp_max: response.main.temp_max.toFixed(0),
        weather: response.weather[0]
      }
      setItem(targetItem);
    }
  }, [data])


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