import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import { MdRadioButtonUnchecked, MdRadioButtonChecked } from 'react-icons/md';

import { AiOutlineWarning } from 'react-icons/ai';

import Message from '../../components/Message';

import api from '../../services/api';

function Login() {

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userSession, setUserSession] = useState(false);

  const [error, setError] = useState({
    message: false,
    pass: '',
    user: '',
  });

  const history = useHistory();

  const [message, setMessage] = useState(null);

  async function HandleLogin(e) {
    e.preventDefault();
    setError(false);

    if (!userLogin) {
      setMessage({
        Icon: AiOutlineWarning,
        Title: 'Campo em branco',
        Message: 'É necessário infomar seu usuario',
        Status: 'error'
      });
      setError({ message: true, user: '-error' });
      setTimeout(() => {
        setError({ message: false });
      }, 6000);
      return;
    }
    if (!userPassword) {
      setMessage({
        Icon: AiOutlineWarning,
        Title: 'Campo em branco',
        Message: 'É necessário infomar sua senha',
        Status: 'error'
      });
      setError({ message: true, pass: '-error' });
      setTimeout(() => {
        setError({ message: false });
      }, 6000);
      return;
    }

    try {
      const response = await api.get('?acao=retornaUsuariosJSON');

      const { dados } = response.data;

      console.log(dados);

      if (userSession) {
        localStorage.setItem('@app:username', 'Will');
        localStorage.setItem('@app:usertoken', 'Abcdsad');
      }
      window.location.reload(false);

    } catch (error) {

    }
  }



  return (
    <>
      {error.message && <Message
        icon={message.Icon}
        title={message.Title}
        message={message.Message}
        status={message.Status} />}

      <section className="login-screen">
        <div className="component-container">
          <div className="container-header">
            <h2 className="typo-color-secondary typo-fw-bold typo-display-2">
              Seja bem vindo!
            </h2>
          </div>
          <div className="container-body">
            <form className="main-form grid-component -fr-1 -xl-row-gap" onSubmit={HandleLogin}>
              <div className="grid-card text-box">
                <input id="txname" name="txname" type="text" onKeyUp={e => setUserLogin(e.target.value)} className={`input ${error.user} ${userLogin && '-used'}`} />
                <div className="label">
                  <div className="text">
                    Seu email de acesso
                  </div>
                </div>
              </div>
              <div className="grid-card text-box">
                <input id="txsenha" name="txsenha" type="password" onKeyUp={e => setUserPassword(e.target.value)} className={`input ${userPassword && '-used'}`} />
                <div className="label">
                  <div className="text">
                    Sua senha
                  </div>
                </div>
              </div>
              <div className="grid-card _d-flex _jc-between _al-center">
                <label htmlFor="flloged" className="switch-svg">
                  <input type="checkbox" onChange={() => setUserSession(!userSession)} className="input" name="flloged" id="flloged" />
                  <MdRadioButtonUnchecked className="svg-icon -uncheck" />
                  <MdRadioButtonChecked className="svg-icon -check" />
                  <p className="text typo-fw-caption typo-color-dark-secondary">
                    Manter logado
                  </p>
                </label>
                <button type="submit" className="main-button">
                  <p className="text">
                    Entrar
                  </p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;