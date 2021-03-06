/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var propertySymbols = require( '@stdlib/utils-property-symbols' );
var propertyNames = require( '@stdlib/utils-property-names' );
var getPrototypeOf = require( '@stdlib/utils-get-prototype-of' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Returns a boolean indicating if an array contains a provided value.
*
* @private
* @param {Array} arr - array
* @param {*} v - search value
* @returns {boolean} boolean indicating if an array contains a search value
*/
function contains( arr, v ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		if ( arr[ i ] === v ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Returns an array of an object's inherited property names and symbols.
*
* @param {*} value - input object
* @param {PositiveInteger} [level] - inheritance level
* @throws {TypeError} second argument must be a positive integer
* @returns {Array} a list of inherited property names and symbols
*
* @example
* var props = inheritedProperties( [] );
* // returns [...]
*/
function inheritedProperties( value, level ) {
	var out;
	var obj;
	var tmp;
	var N;
	var n;
	var i;

	if ( arguments.length > 1 ) {
		if ( !isPositiveInteger( level ) ) {
			throw new TypeError( format( 'invalid argument. Second argument must be a positive integer. Value: `%s`.', level ) );
		}
		N = level;
	} else {
		N = MAX_SAFE_INTEGER;
	}
	if ( value === null || value === void 0 ) {
		return [];
	}
	// Get the value's prototype:
	obj = getPrototypeOf( value );

	// Walk the prototype chain collecting all properties...
	out = [];
	n = 1;
	while ( obj && n <= N ) {
		tmp = propertyNames( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			if ( contains( out, tmp[ i ] ) === false ) {
				out.push( tmp[ i ] );
			}
		}
		tmp = propertySymbols( obj );
		for ( i = 0; i < tmp.length; i++ ) {
			if ( contains( out, tmp[ i ] ) === false ) {
				out.push( tmp[ i ] );
			}
		}
		obj = getPrototypeOf( obj );
		n += 1;
	}

	return out;
}


// EXPORTS //

module.exports = inheritedProperties;
