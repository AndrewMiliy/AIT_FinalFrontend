import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  }, []);

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
    <div className='container'>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          ref={el => el && (boxRef.current[i] = el)}
          className='box'
          style={{ '--color': '#0f0' } as React.CSSProperties}
        />
      ))}

     <div className="login" style={{ pointerEvents: 'none' }}>
      <h2>Sign up</h2>
        <form onSubmit={handleSubmit} className='card' style={{ pointerEvents: 'all' }} autoComplete='off'>
          <input autoComplete="false" name="hidden" type="text" style={{ display:"none"}}/>
        <div className='inputBox'>
            <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' role="presentation"/>
            <span>Username</span>
          </div>
        <div className='inputBox'>
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' role="presentation"/>
            <span>Email</span>
          </div>
        <div className='inputBox'>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' role="presentation"/>
            <span>Password</span>
         </div>
         <div className='inputBox'>
            <button type="submit">Sign up</button>
          </div>
        <div className='group'>
            <a href="#">Forgot password</a>
            <a href="/login">Sign in</a>
          </div>
      </form>
      </div>
      </div>
  );
};

export default RegisterPage;
