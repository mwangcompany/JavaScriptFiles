//functional flavor
let f = (a, b) => [].concat(...a.map(a => b.map(b => [].concat(a, b))));
let cartesian = (a, b, ...c) => b ? cartesian(f(a, b), ...c) : a;
let output = cartesian([1,2],[3,4,5],[6,7]);


// reduce function if needed
var numResults = function( array ){
	return array.reduce( function( a, b ){
		return a + b.length;
	}, 0);
}


var baseCase = function( array1, array2 ){
	var resultArray = [];
	var index = 0;
	for( var i=0; i<array1.length; i++ ){
		for( var j=0; j<array2.length; j++ ){
			var value = resultArray[index] ? resultArray[index] : [];
			resultArray.push( value.concat( array1[i], array2[j] ) );
			index++;
		}
	}
	return resultArray;
}

var calculate = function( array ){
	if( array.length == 1 ){
		return array;
	}else if( array.length == 2 ){
		return baseCase( array[0], array[1], [] );
	}
	var result = baseCase( array[0], array[1], [] );
	for( var i=2; i<array.length; i++ ){
		result = baseCase( result, array[i], result );
	}
	return result;
}


console.log( calculate([ [1, 2] ]) );
console.log( calculate([ [1, 2], [3, 4, 5] ]) );
console.log( calculate([ [1, 2], [3, 4, 5], [6, 7] ]) );

// var result = calculate([ [1, 2] ]);
// var result = calculate([ [1, 2], [3, 4, 5] ]);
// var result = calculate([ [1, 2], [3, 4, 5], [6, 7] ]);
