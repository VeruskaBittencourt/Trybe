let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiornumero = 0;
for (let i=0; i<=9; i++){
 if(numbers[i]>maiornumero) {
     maiornumero=numbers[i]
 }
}
console.log(maiornumero);