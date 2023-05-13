import "../styles/MusicCard.css"


export default function MusicCard({note, onNoteClick}) {
    let highOrLow = Math.round(Math.random()) + 2;
    function play() {
        new Audio(require("../music-notes/" + note + highOrLow + ".mp3")).play();
    }
    return (
        <div className="MusicCard" onMouseOver={play} onClick={onNoteClick} id={note} muted="muted"></div>
    )
}