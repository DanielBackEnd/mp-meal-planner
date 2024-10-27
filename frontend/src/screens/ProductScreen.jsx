import { useState } from 'react';
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from '../slices/productApiSlice';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';
import {
  Stack,
  Box,
  Button,
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
import AddIcon from '@mui/icons-material/Add';
import AddProductModal from '../components/AddProductModal';
import EditProductModal from '../components/EditProductModal';
import { toast } from 'react-toastify';

const ProductScreen = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);

  const [productId, setProductId] = useState('');

  const { data: products, refetch } = useGetAllProductsQuery();

  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async id => {
    try {
      await deleteProduct(id).unwrap();
      toast.success('Product has been deleted!');
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
        <Paper sx={{ width: '100%', padding: '40px', bgcolor: 'lightgray' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='body1'
              sx={{ fontWeight: '900', fontSize: '25px' }}
            >
              Products
            </Typography>
            <Button
              variant='contained'
              startIcon={<AddIcon />}
              sx={{ bgcolor: 'success.main' }}
              onClick={handleOpenAddModal}
            >
              Add
            </Button>
          </Box>
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
                {products ? (
                  products.map(product => (
                    <TableRow
                      key={product._id}
                      sx={{ borderBottom: '1px solid rgba(224,224,224,1)' }}
                    >
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.weight}</TableCell>
                      <TableCell>{product.mark}</TableCell>
                      <TableCell>{product.price}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label='edit'
                          onClick={e => {
                            handleOpenEditModal();
                            setProductId(product._id);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          aria-label='delete'
                          onClick={e => {
                            const confirmDelete = window.confirm(
                              'Are you sure to delete this product?'
                            );

                            if (!confirmDelete) {
                              return;
                            }
                            setProductId(product._id);
                            handleDelete(product._id);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
      <AddProductModal
        open={openAddModal}
        handleClose={handleCloseAddModal}
        refetch={refetch}
      />
      <EditProductModal
        open={openEditModal}
        handleClose={handleCloseEditModal}
        refetch={refetch}
        productId={productId}
      />
    </>
  );
};
export default ProductScreen;
