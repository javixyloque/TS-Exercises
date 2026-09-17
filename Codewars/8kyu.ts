export function bmi(weight: number, height: number): string {
   const bmi = weight/(height**2)
   if (bmi <= 18.5) {
        return "Underweight";
   } else if (bmi <=25.0) {
        return "Normal";
   } else if (bmi <=30) {
        return "Overweight";
   } else {
        return "Obese";
   }
}

// console.log("Resultados tests función bmi")
// console.log(bmi(-40,1.80));
// console.log(bmi(100, 1.80));
// console.log("--------------\n\n");

export function jumbler(indices: number[]): number {
    var contador = 0;
    while (indices[0]>0) {
        var primerNumero = indices[0];
        if (primerNumero === undefined) {
            return -1; 
        }
        var aux = indices[primerNumero];
        var extraido = indices.splice(primerNumero, 1);
        indices.unshift(extraido[0])
        contador++;
        console.log("Array en iteración "+contador+" es - "+ indices)

    }

    return contador;
}


// console.log(jumbler([3,2,0,1]));

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