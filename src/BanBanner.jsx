import React from 'react';
import './BanBanner.css';

const BanBanner = ({ banList, unbanGenre }) => {
    return (
        <div className="ban-container">
            <h2>Banned Genres</h2>
            <ul className = "ban-list">
                {banList.map((genre) => (
                <li
                className = "ban-item"
                key={genre}
                onClick={() => unbanGenre(genre)}>
                    {genre}
                </li>
                ))}
            </ul>
        </div>
    )
};

export default BanBanner;