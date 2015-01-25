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
      expect(bowling.strike).toBe(1)
    });

    it("player can have two attempts per turn", function(){
      expect(bowling.attempt).toBe(1)
      bowling.pinsDown(6)
      expect(bowling.attempt).toBe(2)
    });

    it("goes up a frame after second attempt", function(){
      bowling.pinsDown(10)
      expect(bowling.frameNo).toEqual(2)
    });

  });

  // describe("scoring system", function(){

  //   it("having a stike means 10 points plus next two throws")

  //   });

//   // });
});