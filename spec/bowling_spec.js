describe("Bowling", function(){

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("by default", function(){

    it("starts with one player", function(){
      expect(bowling.player).toBe("Player1");
    });

    it("starts with 10 pins", function(){
      expect(bowling.pins).toEqual(10);
    });

    it("starts on frame 1", function(){
      expect(bowling.frameNo).toEqual(1)
    });
  });

  describe("on players turn", function(){

    it("can hit pins", function() {
      bowling.pinsDown(9)
      expect(bowling.pins).toEqual(1)
    });

    it("can have strikes", function(){
      bowling.pinsDown(10)
      expect(bowling.bonusPointsStrike).toEqual(10)
    });

    it("can have spares", function(){
      bowling.pinsDown(7)
      bowling.pinsDown(3)
      expect(bowling.bonusPointsSpare).toEqual(10)
    });

    it("player can have only two attempts per turn", function(){
      expect(bowling.attempt).toBe(1)
      bowling.pinsDown(6)
      expect(bowling.attempt).toBe(2)
    });

    it("goes up a frame after second attempt", function(){
      bowling.pinsDown(10)
      expect(bowling.frameNo).toEqual(2)
    });

  });

  describe("scoring system", function(){

    it("a strike waits for the next score to be tallied", function(){
      bowling.pinsDown(10)
      expect(bowling.totalPoints).toEqual(0)
    });

    it("a spare waits for the next score to be tallied", function(){
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      expect(bowling.totalPoints).toEqual(0)
    });

    it("after a strike the next two rolls are added", function(){
      bowling.pinsDown(10)
      bowling.pinsDown(3)
      bowling.pinsDown(2)
      expect(bowling.totalPoints).toEqual(20)
    });

    it("after a spare the next one roll is added", function(){
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      bowling.pinsDown(1)
      expect(bowling.totalPoints).toEqual(21)
    });

    it("after two strikes in a row", function() {
      bowling.pinsDown(10)
      bowling.pinsDown(10)
      bowling.pinsDown(3)
      bowling.pinsDown(1)
      expect(bowling.totalPoints).toEqual(42)
    });

    it("after two spares in a row", function() {
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      bowling.pinsDown(5)
      bowling.pinsDown(1)
      bowling.pinsDown(1)
      expect(bowling.totalPoints).toEqual(28)
    });
  });

});