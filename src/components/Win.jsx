import ranking from "../helpers/rank";

const Win = ({ getData, realTimeData, setRankingData }) => {

    console.log('realTimeData', realTimeData);
    

    return (
        <>
            <h2>Game Won</h2>
            <p className="guessed">Congratulations: {getData.playerName}</p>
            <p className="guessed">Guessed Letters: {realTimeData.guessedLetters}</p>
            <button onClick={() => window.location.reload()}>Play Again</button>
            <button onClick={() => ranking(setRankingData)}>See Ranking</button>
        </>
    )

}

export default Win;