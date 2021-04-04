let UserName = prompt("Welcome to Workout World, What's you name?");
console.log(UserName + " is a "+ typeof UserName);

let UserAge =  prompt("To give you the best workout, enter your age?");
UserAge = parseInt(UserAge);
console.log(UserAge + " is a "+ typeof UserAge);

let Workout = prompt("What's your favorite workout? choose from the suggested ones",'Bodybuilding, Crossfit, Calisthenics');
console.log(Workout + " is a "+ typeof Workout);

let DaysNum = prompt("How many days you workout during a week?");
DaysNum = parseInt(DaysNum);
console.log(DaysNum + " is a "+ typeof DaysNum);

alert("Your name is >> "+ UserName + " / and your age is >> "+ UserAge + " / and your favorite workout is >> "+ Workout + " / you workout "+ DaysNum + " days per week")

