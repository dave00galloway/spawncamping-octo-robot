testCase("strftime test", {
	setUp : function() {
		this.date = new Date(2009, 9, 2, 22, 14, 45);
	},

	"test format specifier %Y" : function() {
		assert("%Y should return full year",
				this.date.strftime("%Y") === "2009");
	},
	"test format specifier %m" : function() {
		assert("%m should return month", this.date.strftime("%m") === "10");
	},
	"test format specifier %d" : function() {
		assert("%d should return date", this.date.strftime("%d") === "02");
	},
	"test format specifier %y" : function() {
		assert("%y should return year as two digits",
				this.date.strftime("%y") === "09");
	},
	"test format shorthand %F" : function() {
		assert("%F should be shortcut for %Y-%m-%d",
				Date.formats.F === "%Y-%m-%d");
	}
});