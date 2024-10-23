import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant='h3'
          component='div'
          sx={{ flexGrow: 1, fontSize: 30 }}
        >
          mealPlaner
        </Typography>
        <Button color='error' variant='contained'>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
