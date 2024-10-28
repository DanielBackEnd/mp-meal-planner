import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Stack, Paper, Typography, Box } from '@mui/material';
import NoFridgeWarning from '../components/NoFridgeWarning';
import {
  useGetUserFridgeQuery,
  useCreateFridgeMutation,
} from '../slices/fridgeApiSlice';
import { useEffect } from 'react';

const FridgeScreen = () => {
  const { data: userFridge } = useGetUserFridgeQuery();
  const [createFridge] = useCreateFridgeMutation();

  const handleCreateFridge = async () => {
    
  }

  return (
    <>
      <TopBar />
      <Stack direction='row'>
        <SideBar />
        <Paper
          sx={{
            width: '100%',
            padding: '40px',
            bgcolor: 'lightgray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {userFridge ? 'fridge' : <NoFridgeWarning />}
        </Paper>
      </Stack>
    </>
  );
};
export default FridgeScreen;
