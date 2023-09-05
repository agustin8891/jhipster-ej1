import React from 'react';

interface CharacterProps {
  name: string;
  gender: string;
  species: string;
  status: string;
  image: string;
}

const Character: React.FC<CharacterProps> = ({ name, gender, species, status, image }) => {
  return (
    <div className="card cardCharacter">
      <img src={image} className="card-img-top" alt="Character" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Species: {species}</p>
        <p className="card-text">Status: {status}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Character;
