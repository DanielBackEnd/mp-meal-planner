import { Stack } from '@mui/material';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const HomeScreen = () => {
  return (
    <>
      <TopBar />
      <Stack direction='row' spacing={2}>
        <SideBar />
      </Stack>
    </>
  );
};
export default HomeScreen;
