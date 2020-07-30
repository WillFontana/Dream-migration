import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
// import { Container } from './styles';

function Userslist() {

  const [load, setLoad] = useState(false);

  // Remover após a api
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');

  useEffect(() => {
    api.get('users/willfontana')
      .then(
        response1 => {
          setUser1(response1.data);
        }
      ).then(() => api.get('/users/rafabruno')).then(
        response2 => {
          setUser2(response2.data);
        }
      ).then(() => setLoad(false))
      .catch(err => {
        console.log(err);
        setLoad(false);
      })
  }, []);

  return (
    <div className="userlist">
      {load && <span>Carregando usuarios</span>}
      <Link to={`/usuarios/willfontana`} className="list-item">
        <img src={user1.avatar_url} alt="" className="list-image" />
        <p className="typo-body-2 typo-formal typo-color-dark-secondary">
          {user1.name}
        </p>
      </Link>
      <Link to={`/usuarios/rafabruno`} className="list-item">
      <img src={user2.avatar_url} alt="" className="list-image" />
        <p className="typo-body-2 typo-formal typo-color-dark-secondary">
          {user2.name}
        </p>
      </Link>
    </div>
  );
}

export default Userslist;