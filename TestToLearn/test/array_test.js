TestCase("ArrayTest", {
  "test array splice should modify array": function () {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);
    assertEquals([1, 2, ], arr);
  },
  "test array splice returns removed items from array" :function(){
	    var arr = [1, 2, 3, 4, 5];
	    var result = arr.splice(2, 3);
	    assertEquals([3,4,5], result);	  
  }
});