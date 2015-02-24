testCase("String trim test", {
	setUp : function() {
		this.string = "a string";
	},
	"test trim should remove leading white-space" : function() {
		assert("should remove leading white-space",
				this.string === "   a string".trim());
	},
	"test trim should remove trailing white-space" : function() {
		assert("should remove trailing white-space",
				this.string === "a string   ".trim());
	}
});