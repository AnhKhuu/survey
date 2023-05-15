import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes';
import { theme } from './style';

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
