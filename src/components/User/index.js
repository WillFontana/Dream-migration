import React from 'react';
import UserPic from '../../assets/user.svg'
export default function User() {
  return (
    <section className="profile-card">
      <div className="card-header">
        <img src={UserPic} alt="" className="image-fluid" />
        <div className="user-name">
          <p className="typo-sub-heading typo-color-dark-secondary typo-informal typo-fw-bold">
            Willyan Fontana do Prado
          </p>
        </div>
      </div>
      <div className="user-descript">
        <p className="typo-body-2 typo-color-dark-secondary typo-formal typo-fw-bold">
          Trabalho: Front End
        </p>
        <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
          Empresa: Agencia Dream
        </p>
        <p className="typo-body-1 typo-color-dark-secondary typo-formal typo-fw-regular">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vitae animi necessitatibus magni iure tempora repudiandae voluptates? Autem magni mollitia, laborum, odio sit ducimus voluptate reiciendis quaerat rerum suscipit vitae.
        </p>
      </div>
      <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" className="outline-link">
        Visitar perfil
      </a>
    </section>
  );
}
