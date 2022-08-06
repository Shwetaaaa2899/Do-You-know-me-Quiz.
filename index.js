let user = require('readline-sync');
console.log("----DO YOU KNOW ME?------LET'S FIND OUT----");
// console.log("How well do you know me ??");
console.log('\n');
let a = user.question("What is your name? ");
// console.log("\n");
console.log("Hello " + a);
console.log("\n LETS'S BEGIN. Just write a or b in Ans\n");
function play(qstn, ans) {
  let total = 0;
  let a = user.question(qstn);
  if (a.toLowerCase() == ans.toLowerCase()) {
    console.log("Correct :)")
    total += 1;

  }
  else {
    console.log("Wrong :( ");

  }
  console.log("Your score is: " + total);
  console.log("-----------------");
  return total;

}
// play("My fav food?", 'Icecream');


let arr = [{
  q1: "1.  My fav food?\na. IceCream\nb. Pizza\nAns: ",
  q2: 'a'
},
{
  q1: "2.  My fav place?\na. USA\nb. Korea\nAns: ",
  q2: "a"
},
{
  q1: " 3. Do I love React?\na. Yes\nb. No\nAns: ",
  q2: 'a'
},
{
  q1: " 4.  Do I love my friends?\na. Yes, a lot.\nb. No\nAns: ",
  q2: "a"
},
{
  q1: "5.  My fav. programming language?\na. Python3\nb. C++\nAns: ",
  q2: "a"
}]
let ans = 0
for (i = 0; i < arr.length; i++) {

  // play(arr[i].q1,arr[i].q2)
  ans += play(arr[i].q1, arr[i].q2)

}
console.log("Your final score is:", ans);
console.log("\n");


