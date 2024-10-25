import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import RecipiesScreen from './screens/RecipiesScreen.jsx';
import FridgeScreen from './screens/FridgeScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/home' element={<HomeScreen />} />
        <Route path='/product' element={<ProductScreen />} />
        <Route path='/recipies' element={<RecipiesScreen />} />
        <Route path='/fridge' element={<FridgeScreen />} />
        <Route path='/settings' element={<SettingsScreen />} />
      </Route>
    </Route>
  )
);

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h3: {
      fontFamily: 'Pacifico, cursive',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
