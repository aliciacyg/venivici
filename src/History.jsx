import React from 'react';
import './History.css';

const History = ({ history }) => {
    return (
        <div>
            <h2>History</h2>
            <div className="history-container">
            <ul className="history-list">
                {history.map((game, index) => (
                <li key={index} className="history-item">
                    {game.background_image && (
                    <img src={game.background_image}
                            alt={game.name} className='history-thumbnail'/>
                        )}
                    <div>
                        <p>{game.name}</p>
                        <p>{game.released}</p>
                    </div>
                </li>))}
            </ul>
            </div>
        </div>
    )
};

export default History;