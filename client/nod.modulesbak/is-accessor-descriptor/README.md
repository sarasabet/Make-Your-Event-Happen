# is-accessor-descriptor [![NPM version](https://img.shields.io/npm/v/is-accessor-descriptor.svg)](https://www.npmjs.com/package/is-accessor-descriptor) [![Build Status](https://img.shields.io/travis/jonschlinkert/is-accessor-descriptor.svg)](https://travis-ci.org/jonschlinkert/is-accessor-descriptor)

> Returns true if a value has the characteristics of a valid JavaScript accessor descriptor.

- [Install](#install)
- [Usage](#usage)
- [Examples](#examples)
- [API](#api)
- [Related projects](#related-projects)
- [Running tests](#running-tests)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm i is-accessor-descriptor --save
```

## Usage

```js
var isAccessor = require('is-accessor-descriptor');

isAccessor({get: function() {}});
//=> true
```

You may also pass an object and property name to check if the property is an accessor:

```js
isAccessor(foo, 'bar');
```

## Examples

`false` when not an object

```js
isAccessor('a')
isAccessor(null)
isAccessor([])
//=> false
```

`true` when the object has valid properties

and the properties all have the correct JavaScript types:

```js
isAccessor({get: noop, set: noop})
isAccessor({get: noop})
isAccessor({set: noop})
//=> true
```

`false` when the object has invalid properties

```js
isAccessor({get: noop, set: noop, bar: 'baz'})
isAccessor({get: noop, writable: true})
isAccessor({get: noop, value: true})
//=> false
```

`false` when an accessor is not a function

```js
isAccessor({get: noop, set: 'baz'})
isAccessor({get: 'foo', set: noop})
isAccessor({get: 'foo', bar: 'baz'})
isAccessor({get: 'foo', set: 'baz'})
//=> false
```

`false` when a value is not the correct type

```js
isAccessor({get: noop, set: noop, enumerable: 'foo'})
isAccessor({set: noop, configurable: 'foo'})
isAccessor({get: noop, configurable: 'foo'})
//=> false
```

## Related projects

* [is-accessor-descriptor](https://www.npmjs.com/package/is-accessor-descriptor): Returns true if a value has the characteristics of a valid JavaScript accessor descriptor. | [homepage](https://github.com/jonschlinkert/is-accessor-descriptor)
* [is-data-descriptor](https://www.npmjs.com/package/is-data-descriptor): Returns true if a value has the characteristics of a valid JavaScript data descriptor. | [homepage](https://github.com/jonschlinkert/is-data-descriptor)
* [is-descriptor](https://www.npmjs.com/package/is-descriptor): Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for??? [more](https://www.npmjs.com/package/is-descriptor) | [homepage](https://github.com/jonschlinkert/is-descriptor)
* [isobject](https://www.npmjs.com/package/isobject): Returns true if the value is an object and not an array or null. | [homepage](https://github.com/jonschlinkert/isobject)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/is-accessor-descriptor/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright ?? 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on December 28, 2015._