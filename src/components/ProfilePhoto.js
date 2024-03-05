import { Grid, Paper, Card, CardContent, CardMedia } from '@mui/material';

const ProfilePhoto = () => {
  return (
    <Grid item xs={12} md={3} style={{ display: 'flex' }}>
      <Paper style={{ height: '100%' }}>
        <Card style={{ height: '100%' }}>
          <CardContent>
          </CardContent>
          <CardMedia
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/340px-Lewis_Hamilton_2016_Malaysia_2.jpg"
            alt="Lewis Hamilton"
            style={{ borderRadius: '50%', display: 'block', margin: 'auto', width: '50%', height: 'auto', marginBottom: '15%' }}
          />
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProfilePhoto;
