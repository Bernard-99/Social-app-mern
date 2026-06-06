import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Feed from './Feed'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
          />
        </Routes>
        </BrowserRouter>
  )
}
export default App

