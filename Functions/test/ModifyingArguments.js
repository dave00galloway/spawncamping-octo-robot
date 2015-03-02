
var modify = function modify(a, b) {
	b = 42;
	arguments[0] = arguments[1];
	return a;
};

TestCase("FormalParametersArgumentsTest", {
	"test dynamic relationship" : function() {

		assertEquals(42, modify(1, 2));
	},
	"test no dynamic mapping for missing parameters" : function() {

		assertUndefined(modify(1));
	}

});
