import React from 'react';
import './Display.css';

const Display = ({ game, onBan }) => {
    if (!game) return null;

    return (
        <div className="display-container">
            <h2>{game.name}</h2>
            <img src={game.background_image}
            alt={game.name}
            className='image'
            />
            <p>Released: {game.released}</p>
            <p>Genres: {game.genres.map((genre) => 
                <span className="genre" key={genre.id} onClick={() => onBan(genre.name)}>{genre.name}</span>)}</p>
        </div>
    )
};

export default Display;