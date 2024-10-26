import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import {
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

const ProductScreen = () => {
  return (
    <>
      <TopBar />
      <Stack direction='row'>
        <SideBar />
        <Paper sx={{ width: '100%', padding: '40px', bgcolor: 'lightgray' }}>
          <Typography
            variant='body1'
            sx={{ fontWeight: '900', fontSize: '25px' }}
          >
            Products
          </Typography>
          <TableContainer component={Paper} sx={{ marginTop: '25px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Weight</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </>
  );
};
export default ProductScreen;
