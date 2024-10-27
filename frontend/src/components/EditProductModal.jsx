import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';

const editProductModal = ({ open, handleClose, refetch }) => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [mark, setMark] = useState('');
  const [price, setPrice] = useState('');

  const submitHandler = async e => {
    e.preventDefault();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='edit-product-modal'
      aria-describedby='form-to-edit-product-modal'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id='edit-product-modal'
          variant='h6'
          component='h2'
          sx={{ marginBottom: '15px' }}
        >
          Edit product
        </Typography>
        <form>
          <TextField
            fullWidth
            label='Product Name'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label='Weight'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
            onChange={e => setWeight(e.target.value)}
          />
          <TextField
            fullWidth
            label='Mark'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
            onChange={e => setMark(e.target.value)}
          />
          <TextField
            fullWidth
            label='Price'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
            onChange={e => setPrice(e.target.value)}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            fullWidth
            onClick={submitHandler}
          >
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default editProductModal;
