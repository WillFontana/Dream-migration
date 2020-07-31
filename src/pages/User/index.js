import React, { useState, useEffect } from 'react';

import { MdHourglassEmpty } from 'react-icons/md';
import { AiOutlineWarning } from 'react-icons/ai';
import { GiFemale, GiMale } from 'react-icons/gi';

import MaleDummy from '../../assets/dummy/male.png';
import FemaleDummy from '../../assets/dummy/female.png';

import api from '../../services/api';
import Auth from '../../services/auth';

import { useParams } from 'react-router-dom';

export default function User() {

  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    setError(false)
    setLoading(true);
    api.get(`?acao=retornaDadosUsuarioJSON&cdusuario=${id}`)
      .then(response => {
        response.data ? setUser(response.data.dados) : setError(true);
        setAuthed(Auth);
      }).then(() => {
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, [authed, id]);

  return (
    <>
      <section className="profile-card">
        {loading &&
          <>
            <div className="main-card-loader">
              <MdHourglassEmpty className="svg-icon" />
              <p className="loader-text">
                Carregando
            </p>
            </div></>}
        {error &&
          <>
            <div className="main-card-error">
              <AiOutlineWarning className="svg-icon" />
              <p className="text">
                Não foi possível encontrar o usuário
          </p>
            </div></>}
        {user &&
          <>
            <div className="card-info">
              <div className="card-header">
                <img src={user.txfoto1} onError={(e) => user.txsexo === "masculino" ? e.target.src = MaleDummy : e.target.src = FemaleDummy} alt={user.txnome} className="image-fluid" />
                <div className="user-main-info">
                  <p className="user-name typo-headline typo-color-secondary typo-informal typo-fw-bold">
                    {user.txnome || `Nome não informado`}
                  </p>
                  <p className="text typo-body-2 typo-color-dark-secondary typo-formal typo-fw-bold _mt-sm">
                    {user.fltipo = 1 ? `Cozinhando por amor` : `Cozinhando pela profissão`}
                  </p>
                  <div className="gender-box _mt-sm">
                    <GiMale className={`svg-icon ${user.txsexo === 'masculino' && '-active'}`} />
                    <GiFemale className={`svg-icon ${user.txsexo === 'feminino' && '-active'}`} />
                  </div>
                </div>
              </div>
              <div className="user-descript">
                <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
                  {user.txemail || `Sem email de contato`}
                </p>
                <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
                  {user.txcidade && `${user.txcidade}`}{user.txestado && `/${user.txestado}`}
                </p>
              </div>
            </div>
            {user.idfacebook &&
              <a href={`https://www.facebook.com/${user.idfacebook}`} target="_blank" rel="noopener noreferrer" className="outline-link">
                Conhecer no facebook
              </a>
            }
          </>}
      </section>
      <section className="user-calendar"></section>
    </>
  );
}
