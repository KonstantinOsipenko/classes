const saboteur = [new Unit("Saboteur", 500, 1000, 550)];
saboteur.push(saboteur[0].clone());
saboteur.push(saboteur[0].clone());
saboteur.push(saboteur[0].clone());
const saboteurSquad = new Squad(saboteur);
console.log(saboteur);
const archer = [new Unit("archer", 500, 150, 300)];
archer.push(archer[0].clone());
archer.push(archer[0].clone());
const archerSquad = new Squad(archer);
console.log(archer);
console.log(archerSquad.isReadyToFight(), saboteurSquad.isReadyToMove());
