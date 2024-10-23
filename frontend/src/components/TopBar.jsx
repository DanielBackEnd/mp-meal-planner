import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

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
        <Button color='error' variant='contained' onClick={logoutHandler}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default TopBar;
