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
import FAQsPage from './pages/FAQsPage/FAQsPage';
import SupportPage from './pages/SupportPage/SupportPage';
import AccountPage from './pages/admin/account/AccountPage/AccountPage';
import SurveyCreationPage from './pages/admin/survey/SurveyCreationPage/SurveyCreationPage';
import SurveyListPage from './pages/admin/survey/SurveyListPage/SurveyListPage';

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
  {
    path: "/faqs",
    element: <FAQsPage />
  },
  {
    path: "/support-information",
    element: <SupportPage />
  },
  {
    path: "/admin/account-management",
    element: <AccountPage />
  },
  {
    path: "/admin/survey-management",
    element: <SurveyListPage />
  },
  {
    path: "/admin/survey-management/create",
    element: <SurveyCreationPage />
  },
  {
    path: "/admin/survey-management/surveys/:surveyId",
    element: <SupportPage />
  },
  {
    path: "/admin/support-information-management",
    element: <SupportPage />
  },
  {
    path: "/admin/faqs-management",
    element: <SupportPage />
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
