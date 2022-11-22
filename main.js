const team = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 54 },
    { firstName: "Dave", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "Cook", age: 20 },
  ],
  _games: [
    { opponent: "Chelsea", teamPoints: 34, opponentPoints: 29 },
    { opponent: "Arsenal", teamPoints: 4, opponentPoints: 8 },
    { opponent: "Liverpool", teamPoints: 12, opponentPoints: 50 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
/*
[
  { firstName: 'Pete', lastName: 'Wheeler', age: 54 },
  { firstName: 'Dave', lastName: 'Smith', age: 27 },
  { firstName: 'Bob', lastName: 'Cook', age: 20 },
  { firstName: 'Bugs', lastName: 'Bunny', age: 76 }
]
*/

team.addGame("Titans", 100, 98);
console.log(team._games);
/*
[
  { opponent: 'Chelsea', teamPoints: 34, opponentPoints: 29 },
  { opponent: 'Arsenal', teamPoints: 4, opponentPoints: 8 },
  { opponent: 'Liverpool', teamPoints: 12, opponentPoints: 50 },
  { opponent: 'Titans', teamPoints: 100, opponentPoints: 98 }
]
*/