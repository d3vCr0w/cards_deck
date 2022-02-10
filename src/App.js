import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayersForm from './components/PlayersForm';
import Game from './components/Game';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<PlayersForm />}></Route>
          <Route path='/game' element={<Game />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
