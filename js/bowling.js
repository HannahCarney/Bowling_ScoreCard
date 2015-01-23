var Bowling = function() {
  this.player = "Player1";
  this.pins = 10;
  this.turn = this.player;
};

Bowling.prototype.newTurn = function() {

	this.pins = 10;
};

Bowling.prototype.pinsDown = function(number) {
	if (number === 10)
	{
		this.stike = true
		this.pins = 0
		this.newTurn()
	}
	else
	{
	    this.pins = (this.pins - number);
	}
};