import { useEffect, useState } from 'react';
import Sidebar from '../../components/organisms/siderbar/Sidebar';
import { SettingsOutline } from 'react-ionicons';
import logo from '../../assets/logo.svg';
import './home.scss';

function HomeView() {
  const [nombreUsuario, setNombreUsuario] = useState('');

  useEffect(() => {
    //const storedName = "Jose Pereira";
    const storedName = localStorage.getItem('nameUser');
    if (storedName) {
      setNombreUsuario(storedName);
    }
  }, [nombreUsuario]);

  return (
    <div className="main">
      <Sidebar />
      <nav className="nav">
        <div className='nav-app-description'>
          <img src={logo} className='nav-app-description_logo' alt="Logo" />
          <h1 id='name_app'>SGP</h1>
        </div>
        <div className='div-name-user'>
          <div className='name-user' id='name-user'>
          {nombreUsuario}
          </div>
          <SettingsOutline
            color={'#ffffff'}
            title="setting"
            height="28px"
            width="28px"
            style={{ display: 'flex' }}
            cssClasses="icon-setting"
          />
        </div>
      </nav>
      <div className="container">
        <h2 className='title-page'>Home</h2>
        <section className='section section-facturas'>
          No hay facturas.
        </section>
      </div>
    </div>
  );
}

export default HomeView;
