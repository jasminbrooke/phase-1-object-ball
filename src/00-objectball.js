const gameObject = () => {
    const game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSanga Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    return game
}

const numPointsScored = (player) => {
    let gameData = gameObject()
    if (gameData.away.players[player])
        return gameData.away.players[player]["points"]
    else 
        return gameData.home.players[player]["points"]
}

const shoeSize = (player) => {
    let gameData = gameObject()
    if (gameData.away.players[player])
        return gameData.away.players[player]["shoe"]
    else 
        return gameData.home.players[player]["shoe"]
}

const teamColors = (team) => {
    let gameData = gameObject()
    if (gameData.away.teamName === team)
        return gameData.away["colors"]
    else 
        return gameData.home["colors"]
}

const teamNames = () => {
    let arr = []
    for (let team in gameObject()) {
        arr.push(gameObject()[team].teamName)
    }
    return arr
}

const playerNumbers = (team) => {
    let gameData = gameObject()
    let teamType = gameData.away.teamName === team ? 'away' : 'home'
    let arr = []
    for(let player in gameData[teamType].players) { 
        arr.push(gameData[teamType].players[player]['number'])
    }
    return arr
}

const playerStats = (player) => {
    let gameData = gameObject()
    if (gameData.away.players[player])
        return gameData.away.players[player]
    else 
        return gameData.home.players[player]
}

const bigShoeRebounds = () => {
    let gameData = gameObject()
    let arr1 = []
    for(let player in gameData.home.players) { 
        arr1.push(gameData.home.players[player]['shoe'])
    }
    let arr2 = []
    for(let player in gameData.away.players) { 
        arr2.push(gameData.away.players[player]['shoe'])
    }
    let newArray = [...arr1, ...arr2]
    let biggestShoe = Math.max(...newArray)

    for(let player in gameData.away.players) {
        if (gameData.away.players[player]["shoe"] === biggestShoe)
            return gameData.away.players[player]['rebounds']
    }
    for(let player in gameData.home.players) {
        if (gameData.home.players[player]["shoe"] === biggestShoe)
            return gameData.home.players[player]['rebounds']
    }
}