// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
var date1 = dayjs('2023-05-08')
$('#1a').text(date1.format('MMM D, YYYY'));

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
var date2 = dayjs('2027-01-01')
var date2Week = date2.format('[It will be a] dddd')
$('#2a').text(date2Week);

// TODO: 3. What is the current time in the format: hours:minutes:seconds
var currentTime = dayjs().format('h:mm:ss a')
$('#3a').text(currentTime);

// TODO: 4. What is the current Unix timestamp?
var UnixTime = dayjs().unix()
$('#4a').text(UnixTime);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unitTimestamp = dayjs(1318781876).format('MMM D, YYYY')
$('#5a').text(unitTimestamp)

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
var firstdate = dayjs('2027-05-04')
var seconddate = dayjs()
$('#6a').text(firstdate.diff(seconddate, 'day'))

