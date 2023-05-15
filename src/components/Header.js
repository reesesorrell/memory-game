import "../styles/Header.css"

export default function Header({note, score, highScore}) {
    return (
        <div className="Header">
            <div className="title">Perfect Pitch Test</div>
            <div className="note-description">Find this note: <div className="note">{note}</div></div>
            <div className="score-board">
                <div className="score-display">Score: {score}</div>
                <div className="high-score-display">High Score: {highScore}</div>
            </div>
        </div>
    )
}