import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import ProtectedRoute from './components/ProtectedRoute'; 
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Sidebar from './pages/Sidebar'; 
import useAuth from './hooks/useAuth'; // Импорт хука

function App() {
  const isLoggedIn: boolean = useAuth(); // Явное указание типа для isLoggedIn

  return (
    <Router>
      {isLoggedIn && <Sidebar />} {/* Отображаем Sidebar только если пользователь авторизован */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
        {isLoggedIn && (
          <>
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </>
        )}
        {/* Добавляем маршрут для ненайденных страниц */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
