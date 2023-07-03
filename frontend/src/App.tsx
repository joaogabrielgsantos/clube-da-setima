import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ProtectedRoutes from './auth/ProtectedRoutes';
import { UserProvider } from './contexts/UserProvider';
import ProtectedSignIn from './auth/ProtectedSignIn';
import MainPage from './pages/MainPage';
import FilmWeekPage from './pages/FilmWeekPage';
import SettingsPage from './pages/SettingsPage';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {


  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ToastContainer />
        <UserProvider>
          <Router>
            <Routes>
              <Route element={<ProtectedSignIn />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
              </Route>
              <Route element={<ProtectedRoutes />}>
                <Route path="/main" element={<MainPage />} />
                <Route path="/film" element={<FilmWeekPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </UserProvider>
      </LocalizationProvider>
    </>
  )
}

export default App
