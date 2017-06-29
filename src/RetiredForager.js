var RetiredForagerBee = function() {
  RetiredForagerBee.prototype = new ForagerBee();
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
  this.forage = function(){
    return "I am too old, let me play cards instead"
  };
  this.food = RetiredForagerBee.prototype.food;
  this.eat = RetiredForagerBee.prototype.eat;
  this.treasureChest = RetiredForagerBee.prototype.treasureChest;
  this.gamble = function(){
    this.treasureChest = this.treasureChest + 1
    return this.treasureChest
  };

};