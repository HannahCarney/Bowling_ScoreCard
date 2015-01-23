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
  });

});