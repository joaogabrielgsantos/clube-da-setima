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
import ProtectedRoutes from './services/ProtectedRoutes';
import PrivatePage from './pages/PrivatePage';
import { UserProvider } from './contexts/UserProvider';

function App() {


  return (
    <>
      <ToastContainer />
      <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/private" element={<PrivatePage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      </UserProvider>
    </>
  )
}

export default App
