var HoneyMakerBee = function() {
  HoneyMakerBee.prototype = new Bee();
  this.age = 10;
  this.job = "make honey";
  this.color = HoneyMakerBee.prototype.color;
  this.food = HoneyMakerBee.prototype.food;
  this.eat = HoneyMakerBee.prototype.eat;
  this.honeyPot = 0;
  this.makeHoney = function(){
    this.honeyPot = this.honeyPot + 1
    return this.honeyPot
  };
  this.giveHoney = function(){
    this.honeyPot = this.honeyPot - 1
    return this.honeyPot
  };
};
