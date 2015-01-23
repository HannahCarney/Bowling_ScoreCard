describe("Bowling", function(){

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("be default", function(){

    it("starts with one player", function(){
      expect(bowling.player).toEqual(1)
    });

  });

});