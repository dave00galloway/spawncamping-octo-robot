function assert(message, expr) {
	if (!expr) {
		throw new Error(message);
	}
	assert.count++;
	return true;
}
assert.count = 0;

var date = new Date(2009, 11, 5);
try {
	assert("%Y should return full year", date.strftime("%Y") === "2009");
	assert("%m should return month", date.strftime("%m") === "10");
	assert("%d should return date", date.strftime("%d") === "02");
	assert("%y should return year as two digits", date.strftime("%y") === "09");
	assert("%F should act as %Y-%m-%d", date.strftime("%F") === "2009-10-02");
	console.log(assert.count + " tests OK");
} catch (e) {
	console.log("Test failed: " + e.message);
}