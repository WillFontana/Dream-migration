import React, { useState, useEffect } from 'react';
import { MdHourglassEmpty } from 'react-icons/md';
import { AiOutlineWarning } from 'react-icons/ai';

import MaleDummy from '../../assets/dummy/male.png';
import FemaleDummy from '../../assets/dummy/female.png';

import { Link } from 'react-router-dom';
import api from '../../services/api';

function Userslist() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);


  useEffect(() => {
    setLoading(true);
    api.get(`?acao=retornaUsuariosJSON`)
      .then(response => {
        setUsers(response.data.dados);
      }).then(() => {
        setError(false);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
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
      {users.map(user => (
        <Link key={user.cdusuario} onClick={e => e.target.classList.add = "-active"} to={`/usuarios/${user.cdusuario}`} className="list-item">

          <img src={user.txfoto1} onError={(e) => user.txsexo === "masculino" ? e.target.src = MaleDummy : e.target.src = FemaleDummy} alt={user.txnome} className="list-image" />

          {/* <img src={user.txfoto1 || user.txsexo === "masculino" ? MaleDummy : FemaleDummy} alt={user.txnome} className="list-image" />

          {
            user.txfoto1
            ?
            <img src={user.txfoto1} alt={user.txnome} className="list-image" />
            :
            <img src={user.txsexo === "masculino" ? MaleDummy : FemaleDummy} alt={user.txnome} className="list-image" />
          } */}

          <p className="typo-body-2 typo-formal typo-color-dark-secondary">
            {user.txnome}
          </p>
        </Link>
      ))
      }
    </div >
  );
}

export default Userslist;