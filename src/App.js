import { Client } from 'boardgame.io/react';
import { Warstro } from './Game';
import WarstroBoard from './board';

const App = Client({ 
    game: Warstro, 
    board: WarstroBoard,
});

export default App;