
// for and while

// for(let i = 1; i<=100; i++) {
//     console.log(i);
// }


// for(let i =11; i<=33; i++) {
//     console.log(i);
// }

// for(let i = 0; i<=50; i++ ) {
//     console.log(i*2);
// }

// let sum = 0;
// for(let i =1; i<=100; i++) {
//     sum += i
// }
// console.log(sum);




//for для массивов

// let arr = [1, 2, 3, 4, 5];
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//     result += arr[i];
// }
// console.log(result)


// for in

// let obj = {green: 'Зеленый', red:'Красный', blue:'Голубой'};
// for(key in obj){
//     console.log(key, obj[key]);
// }


// let obj = {'Коля': 200, 'Вася':300, 'Петя': 400};

// for(key in obj){
//     if (key == 'Коля'){
//         console.log(key + ' - Зарплата '+ obj[key]+' долларов');
//     }
    
// }

// задачи


// let num = [2, 5, 9, 15, 0, 4];

// for (let i in num) {
//     if (num[i] > 3 && num[i] < 10){
//       console.log(num[i])  
//     }
// }
   

// let num = [0, 1, -3, 2, 2, 3, -1, -4, -2]
// let sum = 0;
// for (let i in num){
//     if (num[i] >= 0){
//         sum += num[i]; 
//     }
// }
// console.log(sum)


// let num = [1, 2, 5, 9, 4, 13, 4, 10]
// for (let i in num){
//     if (num[i] == 4)
//     break
//         console.log('Есть!')
// }



// let mas = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < mas.length; i++) {
//   let num = String(mas[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let str = '-';
// for (var i = 0; i < num.length; i++){
//     str += num[i]+'-';
// }
// console.log(str);

// let days = ["пн", 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// for (let i in days) {
//     if (i == '5' || i == '6') {
//         console.log(days[i].bold());
//     }
//     else {
//         console.log(days[i]);
//     }
// }

// let days = ["пн", 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let day = 'вт'
// for (let i in days) {
//     if (days[i] == day) {
//         console.log(days[i].italics());
//     }
//     else {
//         console.log(days[i]);
//     }
// }

// let n = 1000;
// let num = 0;
// while( n > 50){
//     n /= 2; num++;
// }
// console.log(num)