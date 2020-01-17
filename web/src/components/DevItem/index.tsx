import React from 'react';

type Dev = {
  dev: {
    avatar_url: string;
    github_username: string;
    name: string;
    techs: string[];
    bio: string;
  };
};

export default function DevItem({ dev }: Dev) {
  return (
    <li>
      <header>
        <img src={dev.avatar_url} alt="" />
        <div>
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(', ')}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </li>
  );
}
