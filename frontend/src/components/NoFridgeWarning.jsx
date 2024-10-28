import { Box, Typography, Button } from '@mui/material';

const NoFridgeWarning = ({ handleCreateFridge }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h4'>User has not fridge yet</Typography>
        <Button
          variant='contained'
          color='primary'
          size='large'
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: 'bold',
            textTransform: 'none',
          }}
          onClick={() => {
            handleCreateFridge();
          }}
        >
          Create New Fridge
        </Button>
      </Box>
    </>
  );
};
export default NoFridgeWarning;
