let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
for (let i=0; i<=9; i++){
    result+=numbers[i];
}
console.log(result / 9);
if (result >20){
    console.log('Valor maior que 20')
}else {
    console.log('Valor menor ou igual a 20')
}