// let  arr2 = [25 , 35 , 12 , 65 ,78 ,20 ]
// // for (index =   12 ,  78 ,20 ;index % 2; indeix++  ){
// //    let arr = [`${index}`]
// //    console.log(arr);
// // }




let newNumber = []   
let number = [55,45,8,46,34,45,67,98,4,5,4]
for (i = 0; i < number.length; i++){
    if (number[i] % 2 == 0) {
        newNumber.push(number[i])      
    }
  
}
console.log(number);
console.log(newNumber);
