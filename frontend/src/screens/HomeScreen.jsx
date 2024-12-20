import { Card, Paper, Stack } from '@mui/material';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const HomeScreen = () => {
  return (
    <>
      <TopBar />
      <Stack direction='row'>
        <SideBar />
        <Paper sx={{ width: '100%', padding: '40px', bgcolor: 'lightgray' }}>
          Home
        </Paper>
      </Stack>
    </>
  );
};
export default HomeScreen;
