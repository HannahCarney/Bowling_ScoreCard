var Bowling = function() {
  this.player = "Player1";
  this.pins = 10;
  this.attempt = 1;
  this.strikes = [];
  this.spares = [];
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
	   this.strikes.push(10 * (this.strikes.length + 1))
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

	if (this.pins === 0 && this.spares.length === 0)
	{
	    this.spares.push(10 * (this.spares.length + 1))

	}

	else if (this.pins === 0 && this.spares.length >= 1)
	{
		this.spares.push(this.pins1)
		this.spares.push(10)
	    
	
	}
	
	else if (this.attempt === 1)
    {
        this.pins1 = (10 - this.pins)
    }

    else if (this.attempt === 2 && this.strikes.length === 1)
    {
        this.pins2 = ((10 - this.pins) - this.pins1)
        this.strikes.push(this.pins1 + this.pins2)
        this.strikes.push(this.pins1 + this.pins2)
    }

    else if (this.attempt === 2 && this.strikes.length === 2)
    {
    	this.pins2 = ((10 - this.pins) - this.pins1)
    	this.strikes.push(this.pins1)
    	this.strikes.push(this.pins1 + this.pins2)
    	this.strikes.push(this.pins1 + this.pins2)

    }
	
	else if (this.attempt === 2 && this.pins != 0)
	{
		this.pins2 = ((10 - this.pins) - this.pins1)
		this.spares.push(this.pins1)
		this.resetSpareCount()
		this.resetStrikeCount()
	}



};



Bowling.prototype.totalScore = function() {

	if (this.strikes.length != 0)
	{
      this.addStrikes()

	}

	else if (this.spares.length != 0)
	{
	  this.addSpares()
	
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

Bowling.prototype.resetStrikeCount = function() {
  if (this.pins != 10)
   this.strikes = []

};

Bowling.prototype.resetSpareCount = function() {
 if (this.pins != 10)
  this.spares = []
	
};


Bowling.prototype.addStrikes = function() {

	  this.bonusPointsStrike = (eval(this.strikes.join('+')));
};

Bowling.prototype.addSpares = function() {

	  this.bonusPointsSpare = (eval(this.spares.join('+')));
};


