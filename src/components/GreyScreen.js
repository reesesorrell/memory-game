import "../styles/GreyScreen.css"

const hideGreyScreen = (e) => {
    e.target.style.display = "none";
}

export default function GreyScreen() {
    return (
        <div className="GreyScreen" onClick={hideGreyScreen}>
            Click to begin!
        </div>
    )
}