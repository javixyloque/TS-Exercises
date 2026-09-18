export class Kata {
     static getCount(str: string): number {
          let vowels = ['a','e','i','o','u']
          
          let temp = str.split('');
          let counter = 0;
          temp.forEach(letter => {
               vowels.forEach(vo=> {
                    if (vo == letter) {
                         counter++
                         return;
                    } 
               });

          });
          return counter;
     }
}

console.log (Kata.getCount('Hola'));