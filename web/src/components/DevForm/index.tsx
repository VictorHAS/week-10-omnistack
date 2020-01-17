import React, { useState, useEffect, FormEvent } from 'react';

import { InputBlock, InputGroup } from './styles';

export default function DevForm({ onSubmit }: { onSubmit: Function }) {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [lat, setLatitude] = useState(0);
  const [long, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await onSubmit({
      github_username,
      techs,
      latitude: lat,
      longitude: long,
    });

    setGithubUsername('');
    setTechs('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputBlock>
        <label htmlFor="github_username">Usuário do Github</label>
        <input
          name="github_username"
          id="github_username"
          required
          value={github_username}
          onChange={(e) => setGithubUsername(e.target.value)}
        />
      </InputBlock>

      <InputBlock>
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          required
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />
      </InputBlock>

      <InputGroup>
        <InputBlock>
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            required
            value={lat}
            onChange={(e) => setLatitude(e.target.valueAsNumber)}
          />
        </InputBlock>

        <InputBlock>
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            required
            value={long}
            onChange={(e) => setLongitude(e.target.valueAsNumber)}
          />
        </InputBlock>
      </InputGroup>

      <button type="submit">Salvar</button>
    </form>
  );
}
