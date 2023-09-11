const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HR = 4;
const FULL_TIME_HR = 8;
const WAGE_PER_HR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

//UC-1
// let empCheck = Math.floor(Math.random() * 10) % 2;
// if (empCheck == IS_ABSENT) {
//     console.log("Employee is Absent");
// }
// else {
//     console.log("Employee is present");
// }
//UC-2
let emphrs = 0;
// empCheck = Math.floor(Math.random() * 10) % 3;
// switch (empCheck) {
//     case IS_PART_TIME: emphrs = PART_TIME_HR;
//         break;
//     case IS_FULL_TIME: emphrs = FULL_TIME_HR
//         break;
//     case IS_ABSENT: emphrs = IS_ABSENT;
// }
// let empWage = emphrs * WAGE_PER_HR;
// console.log(empWage);
//UC-3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HR;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HR;
            break;
        case IS_ABSENT:
            return 0;
    }
    // return emphrs;
}
let totalEmphrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
totalEmphrs = getWorkingHours(empCheck);
let totalEmpWage = emphrs * WAGE_PER_HR;
console.log(totalEmpWage);
//UC-4
let hrs = 0;
// for (let i = 0; i < NUM_OF_WORKING_DAYS; i++) {
//     empCheck = Math.floor(Math.random() * 10) % 3;
//     getWorkingHours(empCheck);
//     hrs += emphrs
// }
totalEmpWage = hrs * WAGE_PER_HR;
console.log(totalEmpWage)
function CalculateDailyWage(emphrs) {
    return emphrs * WAGE_PER_HR;
}

// UC-5
let totalEmpHours = 0;
let totalWorkingDays = 0;
const DailyWageArray = new Array();

while (totalEmpHours < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmphrs += getWorkingHours(empCheck);
    DailyWageArray.push(CalculateDailyWage(totalEmphrs));
}

let empWage1 = CalculateDailyWage(totalEmphrs);
console.log("Total days :" + totalWorkingDays + " Total Hours : " + totalEmphrs + " Emp Wages " + empWage1);
console.log(DailyWageArray)
const wagesPerDay = DailyWageArray.includes(160)
console.log("Wages Per Day " + wagesPerDay)

//UC7

//A
totalempwage = 0;
function sum(dailyWage) {
    totalempwage += dailyWage;
}
DailyWageArray.forEach(sum);
console.log(totalempwage);
//B
let dayCount = 0;
function mapDayWithWage(dailyWage) {
    dayCount++;
    return dayCount + "  " + dailyWage;
}
let mapWithDayArray = DailyWageArray.map(mapDayWithWage);
console.log(DailyWageArray);
//C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullTimeWageArr = mapWithDayArray.filter(fullTimeWage);
console.log(fullTimeWageArr);
//D
console.log(mapWithDayArray.find(fullTimeWage));
//E
console.log(fullTimeWageArr.every(fullTimeWage));
//F
function partTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log(mapWithDayArray.some(partTimeWage));
//G
function totolDayWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        numOfDays++;
    }
    return numOfDays;
}
console.log(DailyWageArray.reduce(totolDayWorked, 0));