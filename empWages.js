const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS=5;
//UC-1
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
}
else {
    console.log("Employee is present");
}
//UC-2
let emphrs = 100;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME: emphrs = PART_TIME_HR;
        break;
    case IS_FULL_TIME: emphrs = FULL_TIME_HR
        break;
    case IS_ABSENT: emphrs = IS_ABSENT;
}
let empWage = emphrs * WAGE_PER_HR;
console.log(empWage);
//UC-3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME: emphrs = PART_TIME_HR;
            break;
        case IS_FULL_TIME: emphrs = FULL_TIME_HR
            break;
        case IS_ABSENT: emphrs = IS_ABSENT;
    }
}
let totalEmphrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
totalEmphrs = getWorkingHours(empCheck);
let totalEmpWage = emphrs * WAGE_PER_HR;
console.log(totalEmpWage);
//UC-4
let hrs = 0;
for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    getWorkingHours(empCheck);
    hrs += emphrs
}
totalEmpWage = hrs * WAGE_PER_HR;
console.log(totalEmpWage)