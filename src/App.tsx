import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './style';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import SurveyPage from './pages/SurveyPage/SurveyPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/surveys/:surveyId",
    element: <SurveyPage />
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router}/>
       </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
