import './App.css';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from 'react-router-dom'
import Landing from './component/Layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './component/routing/ProtectedRoute';
import About from './views/About';
import PostContextProvider from './contexts/PostContext';
function App() {
  return <AuthContextProvider>
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Auth authRoute='login' />} />
          <Route path='/login' element={<Auth authRoute='login' />} />
          <Route path='/register' element={<Auth authRoute='register' />} />
          <Route path='/dashboard' element={<ProtectedRoute name={<Dashboard />} />} />
          <Route path='/about' element={<ProtectedRoute name={<About />} />} />
          <Route
            path="*"
            element={<Auth authRoute='login' />}
          />

        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  </AuthContextProvider>

}

export default App;
