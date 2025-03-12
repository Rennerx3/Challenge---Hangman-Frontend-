import fetchData from "../customHooks/fetch";

const handleGame = async (gameData, setGetData) => {
    const resData = await fetchData(`https://api.retailsystem.io/challenge/api/Hangman/${gameData.id}`, 'GET');

    setGetData(resData);

}

export default handleGame;