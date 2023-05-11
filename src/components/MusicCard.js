import "../styles/MusicCard.css"
import sound from "../music-notes/Eb2.mp3"


export default function MusicCard({note, onClick}) {
    let highOrLow = Math.round(Math.random()) + 2;
    function play() {
        new Audio(sound).play();
    }
    return (
        <div className="MusicCard" /*onMouseOver={play}*/ onClick={play} value={note}></div>
    )
}