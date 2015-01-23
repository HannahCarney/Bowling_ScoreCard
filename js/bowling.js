var Bowling = function() {
  this.player = "Player1";
  this.pins = 10;
  this.attempt = 1;
  this.strike = 0;
};

Bowling.prototype.newTurn = function() {
    if (this.attempt === 1)
    {
        this.attempt += 1
    }
    else if (this.attempt === 2)
    {
      this.attempt -= 1
	  this.pins = 10
	}
};


Bowling.prototype.pinsDown = function(number) {

	if (number === 10)
	{
		this.strike += 1
		this.attempt += 1
		this.newTurn()
	}
	else
	{
	    this.pins = (this.pins - number)
	    this. newTurn()
	}
};