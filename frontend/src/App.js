import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import CanDashboard from './pages/user/CanDashboard';
import UserRoute from './component/UserRoute';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Layout from './pages/global/Layout';


const CanDashboardHOC = Layout(CanDashboard);

const App = () => {
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/user/canDashboard' element={<UserRoute><CanDashboardHOC /></UserRoute>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
