const axios = require('axios')

const api_key = 'b512e9592e15949b0751aca63689953c66d1ca53d788ab3a24ad491c6d49e58f'
const url = "https://api.thegamesdb.net/"

module.exports = coverArtService = {

  async lookupGames(gameName) {

    const path = "Games/ByGameName"
    const query = gameName
    const endpoint = `${url}${path}?apikey=${api_key}&name=${query}`

    console.log('starting game lookup')
    try {
      const response = await axios.get(endpoint)
      //console.log(response);
      return response.data.data.games
    } catch (error) {
      console.error(error);
      return error
    }

  },

  filterByPlatform(games) {
    //filter by platform = 1 (PC games)
    const pcGames = games.filter(game => game.platform === 1)

    //if any PC games are found return the first one, otherwise just return the first game that was originally found
    return pcGames.length ? pcGames[0] : games[0]

  },

  async lookupArt(gameID) {
    const path = "Games/Images"
    const query = gameID
    const endpoint = `${url}${path}?apikey=${api_key}&games_id=${query}`
    console.log(endpoint)

    console.log('starting art lookup')

    try {
      const response = await axios.get(endpoint)
      //console.log(response);
      return response.data.data
    } catch (error) {
      console.error(error);
    }

  },

  async getCoverArtURL(gameName) {
    try {
      const gameResults = await this.lookupGames(gameName)
      const selectedGameID = this.filterByPlatform(gameResults).id
      const gameArt = await this.lookupArt(selectedGameID)
      const baseURL = gameArt.base_url.original
      const allImages = gameArt.images[selectedGameID]
      const frontBoxArt = allImages.filter(img => img.type === 'boxart' && img.side === 'front')[0].filename
      console.log(baseURL + frontBoxArt)
      return baseURL + frontBoxArt
    } catch (error) {
      console.log(error)
    }

  }
}

//coverArtService.getCoverArtURL('Tomb Raider')