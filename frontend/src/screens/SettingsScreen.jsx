import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useUpdateMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import {
  Stack,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
} from '@mui/material';
import { setCredentials } from '../slices/authSlice';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const [update, { isLoading }] = useUpdateMutation();

  const { userInfoMP } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      const res = await update({ email, name, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('User data updated successfully!');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopBar />
      <Stack direction='row'>
        <SideBar />
        <Paper
          sx={{
            width: '100%',
            padding: { xs: '10px', sm: '40px' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            textAlign='center'
            sx={{ fontSize: { xs: '20px', sm: '40px' } }}
          >
            Account settings
          </Typography>
          <Typography textAlign='center'>User ID: {userInfoMP._id}</Typography>
          <Box
            component='form'
            onSubmit={handleUpdate}
            noValidate
            sx={{
              mt: 2,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
              sx={{ width: { xs: '100%', sm: '80%' } }}
              label='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              margin='normal'
              variant='outlined'
            />
            <TextField
              sx={{ width: { xs: '100%', sm: '80%' } }}
              label='name'
              value={name}
              onChange={e => setName(e.target.value)}
              margin='normal'
              variant='outlined'
            />
            <TextField
              sx={{ width: { xs: '100%', sm: '80%' } }}
              label='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              margin='normal'
              variant='outlined'
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              sx={{ mt: 3 }}
            >
              Update
            </Button>
          </Box>
        </Paper>
      </Stack>
    </>
  );
};
export default SettingsScreen;
