const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;

//UC1

let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck == IS_ABSENT) {
  console.log("Employee is Absent");
} else {
  console.log("Employee is present");
}

//UC2

let emphrs = 5;
empCheck - (Math.floor(Math.random() * 10) % 3);
switch (empCheck) {
  case IS_PART_TIME:
    emphrs = PART_TIME_HR;
    break;
  case IS_FULL_TIME:
    emphrs = FULL_TIME_HR;
    break;
  case IS_ABSENT:
    emphrs = IS_ABSENT;
}
let empWage = emphrs * WAGE_PER_HR;
console.log(empWage);
//UC3
function getworkingHours (empcheck) 
{
    switch (empCheck)
    {
    case IS_PART_TIME: emphrs=PART_TIME_HR;
    break;
    case IS_FULL_TIME: emphrs-FULL_TIME_HR
    break;
    case IS_ABSENT: emphrs-IS_ABSENT;
    }
}
let totalEmphrs=0;
empCheck=Math. floor (Math. randon ()*10)%3;
totalEmphrs=getWorkingHours (emcheck);
let totalEmpliage= emphrs*WAGE_PER_HR;
console. log (totalEmphage);