import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Stack, Paper } from '@mui/material';

const RecipiesScreen = () => {
  return (
    <>
      <TopBar />
      <Stack direction='row'>
        <SideBar />
        <Paper sx={{ width: '100%', padding: '40px', bgcolor: 'lightgray' }}>
          Recipies
        </Paper>
      </Stack>
    </>
  );
};
export default RecipiesScreen;
