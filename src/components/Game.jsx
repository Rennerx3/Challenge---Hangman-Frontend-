import { useEffect, useState } from "react";
import Rank from "./Rank";
import GameOver from "./GameOver";
import Win from "./Win";
import fetchData from "../customHooks/fetch";
import handleGuess from "../helpers/handleGuess";
import handleGame from "../helpers/handleGame";

const Game = ({ gameData }) => {

    const [getData, setGetData] = useState({})
    const [realTimeData, setRealTimeData] = useState({})
    const [rankingData, setRankingData] = useState([])
    const [letter, setLetter] = useState('')

    useEffect(() => {

        if (gameData.id) {
            try {

                handleGame(gameData, setGetData);

            } catch (error) {
                console.log(error);

            }
        }

    }, [gameData]);

    console.log('getData', getData);
    

    return (
        <>

            {realTimeData.isFinished === true ? '' : <>
                <h2>Guess '{getData.playerName}'</h2>
                <div className="game-main">
                    <span className="guessed">{realTimeData.guessedLetters || getData.guessedLetters || 'Loading...'}</span>
                    <input type="text" value={letter} placeholder="Enter your guess" onChange={(e) => setLetter(e.target.value)} onKeyDown={(e) => {e.key === 'Enter' && handleGuess(letter, gameData, setRealTimeData); setLetter('')}}/>
                    <button onClick={() => {
                        handleGuess(letter, gameData, setRealTimeData);
                        setLetter('');
                    }}>Guess</button>
                </div>
                <p style={{fontSize: '24px'}} className="guessed">Incorrect Letters: {realTimeData.incorrectLetters || getData.incorrectLetters}</p>
                <p style={{fontSize: '24px'}} className="guessed">Attempts Left: {realTimeData.attemptsLeft || getData.attemptsLeft || 'Loading...'}</p>
            </>
            }

            {rankingData.length == 0 && realTimeData.attemptsLeft === 0 && realTimeData.isWon === false && <GameOver realTimeData={realTimeData} getData={getData} setRankingData={setRankingData} />}

            {rankingData.length == 0 && realTimeData.isWon && <Win getData={getData} realTimeData={realTimeData} setRankingData={setRankingData} />}

            {rankingData.length > 0 && <Rank rankingData={rankingData} />}

        </>
    )

}

export default Game;