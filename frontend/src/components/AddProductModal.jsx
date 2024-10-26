import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const AddProductModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='add-product-modal'
      aria-describedby='form-to-add-new-product'
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id='add-product-modal'
          variant='h6'
          component='h2'
          sx={{ marginBottom: '15px' }}
        >
          Add New Product
        </Typography>
        <form>
          <TextField
            fullWidth
            label='Product Name'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label='Weight'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label='Mark'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
          />
          <TextField
            fullWidth
            label='Price'
            variant='outlined'
            sx={{ marginBottom: '15px' }}
          />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            fullWidth
            onClick={handleClose}
          >
            Add
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export default AddProductModal;
