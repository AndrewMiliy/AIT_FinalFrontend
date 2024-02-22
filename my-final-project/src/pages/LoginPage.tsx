import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const boxRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    boxRef.current.forEach((box, index) => {
      box.style.setProperty('--color', `hsl(${index * 100}, 100%, 50%)`);
      box.onmousemove = function (e) {
        let x = e.pageX - box.offsetLeft;
        let y = e.pageY - box.offsetTop;

        box.style.setProperty('--x', `${x}px`);
        box.style.setProperty('--y', `${y}px`);
      };
    });

    setUsername(username);
    setPassword(password);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: User) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/protected');
    } else {
      alert('Неверное имя пользователя или пароль.');
    }
  };

  return (
    <div className="container">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          ref={el => el && (boxRef.current[i] = el)}
          className='box'
          style={{ '--color': '#0f0' } as React.CSSProperties}
        />
      ))}

      <div className="login" style={{ pointerEvents: 'none' }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className='card' style={{ pointerEvents: 'all' }}>
          <div className='inputBox'>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <span>Username</span>
          </div>
          <div className='inputBox'>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <span>Password</span>
          </div>
          <div className='inputBox'>
            <button type="submit">Sign in</button>
          </div>
          <div className='group'>
            <a href="#">Forgot password</a>
            <a href="/register">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
