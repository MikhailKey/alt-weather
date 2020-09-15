import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../hooks/contextHook';
import { useHttp } from '../../hooks/httpHook';
import WeatherCard from '../../components/WeatherCard';
import WeatherWindow from '../../components/WeatherWindow';
import SearchBar from '../../components/SearchBar';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
//MUI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(25), 
  },
  searchTool: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))

const Main = () => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState('');
  const [activeItem, setActiveItem] = useState({});
  const { request, error } = useHttp();
  const { key } = useContext(Context);
  const [cities, setCities] = useState(['Moscow', 'London', 'New York', 'Beijing']);

  const handleClickOpen = (item) => {
    setActiveItem(item)
    setOpened(true);
  };

  const checkCity = async (inputValue) => {
    const data = await request(`weather?q=${inputValue}&units=metric&appid=${key}`, 'get');
    if (data) {
      let alreadyInList = cities.findIndex(item => item.toLowerCase() === inputValue.toLowerCase());
      if (alreadyInList + 1) {
        return;
      }
      let newArr = [...cities, inputValue];
      setCities(newArr)
    }
  }

  useEffect(() => {
    if (value) {
      checkCity(value);
    }
  }, [value])

  const handleClose = () => {
    setOpened(false);
  };


  return (
    <Grid>
      <WeatherWindow city={activeItem} open={opened} handleClose={handleClose} />
      <Container maxWidth="md" className={classes.container}>
        <Toolbar className={classes.searchTool}>
          <SearchBar onChange={setValue} />
        </Toolbar>
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
      <Snackbar
        open={!!error}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          severity="error">{error.message}</Alert>
      </Snackbar>
    </Grid>
  )
}

export default Main
