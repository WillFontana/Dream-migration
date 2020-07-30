import React, { useState } from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

export default function User() {

  const { id } = useParams();

  const [username, setUserName] = useState('');
  const [userpicture, setUserPicture] = useState('');
  const [userjob, setUserJob] = useState('');
  const [usercompany, setUserCompany] = useState('');
  const [userdescription, setUserDescription] = useState('');
  const [userurl, setUserUrl] = useState('');

  async function fetchData() {
    try {
      const { data } = await api.get(`users/${id}`);
      setUserName(data.name)
      setUserPicture(data.avatar_url)
      setUserJob(data.job)
      setUserCompany(data.company)
      setUserDescription(data.bio)
      setUserUrl(data.html_url)
    } catch (error) {
      console.warn(error);
    }

  }

  fetchData();

  return (
    <>
      <section className="profile-card">
        <div className="card-info">
          <div className="card-header">
            <img src={userpicture} alt="" className="image-fluid" />
            <div className="user-name">
              <p className="typo-sub-heading typo-color-dark-secondary typo-informal typo-fw-bold">
                {username || `Nome não informado`}
              </p>
            </div>
          </div>
          <div className="user-descript">
            <p className="typo-body-2 typo-color-dark-secondary typo-formal typo-fw-bold">
              {userjob ? `Trabalho: ${userjob}` : `Trabalho: Não informado`}
            </p>
            <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
              {usercompany ? `Empresa: ${usercompany}` : `Empresa: Não informado`}
            </p>
            <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
              {userdescription ? userdescription : `Sem informações do perfil`}
            </p>
          </div>
        </div>
        {userurl &&
          <a href={userurl} target="_blank" rel="noopener noreferrer" className="outline-link">
            Visitar perfil
        </a>
        }
      </section>
      <section className="user-calendar">

      </section>
    </>
  );
}
