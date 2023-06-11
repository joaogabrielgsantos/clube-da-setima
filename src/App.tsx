import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {


  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          </Router>
    </>
  )
}

export default App
