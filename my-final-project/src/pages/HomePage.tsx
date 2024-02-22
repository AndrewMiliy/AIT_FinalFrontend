import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
   <div>
      <div>Добро пожаловать на главную страницу!</div>
      <Link to="/login">Войти</Link>
      <br />
      <Link to="/register">Регистрация</Link> {/* Добавьте эту строку */}
    </div>
  );
};

export default HomePage;
