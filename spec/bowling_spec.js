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
  });

  describe("on players turn", function(){

    it("player can take a turn", function(){
      expect(bowling.turn).toBe(bowling.player);
    });

    it("can hit pins", function() {
      bowling.pinsDown(9)
      expect(bowling.pins).toEqual(1)
    });

    it("can have a strike", function(){
      bowling.pinsDown(10)
      expect(bowling.stike).toBe(true)
    });
  });

});