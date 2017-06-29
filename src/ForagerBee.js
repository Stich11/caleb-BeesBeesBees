var ForagerBee = function() {
  ForagerBee.prototype = new Bee();
  this.age = 10;
  this.job = "find pollen";
  this.color = ForagerBee.prototype.color;
  this.food = ForagerBee.prototype.food;
  this.eat = ForagerBee.prototype.eat;
  this.canFly = true;
  this.treasureChest = [];
  this.forage = function(){
    this.treasureChest = this.treasureChest + 1
    return this.treasureChest
  };
};
