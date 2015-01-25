var Bowling = function() {
  this.player = "Player1";
  this.pins = 10;
  this.attempt = 1;
  this.strike = 0;
  this.spare = 0
  this.frameNo = 1;
  this.totalPoints = 0;
  this.bonusPointsStrike = 0;
  this.bonusPointsSpare = 0;
  this.pins1 = 0;
  this.pins2 = 0
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
	else if (this.attempt === 1)
	{
		this.pins1 = (10 - this.pins)
	}
	else if (this.attempt === 2)
	{
		this.pins2 = ((10 - this.pins) - this.pins1)
	}

};


Bowling.prototype.totalScore = function() {

	if (this.strike != 0)
	{
	   (this.bonusPointsStrike = (10 * this.strike) + this.bonusPointsStrike) 
	   this.strike = 0 
	}

	else if (this.spare != 0)
	{
		(this.bonusPointsSpare = (10 * this.spare) + this.bonusPointsSpare)
		this.spare = 0
	
	}

	else
	{
		if (this.bonusPointsSpare > 0)
		{
		  (this.totalPoints = (10 - this.pins + (this.bonusPointsSpare)) + (this.pins1) + this.totalPoints)
		   this.bonusPoints = 0
		}
		else if (this.bonusPointsStrike > 0)
		{
		  (this.totalPoints = (10 - this.pins + (this.bonusPointsStrike)) + (this.pins1 + this.pins2) + this.totalPoints)
		   this.bonusPoints = 0
		}
	}

};



