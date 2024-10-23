import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfoMP } = useSelector(state => state.auth);

  useEffect(() => {
    if (userInfoMP) {
      navigate('/home');
    }
  }, [userInfoMP, navigate]);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/home');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <Container maxWidth='sx'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='h3' component='h1' sx={{ mb: 2 }}>
          mealPlaner
        </Typography>
        <Typography variant='body1' component='h2' sx={{ mb: 2 }}>
          Sign in
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={submitHandler}
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email address'
            name='email'
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Sign in
          </Button>
          {isLoading && <CircularProgress />}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body1'>
              Don't have an account?{' '}
              <Link
                to='/register'
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginScreen;
