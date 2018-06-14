const el_button = document.getElementById('button')
const el_player = document.getElementById('player')
const el_team = document.getElementById('team')

const DRAW = {}
// const DRAW_MAX_TIME = 1000
const DRAW_MAX_TIME = 2000
const MAX_TEAMS = 4

const POT_PLAYERS = [
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

const POT_TEAMS = [
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

const state = {
  drawInterval: 75,
  lastTime: 0,
  playerIndex: randomInt(0, POT_PLAYERS.length - 1),
  startTime: 0,
  teamIndex: null,
  timer: 0,
}

function drawTeam() {
  // They think it's all over...
  if (!POT_TEAMS.length) {
    // ...it is now
    button.disabled = true

    return
  }

  // start the draw
  window.requestAnimationFrame(drawTease)
}

function drawTease(ts) {
  // init timer start time
  if (!state.startTime) state.startTime = ts

  // update timer progress
  state.timer = ts - state.startTime

  if (state.timer < DRAW_MAX_TIME) {
    // calculate delta
    const delta = ts - state.lastTime

    // throttle draw
    if (delta > state.drawInterval) {
      // pick a team
      state.teamIndex = randomInt(0, POT_TEAMS.length - 1)

      // render the team name to the DOM
      el_team.innerHTML =  POT_TEAMS[state.teamIndex].name

      // update last time
      state.lastTime = ts
    }

    // keep guessing
    return window.requestAnimationFrame(drawTease)
  } else {
    // draw the final team!
    DRAW[POT_TEAMS[state.teamIndex].name] = POT_PLAYERS[state.playerIndex].name

    // render player name against team
    document.getElementById(POT_TEAMS[state.teamIndex].name).innerHTML = POT_PLAYERS[state.playerIndex].name

    // remove drawn team from pot
    POT_TEAMS.splice(state.teamIndex, 1)

    // increment player's team count
    POT_PLAYERS[state.playerIndex].teams += 1

    // remove player from pot if max teams allocated
    if (POT_PLAYERS[state.playerIndex].teams >= MAX_TEAMS) {
      POT_PLAYERS.splice(state.playerIndex, 1)
    }

    // choose next player to draw
    state.playerIndex = randomInt(0, POT_PLAYERS.length - 1)

    // render next player to DOM
    setNextPlayer()

    // reset timer
    state.lastTime = 0
    state.startTime = 0
    state.timer = 0
  }
}

function easeOutQuad(t) {
  return t * (2 - t)
}

// HERE WE GO, HERE WE GO, HERE WE GO 🎵
function init() {
  // set the first player to draw
  setNextPlayer()
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function setNextPlayer() {
  el_player.innerHTML = `Up next &rarr; ${POT_PLAYERS[state.playerIndex].name}`
}

/*

     -   \O                                     ,  .-.___
   -     /\                                   O/  /xx\XXX\
  -   __/\ `                                  /\  |xx|XXX|
     `    \, ()                              ` << |xx|XXX|
^^^^^^^^`^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 */
