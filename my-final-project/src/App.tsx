import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import useAuth from './hooks/useAuth'; // Импорт хука

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
        <Route path="/products" element={<ProductsPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
