

export default function Header({note, score, highScore}) {
    return (
        <div className="Header">
            <div className="title">Music Memory Game</div>
            <div className="note-description">Current note is: {note}</div>
            <div className="score-display">Score: {score}</div>
            <div className="high-score-display">High Score: {highScore}</div>
        </div>
    )
}