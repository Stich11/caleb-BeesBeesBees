var Bee = function() {
 Bee.prototype = new Grub();
 this.age = 5;
 this.color = "yellow";
 this.food = Bee.prototype.food;
 this.eat = Bee.prototype.eat;
 this.job = 'keep on growing'
};
