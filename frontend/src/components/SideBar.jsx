import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import {
  Settings,
  Home,
  Fastfood,
  MenuBook,
  Kitchen,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <>
      <Box
        height='calc(100vh - 96px)'
        flex={1}
        p={2}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary='Homepage' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/products'>
              <ListItemIcon>
                <Fastfood />
              </ListItemIcon>
              <ListItemText primary='Products' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/recipies'>
              <ListItemIcon>
                <MenuBook />
              </ListItemIcon>
              <ListItemText primary='Recipies' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/fridge'>
              <ListItemIcon>
                <Kitchen />
              </ListItemIcon>
              <ListItemText primary='Fridge' />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to='/settings'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary='Settings' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default SideBar;
