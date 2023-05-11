import Header from './Header.js';
import Main from './Main.js';
import { useState } from 'react';


function App() {
  const [note, setNote] = useState('C');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const selectNoteCard = (note) => {

  }

  return (
    <div className="App">
      <Header note={note}/>
      <Main />
    </div>
  );
}

export default App;
