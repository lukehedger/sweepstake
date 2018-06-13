function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const el_button = document.getElementById('button')
const el_player = document.getElementById('player')
const el_team = document.getElementById('team')

const DRAW = {}

const MAX_TEAMS = 4

const PLAYERS = [
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

const TEAMS = [
  {
    name: "Egypt",
    group: "A"
  },
  {
    name: "Russia",
    group: "A"
  },
  {
    name: "SaudiArabia",
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
    name: "CostaRica",
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
    name: "SouthKorea",
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

let playerIndex = randomInt(0, PLAYERS.length - 1)
let teamIndex

// TEMP
let count = 0

function step(ts) {
  // TODO - Just do this over a certain amount of time (say, ~3s)
  if (count < 32) {
    count += 1

    teamIndex = randomInt(0, TEAMS.length - 1)

    el_team.innerHTML =  TEAMS[teamIndex].name

    return window.requestAnimationFrame(step)
  } else {
    DRAW[TEAMS[teamIndex].name] = PLAYERS[playerIndex].name

    // TODO - Render the PLAYER against the TEAM
    document.getElementById(TEAMS[teamIndex].name).innerHTML = PLAYERS[playerIndex].name

    TEAMS.splice(teamIndex, 1)

    PLAYERS[playerIndex].teams += 1

    if (PLAYERS[playerIndex].teams >= MAX_TEAMS) {
      PLAYERS.splice(playerIndex, 1)
    }

    playerIndex = randomInt(0, PLAYERS.length - 1)

    setNextPlayer()

    // TEMP
    count = 0
  }
}

function drawTeam() {
  // End of draw!
  if (!TEAMS.length) {
    // const plyrs = Object.keys(DRAW).reduce((acc, cur) => {
    //   if (!acc[DRAW[cur]]) {
    //     acc[DRAW[cur]] = 0
    //   }
    //
    //   acc[DRAW[cur]] += 1
    //
    //   return acc
    // }, {})
    //
    // console.log(plyrs)

    button.disabled = true

    return
  }

  window.requestAnimationFrame(step)
}

function init() {
  setNextPlayer()
}

function setNextPlayer() {
  el_player.innerHTML = `Up next &rarr; ${PLAYERS[playerIndex].name}`
}
