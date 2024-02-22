import React, { useState } from 'react';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const userExists = users.some((user: any) => user.username === username || user.email === email);

  if (userExists) {
    alert('Пользователь с таким именем пользователя или email уже существует.');
    return;
  }

  const newUser = { username, email, password };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  alert('Регистрация успешна. Теперь вы можете войти в систему.');
      // Очистите форму и перенаправьте пользователя на страницу входа
    setUsername('');
    setEmail('');
      setPassword('');
      
      window.location.href = '/login';
};


   return (
    <div>
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Имя пользователя:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          Пароль:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterPage;
