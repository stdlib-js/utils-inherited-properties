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

var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
var Symbol = require( '@stdlib/symbol-ctor' );
var defineProperty = require( '@stdlib/utils-define-property' );
var inheritedProperties = require( './../lib' );

var hasSymbols = hasSymbolSupport();

function Foo() {
	this.a = 'b';
	defineProperty( this, 'foo', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'bar'
	});
	if ( hasSymbols ) {
		this[ Symbol( 'a' ) ] = 'b';
		defineProperty( this, 'beep', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'boop'
		});
	}
	return this;
}

Foo.prototype.c = 'd';
defineProperty( Foo.prototype, 'bip', {
	'configurable': false,
	'enumerable': false,
	'writable': false,
	'value': 'bap'
});
if ( hasSymbols ) {
	Foo.prototype[ Symbol( 'c' ) ] = 'd';
	defineProperty( Foo.prototype, Symbol( 'e' ), {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': 'f'
	});
}

var obj = new Foo();
var props = inheritedProperties( obj );
console.log( props );
// => [ ..., 'c', 'bip', ... ]
