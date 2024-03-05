import { Grid, Paper, Card, CardContent, Typography } from '@mui/material';

const UserProfile = ({ name, email }) => {
  return (
    <Grid item xs={12} md={3} style={{ display: 'flex' }}>
      <Paper style={{ height: '100%' }}>
        <Card style={{ height: '100%' }}>
          <CardContent>
            <Typography color="text.secondary">
              Name: {name}
            </Typography>
            <Typography color="text.secondary">
              Email: {email}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
};

export default UserProfile;
