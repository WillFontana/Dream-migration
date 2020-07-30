import React, { useState, useEffect } from 'react';

import { MdHourglassEmpty } from 'react-icons/md';
import { AiOutlineWarning } from 'react-icons/ai';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function User() {

  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    api.get(`users/${id}`)
      .then(response => {
        setUser(response.data);
      }).then(() => {
        setError(false);
        setLoading(false);
      }).catch(err => {
        console.log(err);
        setLoading(false);
        setError(true);
      })
  }, [id]);


  return (
    <>
      <section className="profile-card">
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
        {user &&
          <>

            <div className="card-info">
              <div className="card-header">
                <img src={user.avatar_url} alt="" className="image-fluid" />
                <div className="user-name">
                  <p className="typo-sub-heading typo-color-dark-secondary typo-informal typo-fw-bold">
                    {user.name || `Nome não informado`}
                  </p>
                </div>
              </div>
              <div className="user-descript">
                <p className="typo-body-2 typo-color-dark-secondary typo-formal typo-fw-bold">
                  {user.job ? `Trabalho: ${user.job}` : `Trabalho: Não informado`}
                </p>
                <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
                  {user.company ? `Empresa: ${user.company}` : `Empresa: Não informado`}
                </p>
                <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
                  {user.bio ? user.bio : `Sem informações do perfil`}
                </p>
              </div>
            </div>
            {user.html_url &&
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="outline-link">
                Visitar perfil
        </a>
            }
          </>}
      </section>
      <section className="user-calendar">
            
      </section>
    </>
  );
}
