export const towerBuilder = (nFloors: number): string[] => {
  // build here
  let completo: string[] = [];
  for (let i = 1; i <= nFloors; i++) {
      let spaces: string = " ".repeat(nFloors - i);
      let stars: string = "*".repeat(2 * i - 1);
      completo.push(spaces + stars + spaces);
  }
  return completo;
}

console.log(towerBuilder(5));
console.log(towerBuilder(3));
