
var Game = function () {
  this._rolls = [];
  this._current = 0;
  this.totalPoints = 0;
};

Game.prototype.roll = function (pins) {
  
  roll = this._rolls[this._current++] = pins;
  return roll
};

Game.prototype.score = function () {
  var score = 0, i;
    hasBonusRoll = this._hasBonusRoll();
    scoringRolls = (hasBonusRoll) ? hasBonusRoll + 1 : this._rolls.length;

  for (i = 0; i < scoringRolls; i++) {
    if (this._isStrike(i)) {
      score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
    }
    else if (this._isSpare(i)) {
      score += 10 + this._rolls[i + 2];
      i ++;
    }
    else 
    {
      score += this._rolls[i];
    }
  }
   this.totalPoints = Number(score)
   return this.totalPoints
};

Game.prototype._isSpare = function (roll) {
  return (this._rolls[roll] + this._rolls[roll + 1] === 10);
};

Game.prototype._isStrike = function (roll) {
  return this._rolls[roll] === 10;
}

Game.prototype._hasBonusRoll = function () {
  var tenthFrame = this._rolls.length - 3, hasBonus;

  hasBonus = (this._isStrike(tenthFrame) || this._isSpare(tenthFrame));

  return (hasBonus) ? tenthFrame : null;
};



