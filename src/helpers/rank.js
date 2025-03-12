import fetchData from "../customHooks/fetch";

const ranking = async (setRankingData) => {

    try {

        const resData = await fetchData('https://api.retailsystem.io/challenge/api/Hangman/ranking', 'GET');

        setRankingData(resData);

    } catch (error) {
        console.log(error);
    }

}

export default ranking;