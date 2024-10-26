import { useGetAllProductsQuery } from '../slices/productApiSlice';
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
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductScreen = () => {
  const { data: products } = useGetAllProductsQuery();

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
          {products.length > 0 ? (
            <TableContainer component={Paper} sx={{ marginTop: '25px' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Weight</TableCell>
                    <TableCell>Mark</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map(product => (
                    <TableRow
                      key={product.id}
                      sx={{ borderBottom: '1px solid rgba(224,224,224,1)' }}
                    >
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.weight}</TableCell>
                      <TableCell>{product.mark}</TableCell>
                      <TableCell>0.00</TableCell>
                      <TableCell>
                        <IconButton aria-label='edit'>
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label='delete'>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>No products in datebase</Typography>
          )}
        </Paper>
      </Stack>
    </>
  );
};
export default ProductScreen;
