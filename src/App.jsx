import { useState } from 'react'
import './App.css'
import Display from './Display'
import History from './History'
import BanBanner from './BanBanner'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const App = () => {
  const [game, setGame] = useState(null);
  const [history, setHistory] = useState([]);
  const [banList, setBanList] = useState([]);

  const fetchGame = async () => {
    const page = Math.floor(Math.random() * 20) + 1;
    const url = `https://api.rawg.io/api/games?key=${ACCESS_KEY}&page_size=20&page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const games = shuffleData(data.results)

      const filteredGame = games.find(game => game.genres.every(genre => !banList.includes(genre.name)));

      if (filteredGame) {
        setGame(filteredGame);
        setHistory([...history, filteredGame]);
      }
      else {
        setGame({ name: 'No games found', background_image: '', genres: [], released: '' });
      }
    }
    catch (err) {
      console.error(err);
    }
  };

  const banGenre = (genre) => {
    if (!banList.includes(genre)) {
    setBanList([...banList, genre]);
    }
  };

  const unbanGenre = (genre) => {
    setBanList(banList.filter(banned => banned !== genre));
  }

  const shuffleData = (data) => {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }

  return (
    <div className="outer">
      <History history={history} />
      <div className="main-content">
        <h1>Discover New Games</h1>
        <button onClick={fetchGame}>Discover Game</button>
        <Display game={game} onBan={banGenre} />
      </div>
      <BanBanner banList={banList} unbanGenre={unbanGenre} />
    </div>
  )
}

export default App
