import MusicCard from "./MusicCard";

export default function Main({selectNoteCard}) {
    const notesArray = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleArray(notesArray);
    let noteCards = [];
    for (let i = 0; i < notesArray.length; i++) {
        noteCards.push(<MusicCard key={i} note={notesArray[i]} onClick={selectNoteCard} />)
    }
    return (
        <div className="Main">
            {noteCards}
        </div>
    )
}