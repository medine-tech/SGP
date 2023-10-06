
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";
import styleLogin from "./login.module.scss";
import logo from '../../../assets/logo.svg';
import cm from '../../../hooks/classMulti';
import axios from 'axios';
import Alert from '../../molecules/alert/Alert';
import submitDataLogin from './submitDataLogin';

 export const Login = () => {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();


  const handleButtonClick = async () => {
    const data = submitDataLogin()
    const response = await axios.post('https://implementaciones.pensanomica.com/clientes/flexio/API_Flexio/login_master', data);
  
    if (response.data.success) {
      setShowAlert(true);
      const token = response.data.data.api_token;
      const {nombre, apellido} = response.data.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('nameUser', `${nombre} ${apellido}`);
      setTimeout(() => { 
        navigate('/home')
      }, 1000)
    } else {
      alert("Datos incorrectos!");
    }
  };

  return (
    <>
      <div id="div_login" className={cm(
        styleLogin,
        ["box-login"],
        "xx1"
      )}>
        <img src={logo} alt="Logo" />
        <Input label="Correo electrónico" name="email_user" />
        <Input label="Contraseña" name="password" type="password" />
        <Button variant="primary" block={true} id='btn_enviar' onClick={handleButtonClick}>
          Enviar
        </Button>
      </div>
      {showAlert && (
        <Alert message="Operación exitosa" type="success" />
      )}
    </>
  );
}

export default Login;