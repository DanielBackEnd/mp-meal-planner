import { useState } from 'react';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import { Stack, Paper, Typography, Box, TextField } from '@mui/material';
import NoFridgeWarning from '../components/NoFridgeWarning';
import {
  useGetUserFridgeQuery,
  useCreateFridgeMutation,
} from '../slices/fridgeApiSlice';
import { toast } from 'react-toastify';

const FridgeScreen = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [quantity, setQuantity] = useState({});

  const { data: userFridge, refetch } = useGetUserFridgeQuery();
  const [createFridge] = useCreateFridgeMutation();

  const searchProducts = async = searchTerm => {
    const result = await 
  }

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
            <Stack spacing={2} alignItems='center'>
              <Typography variant='h2'>User fridge</Typography>
              <TextField
                label='Find a product'
                value={query}
                onChange={e => setQuery(e.target.value)}
                fullWidth
              ></TextField>
              <List>
                {suggestions.map(product => (
                  <ListItem key={product.id}>
                    {product.name}
                    <TextField
                      label='Ilość'
                      type='number'
                      value={quantity[product.id] || ''}
                      onChange={e =>
                        setQuantity({
                          ...quantity,
                          [product.id]: e.target.value,
                        })
                      }
                      sx={{ mx: 1, width: '80px' }}
                    />
                    <Button
                      variant='contained'
                      onClick={() => handleAddProduct(product)}
                    >
                      Dodaj
                    </Button>
                  </ListItem>
                ))}
              </List>
            </Stack>
          ) : (
            <NoFridgeWarning handleCreateFridge={handleCreateFridge} />
          )}
        </Paper>
      </Stack>
    </>
  );
};
export default FridgeScreen;
