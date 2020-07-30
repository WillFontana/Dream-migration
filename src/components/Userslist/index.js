import React, { useState, useEffect } from 'react';
import { MdHourglassEmpty } from 'react-icons/md';
import { AiOutlineWarning } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Userslist() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

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
      ).then(() => { setLoading(false); setError(false) })
      .catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      })
  }, []);

  return (
    <div className="userlist">
      {loading &&
        <><div className="main-card-loader">
          <MdHourglassEmpty className="svg-icon" />
          <p className="loader-text">
            Carregando
            </p>
        </div></>}
      {error &&
        <><div className="main-card-error">
          <AiOutlineWarning className="svg-icon" />
          <p className="text">
            Não foi possível encontrar o usuário
          </p>
        </div></>}
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