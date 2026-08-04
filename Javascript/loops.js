//for loop

// let a = 6
// for(let i=0;i<=10;i++){
// 	//console.log(i*2);
// 	console.log(`${i} * ${a} = ${i*a} `);
// }

//factorial

// function factorial(n) {

//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));

// //fibanocci series
// let a = 0 , b =1
// console.log(a , b)
// for (let j =0;j<7;j++){
// 	c = a+b;
// 	a = b
// 	b=c
// 	console.log(c)
// }

// prime number
function prime(){
	 let num = prompt("Enter a number")
	is_prime = true
	for ( let i =2;i<num; i++){
		if(num%i==0){
			is_prime = false
			alert("Not prime!!!")
			return
		}

	}
	if(is_prime){
		alert("Prime!!!")
		return
	}
}

let i =1
do{
	console.log(i)
	i++
}while(i<5)

	//array
let arr=[1,3,5,7,9]
for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}