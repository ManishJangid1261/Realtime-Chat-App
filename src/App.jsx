import './App.css'
import Room from './pages/Room'
import LoginPage from './pages/LoginPage'
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrvateRoutes from './Component/PrvateRoutes';
import { AuthProvider } from './utlis/AuthContext';
import RegisterPage from './pages/RegisterPage';
function App() {
 
  return (
    <>
    <Router>
      <AuthProvider>

      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

          <Route element={<PrvateRoutes/>}>
            <Route path="/" element={<Room/>}/>
          </Route>
      </Routes>

      </AuthProvider>
      </Router>
    </>
  )
}

export default App
