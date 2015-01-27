describe("Bowling", function() {

  var rollMany, rollSpare, rollStrike;

  rollMany = function (rolls, pins) {
    var i;
    for (i = 0; i < rolls; i++) {
      this.roll(pins);
    }
  };

  rollSpare = function () {
    this.roll(5);
    this.roll(5);
  };

  rollStrike = function () {
    this.roll(10);
  };

  beforeEach(function () {
    this.game = new Game();
  });

  describe('Gutter Game', function() {
    
    it("should score 0 given all rolls hit no pins", function () {
      rollMany.call(this.game, 20, 0);
      expect(this.game.score()).toEqual(0);
    });
  });

  describe("Game when all rolls hit only 1 pin", function () {
    
    it("should score 20 given all rolls hit 1 pin", function() {
      rollMany.call(this.game, 20, 1);
      expect(this.game.score()).toEqual(20);
    });
  });

  describe("Game with one spare", function () {

    it("should score 20 given the 1st 3 rolls hit 5 pins", function () {
      rollSpare.call(this.game);
      this.game.roll(5);
      rollMany.call(this.game, 17, 0)
      expect(this.game.score()).toEqual(20);
    });
  });

  describe("Game with one strike", function () {

    it("should score 26 followed by 2 rolls hitting 5 & 3", function (){
      rollStrike.call(this.game);
      this.game.roll(5);
      this.game.roll(3);
      rollMany.call(this.game, 17, 0)
      expect(this.game.score()).toEqual(26);
    });
  });

  describe('Perfect Game', function () {

    it("should score 300 given 12 rolls hit 10 pins each", function () {
      rollMany.call(this.game, 12, 10);
      expect(this.game.score()).toEqual(300);
    });
  });

  describe("A full game", function () {

    it("should score 110", function () {
      this.game.roll(7);
      this.game.roll(2);
      this.game.roll(6);
      this.game.roll(1);
      rollSpare.call(this.game);
      this.game.roll(3);
      this.game.roll(4);
      rollSpare.call(this.game);
      rollStrike.call(this.game);
      this.game.roll(5);
      this.game.roll(3);
      this.game.roll(5);
      this.game.roll(0);
      this.game.roll(6);
      this.game.roll(2);
      this.game.roll(7);
      this.game.roll(3);
      this.game.roll(5);
      expect(this.game.score()).toEqual(110);

    });
  });
});