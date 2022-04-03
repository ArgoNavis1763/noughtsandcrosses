export default class Player {
  constructor(name, XOValue = '', wins = 0, losses = 0, draws = 0) {
    this.name = name;
    this.XOValue = XOValue;
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
  }

  addWin() {
    this.wins += 1;
    return this.wins;
  }

  addLoss() {
    this.losses += 1;
    return this.losses;
  }

  addDraw() {
    this.draws += 1;
    return this.draws;
  }
}
