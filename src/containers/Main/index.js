import React, { useState } from 'react';
import WeatherCard from '../../components/WeatherCard';
import WeatherWindow from '../../components/WeatherWindow';
//MUI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(25)
  }
}))

const Main = () => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);
  const [activeItem, setActiveItem] = useState({});
  const [cities, setCities] = useState(['Moscow', 'London', 'New York', 'Beijing']);

  const handleClickOpen = (item) => {
    setActiveItem(item)
    setOpened(true);
  };

  const handleClose = () => {
    setOpened(false);
  };


  return (
    <Grid>
      <WeatherWindow city={activeItem} open={opened} handleClose={handleClose} />
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={2}>
          {
            cities.map(item => {
              return (
                <Grid key={item} item xs={12} sm={6} md={3}>
                  <WeatherCard city={item} handleOpen={handleClickOpen} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Grid>
  )
}

export default Main
