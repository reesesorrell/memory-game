import "../styles/MusicCard.css"


export default function MusicCard({note, onNoteClick, cardsFlipped}) {
    let highOrLow = Math.round(Math.random()) + 2;
    let audioObject = new Audio(require("../music-notes/" + note + highOrLow + ".mp3"));
    audioObject.volume = 0.2;
    function play() {
        audioObject.play();
    }
    function stopPlay() {
      audioObject.pause();
      audioObject.currentTime = 0;
    }
    return (
        <div className="scene scene--card">
        <div className={`card ${cardsFlipped ? "is-flipped" : ''}`}>
          <div className="card__face card__face--front " id={note} onMouseOver={play} onMouseOut={stopPlay} onClick={onNoteClick} muted="muted"></div>
          <div className="card__face card__face--back">{note}</div>
        </div>
      </div>
    )
}