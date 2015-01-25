var Bowling = function() {
  this.player = "Player1";
  this.pins = 10;
  this.attempt = 1;
  this.strike = 0;
  this.spare = 0
  this.frameNo = 1;
  this.totalPoints = 0;
  this.bonusPoints = 0;
};

Bowling.prototype.newTurn = function() {
    if (this.attempt === 1)
    {
        this.attempt += 1
    }
    else if (this.attempt === 2)
    {	
      this.attempt -= 1
      this.totalScore()
      this.maxFrames()
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
	    this.isASpare()
	    this.newTurn()
	}
};

Bowling.prototype.maxFrames = function() {

	if (this.frameNo === 10)
	{
		this.frameNo = 1
		return "This is the end of the game"
	}
	else 
	{
		this.frameNo += 1
	}

};

Bowling.prototype.isASpare = function() {

	if (this.pins === 0)
	{
		this.spare += 1
	}

};


Bowling.prototype.totalScore = function() {

	if (this.strike != 0)
	{
	   (this.bonusPoints = (10 * this.strike) + this.bonusPoints) 
	   this.strike = 0 
	}

	else if (this.spare != 0)
	{
		(this.bonusPoints = (10 * this.spare) + this.bonusPoints)
		this.spare = 0
	
	}

	else
	{
		(this.totalPoints = (10 - this.pins + (this.bonusPoints)) + (10 - this.pins) + this.totalPoints)
		this.bonusPoints = 0
	}

};



