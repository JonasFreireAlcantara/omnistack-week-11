import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('/ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro tente novamente');
    }
  }

  return (
    <div className='register-container'>
      <div className='content'>
        <section>
          <img src={logoImg} alt='Be The Hero' />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua
            ONG.
          </p>

          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041' />
            Voltar para login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder='Nome da ONG'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='E-mail'
          />
          <input
            placeholder='WhatsApp'
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />
          <div className='input-group'>
            <input
              placeholder='Cidade'
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <input
              placeholder='UF'
              value={uf}
              onChange={(event) => setUf(event.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className='button'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
