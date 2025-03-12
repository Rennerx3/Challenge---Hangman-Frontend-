import fetchData from "../customHooks/fetch";

const handleGuess = async (guess, gameData, setRealTimeData) => {

    try {

        const url = `https://api.retailsystem.io/challenge/api/Hangman/${gameData.id}/guess`

        const data = await fetchData(url, 'POST', { letter: guess });

        setRealTimeData(data);

    } catch (error) {
        console.log(error);
    }

};

export default handleGuess;