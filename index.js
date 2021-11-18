/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 // Your code here
function createEmployeeRecord(row) {
	return {
		firstName: row[0],
		familyName: row[1],
		title: row[2],
		payPerHour: row[3],
		timeInEvents:[],
		timeOutEvents:[],
	}
}

function createEmployeeRecords(arr) {
	
	return arr.map(employee => {
		return createEmployeeRecord(employee);
	})
}

function createTimeInEvent(datestamp) {
	const [date, hour] = datestamp.split(" ");        
	this.timeInEvents.push({type: "TimeIn", hour: parseInt(hour, 10), date});
	console.log(this.timeInEvents[0]); 
    return this.timeInEvents;
}

function createTimeOutEvent(datestamp) {
	const [date, hour] = datestamp.split(" ");        
	this.timeOutEvents.push({type: "TimeOut", hour: parseInt(hour, 10), date});
	return this.timeOutEvents;   
}

function hoursWorkedOnDate(date) {
	let timeIn = this.timeInEvents.filter(e => e.date === date);
	let timeOut = this.timeOutEvents.filter(e => e.date === date);
	return parseInt(timeOut[0].hour - timeIn[0].hour) / 100;
}

function wagesEarnedOnDate(em, date) {
	let hours = hoursWorkedOnDate.call(this, em, date);
	return hours * em.payPerHour;
}

function calculatePayroll(ems) {
	return ems.map(em => allWagesFor(em))
	.reduce((current, next) => current + next);
}

function findEmployeeByFirstName(srcArray, firstName) {
	srcArray.forEach(emp => {
		if (emp.firstName === firstName) {
			return emp.familyName;
		}
	});
	return srcArray[0];
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}