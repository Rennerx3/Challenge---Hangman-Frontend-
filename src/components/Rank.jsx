const Rank = ({ rankingData }) => {

    return (
        <>
            <h2>Ranking</h2>
            <ul>
                {rankingData.map((data, index) => <li key={index}>{data.playerName} - {data.attemptsLeft}</li>)}
            </ul>
            <button onClick={() => window.location.reload()}>Play Again</button>
        </>
    )

}

export default Rank;