const getAllGames = () => (

  fetch(`${process.env.REACT_APP_SERVER_URL}/games`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .catch(err => console.log(err))

)

export default getAllGames