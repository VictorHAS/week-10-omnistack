import React, { useState, useEffect } from 'react';

import api from 'services/api';
import DevItem from 'components/DevItem';
import DevForm from 'components/DevForm';
import { Container, Sidebar, DevList } from './styles';

interface Dev {
  _id: any;
  avatar_url: string;
  github_username: string;
  name: string;
  techs: string[];
  bio: string;
}

interface Data {
  github_username: string;
  techs: string;
  lat: number;
  long: number;
}

export default function App() {
  const [devs, setDevs] = useState<Dev[]>([]);

  useEffect(() => {
    async function loadDevs() {
      const { data } = await api.get('/devs');

      setDevs(data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data: Data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <Container>
      <Sidebar>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </Sidebar>
      <main>
        <DevList>
          {devs?.map((dev) => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </DevList>
      </main>
    </Container>
  );
}
