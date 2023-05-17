import "../styles/GreyScreen.css"

const hideGreyScreen = (e) => {
    e.target.style.display = "none";
}

export default function GreyScreen() {
    return (
        <div className="GreyScreen" onClick={hideGreyScreen}>
            A note will be chosen at the top for you to find.
            <br />To hear each note hover over the box with your cursor.
            <br />Notes are shuffled between each round.
            <br />*Make sure your computer volume is on*
            <br />(Check your browser sound settings if not playing)
            <br />Click to begin!
        </div>
    )
}