import fetchData from "../customHooks/fetch";

const Start = ({ userName, setUserName, setGameData, setIsStarted }) => {

    return (
        <>
            <h1>Hangman</h1>
            <input type="text" placeholder="Enter your name" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={async () => {
                const gameData = await fetchData('https://api.retailsystem.io/challenge/api/Hangman/start', 'POST', { playerName: userName });
                setGameData(gameData);
                setIsStarted(true);
            }}>Start</button>
        </>
    )
}

export default Start;