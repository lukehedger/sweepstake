const randomInt = require('random-int')

const MAX_TEAMS = 4

const teams = [
  {
    name: "Egypt",
    group: "A"
  },
  {
    name: "Russia",
    group: "A"
  },
  {
    name: "Saudi Arabia",
    group: "A"
  },
  {
    name: "Uruguay",
    group: "A"
  },
  {
    name: "Iran",
    group: "B",
  },
  {
    name: "Morocco",
    group: "B",
  },
  {
    name: "Portugal",
    group: "B",
  },
  {
    name: "Spain",
    group: "B",
  },
  {
    name: "Australia",
    group: "C",
  },
  {
    name: "Denmark",
    group: "C",
  },
  {
    name: "France",
    group: "C",
  },
  {
    name: "Peru",
    group: "C",
  },
  {
    name: "Argentina",
    group: "D",
  },
  {
    name: "Croatia",
    group: "D",
  },
  {
    name: "Iceland",
    group: "D",
  },
  {
    name: "Nigeria",
    group: "D",
  },

  {
    name: "Brazil",
    group: "E",
  },
  {
    name: "Costa Rica",
    group: "E",
  },
  {
    name: "Serbia",
    group: "E",
  },
  {
    name: "Switzerland",
    group: "E",
  },

  {
    name: "Germany",
    group: "F",
  },
  {
    name: "Mexico",
    group: "F",
  },
  {
    name: "South Korea",
    group: "F",
  },
  {
    name: "Sweden",
    group: "F",
  },

  {
    name: "Belgium",
    group: "G",
  },
  {
    name: "England",
    group: "G",
  },
  {
    name: "Panama",
    group: "G",
  },
  {
    name: "Tunisia",
    group: "G",
  },

  {
    name: "Colombia",
    group: "H",
  },
  {
    name: "Japan",
    group: "H",
  },
  {
    name: "Poland",
    group: "H",
  },
  {
    name: "Senegal",
    group: "H",
  },
]

const players = [
  {
    name: "Dan",
    teams: 0,
  },
  {
    name: "Fred",
    teams: 0,
  },
  {
    name: "Lewis",
    teams: 0,
  },
  {
    name: "Luke",
    teams: 0,
  },
  {
    name: "Mali",
    teams: 0,
  },
  {
    name: "Sam",
    teams: 0,
  },
  {
    name: "Stef",
    teams: 0,
  },
  {
    name: "Vaughn",
    teams: 0,
  },
]

const draw = {}

const drawTeam = playerIndex => {
  const teamIndex = randomInt(0, teams.length - 1)

  draw[teams[teamIndex].name] = players[playerIndex].name

  teams.splice(teamIndex, 1)

  players[playerIndex].teams += 1

  if (players[playerIndex].teams >= MAX_TEAMS) {
    players.splice(playerIndex, 1)
  }
}

(() => {
  [...Array(32)].map(() => {
    drawTeam(randomInt(0, players.length - 1))
  })

  console.log(draw)
})()

// const drawButton = () => {
//   const playerIndex = randomInt(0, players.length - 1)
//
//   if (teams.length) return // End of draw!
//
//   // This should re-render after a draw
//   render() {
//     return (
//       <div>
//         <h1>
//           {players[playerIndex].name}
//         </h1>
//
//         <button onClick={() => this.drawTeam(playerIndex)}>
//           Draw {players[player]}
//         </button>
//       </div>
//     )
//   }
// }
