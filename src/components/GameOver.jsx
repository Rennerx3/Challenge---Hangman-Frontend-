import ranking from "../helpers/rank";

const GameOver = ({ realTimeData, getData, setRankingData }) => {

    return (
        <>
            <h2>Game Over</h2>
            <p className="guessed">Guessed Letters: {realTimeData.guessedLetters}</p>
            <p className="guessed">Correct Word: {getData.word}</p>
            <button onClick={() => window.location.reload()}>Play Again</button>
            <button onClick={() => ranking(setRankingData)}>See Ranking</button>
        </>
    )

}

export default GameOver;