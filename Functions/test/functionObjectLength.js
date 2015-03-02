TestCase("Number of formal ie named parameters for", {
	"test assert is 2 " : function() {
		assertEquals(2, assert.length); // using the named function expression in 5point3.js, not sure where the default is coming from
	},
	"test document getElementById is 1" : function() {
		assertEquals(1, document.getElementById.length);
	},
	"test console log is 0" : function() {
		assertEquals(0, console.log.length); // In Firebug
	}
	//,
//	"test custom assert can have 3" : function (){
//		assert("custom assert should have 3 params",assert.length,"custom val");
//	}
});
// pretty horrific limitation in that the test has to start with the word 'test'...
// 
// TestCase("FunctionTest", {
// "test function length property" : function() {
// assertEquals(2, assert.length);
// assertEquals(1, document.getElementById.length);
// assertEquals(0, console.log.length); // In Firebug
// }
// });

