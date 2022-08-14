import React, { useContext } from 'react';
import InputText from '../components/UI/input/InputText';
import Button from '../components/UI/button/Button';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = event => {
    event.preventDefault()
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <InputText  type='text' placeholder='Введите логин'/>
        <InputText  type='password' placeholder='Введите пароль'/>
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default Login;