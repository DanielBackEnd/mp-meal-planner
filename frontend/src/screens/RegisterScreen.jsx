import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  const submitHandler = e => {
    e.preventDefault();
    console.log('submitted');
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
          Sign up
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
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign up
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body1'>
              Already have an account?{' '}
              <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                Sign in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default RegisterScreen;
