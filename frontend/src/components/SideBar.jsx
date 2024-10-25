import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  Settings,
  Home,
  Fastfood,
  MenuBook,
  Kitchen,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#2E79D5',
      maxWidth: '50px',
    },
  },
  item: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: '25px',
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  icon: {
    [theme.breakpoints.down('sm')]: {
      color: '#fff',
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        height='calc(100vh - 88px)'
        p={2}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        className={classes.box}
      >
        <List>
          <ListItem disablePadding className={classes.item}>
            <ListItemButton component={Link} to='/home'>
              <ListItemIcon>
                <Home className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Homepage' className={classes.text} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classes.item}>
            <ListItemButton component={Link} to='/product'>
              <ListItemIcon>
                <Fastfood className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Products' className={classes.text} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classes.item}>
            <ListItemButton component={Link} to='/recipies'>
              <ListItemIcon>
                <MenuBook className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Recipies' className={classes.text} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classes.item}>
            <ListItemButton component={Link} to='/fridge'>
              <ListItemIcon>
                <Kitchen className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Fridge' className={classes.text} />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding className={classes.item}>
            <ListItemButton component={Link} to='/settings'>
              <ListItemIcon>
                <Settings className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary='Settings' className={classes.text} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default SideBar;
