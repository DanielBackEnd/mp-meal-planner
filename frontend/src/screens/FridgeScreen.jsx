import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Stack, Paper, Typography, Box } from '@mui/material';
import NoFridgeWarning from '../components/NoFridgeWarning';
import {
  useGetUserFridgeQuery,
  useCreateFridgeMutation,
} from '../slices/fridgeApiSlice';
import { toast } from 'react-toastify';

const FridgeScreen = () => {
  const { data: userFridge, refetch } = useGetUserFridgeQuery();
  const [createFridge] = useCreateFridgeMutation();

  const handleCreateFridge = async () => {
    try {
      await createFridge({ products: [] }).unwrap();
      toast.success('Fridge has been created');
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.message);
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
            padding: '40px',
            bgcolor: 'lightgray',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {userFridge ? (
            'fridge'
          ) : (
            <NoFridgeWarning handleCreateFridge={handleCreateFridge} />
          )}
        </Paper>
      </Stack>
    </>
  );
};
export default FridgeScreen;
