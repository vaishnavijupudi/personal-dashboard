import { Grid, Paper, Card, CardContent, Typography } from '@mui/material';
import ProfilePhoto from './ProfilePhoto';
import WeatherComponent from './WeatherComponent';
import AllCitiesWeather from './AllCitiesWeather';

const Weather = () => {
  return (
    <Grid container spacing={2} style={{ display: 'flex' }}>
      <Grid item xs={12} md={4} style={{ flexGrow: 1 }}>
        <Paper style={{ height: '100%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography color="text.secondary">
                <WeatherComponent/>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={5} style={{ flexGrow: 1 }}>
        <Paper style={{ height: '100%' }}>
          <Card style={{ height: '100%' }}>
            <CardContent>
              <Typography color="text.secondary">
                <AllCitiesWeather/>
              </Typography>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
      <ProfilePhoto style={{ flexGrow: 1 }}/>
    </Grid>
  );
};

export default Weather;
