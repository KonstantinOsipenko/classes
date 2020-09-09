class Unit {
  constructor(type, health, distance, power) {
    this.type = type;
    this.health = this.maxHealth = health;
    this.distance = distance;
    this.power = power;
  }
  isReadyToMove() {
    return this.distance > 0;
  }
  isReadyToFight() {
    return this.health > 0;
  }
  restore() {
    this.health = this.maxDistance;
    this.distance = this.maxDistance;
  }
  clone() {
    return new Unit(this.type, this.maxHealth, this.maxDistance, this.power);
  }
}
