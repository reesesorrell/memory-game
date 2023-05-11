import Header from './components/Header.js';
import Main from './components/Main.js';
import { useState } from 'react';


function App() {
  const [note, setNote] = useState('C');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const possibleNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  const selectNoteCard = (e) => {
    let selectedNote = e.target.id;
    if(selectedNote == note) {
      setScore(score + 1);
      if(score + 1 > highScore) {
        setHighScore(score+1);
      }
    }
    else {
      setScore(0);
    }

    const randomNote = possibleNotes[Math.floor(Math.random() * possibleNotes.length)];
    setNote(randomNote)
  }

  return (
    <div className="App">
      <Header note={note} score={score} highScore={highScore}/>
      <Main onNoteClick={selectNoteCard}/>
    </div>
  );
}

export default App;
