import Header from './components/Header.js';
import GreyScreen from './components/GreyScreen.js';
import "./styles/App.css"
import MusicCard from "./components/MusicCard";
import "./styles/Main.css"
import { useEffect, useState } from 'react';
import background from "./background1.png";


function App() {
  const [note, setNote] = useState('C');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [notesArray, setNotesArray] = useState(['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']);
  const [cardsFlipped, setCardsFlipped] = useState(false);

  const possibleNotes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  //on component did mount, shuffle notes array
  useEffect(() => {
    setNotesArray(shuffleArray(notesArray));
    const randomNote = possibleNotes[Math.floor(Math.random() * possibleNotes.length)];
    setNote(randomNote);
  }, []);

  async function selectNoteCard(e) {
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
    setCardsFlipped(true);
    await delay(3000);
    setCardsFlipped(false);
    await delay(500); //include delay so that new cards can't be seen while being flipped
    const randomNote = possibleNotes[Math.floor(Math.random() * possibleNotes.length)];
    setNotesArray(shuffleArray(notesArray));
    setNote(randomNote)
  }

  const shuffleArray = (array) => {
    let newArray = array.slice();
    for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
  }

  function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
  }
  
  let noteCards = [];
  for (let i = 0; i < notesArray.length; i++) {
      noteCards.push(<MusicCard key={i} note={notesArray[i]} onNoteClick={selectNoteCard} cardsFlipped={cardsFlipped}/>)
  }

  return (
    <div className="App">
      <GreyScreen />
      <Header note={note} score={score} highScore={highScore}/>
      <div className='background' style={{ backgroundImage: `url(${background})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}></div>
      <div className="Main">
            {noteCards}
        </div>
    </div>
  );
}

export default App;
