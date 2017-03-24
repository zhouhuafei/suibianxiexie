"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

            ;(function (exports) {
                'use strict';

                var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

                var PLUS = '+'.charCodeAt(0);
                var SLASH = '/'.charCodeAt(0);
                var NUMBER = '0'.charCodeAt(0);
                var LOWER = 'a'.charCodeAt(0);
                var UPPER = 'A'.charCodeAt(0);
                var PLUS_URL_SAFE = '-'.charCodeAt(0);
                var SLASH_URL_SAFE = '_'.charCodeAt(0);

                function decode(elt) {
                    var code = elt.charCodeAt(0);
                    if (code === PLUS || code === PLUS_URL_SAFE) return 62; // '+'
                    if (code === SLASH || code === SLASH_URL_SAFE) return 63; // '/'
                    if (code < NUMBER) return -1; //no match
                    if (code < NUMBER + 10) return code - NUMBER + 26 + 26;
                    if (code < UPPER + 26) return code - UPPER;
                    if (code < LOWER + 26) return code - LOWER + 26;
                }

                function b64ToByteArray(b64) {
                    var i, j, l, tmp, placeHolders, arr;

                    if (b64.length % 4 > 0) {
                        throw new Error('Invalid string. Length must be a multiple of 4');
                    }

                    // the number of equal signs (place holders)
                    // if there are two placeholders, than the two characters before it
                    // represent one byte
                    // if there is only one, then the three characters before it represent 2 bytes
                    // this is just a cheap hack to not do indexOf twice
                    var len = b64.length;
                    placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0;

                    // base64 is 4/3 + up to two characters of the original data
                    arr = new Arr(b64.length * 3 / 4 - placeHolders);

                    // if there are placeholders, only get up to the last complete 4 chars
                    l = placeHolders > 0 ? b64.length - 4 : b64.length;

                    var L = 0;

                    function push(v) {
                        arr[L++] = v;
                    }

                    for (i = 0, j = 0; i < l; i += 4, j += 3) {
                        tmp = decode(b64.charAt(i)) << 18 | decode(b64.charAt(i + 1)) << 12 | decode(b64.charAt(i + 2)) << 6 | decode(b64.charAt(i + 3));
                        push((tmp & 0xFF0000) >> 16);
                        push((tmp & 0xFF00) >> 8);
                        push(tmp & 0xFF);
                    }

                    if (placeHolders === 2) {
                        tmp = decode(b64.charAt(i)) << 2 | decode(b64.charAt(i + 1)) >> 4;
                        push(tmp & 0xFF);
                    } else if (placeHolders === 1) {
                        tmp = decode(b64.charAt(i)) << 10 | decode(b64.charAt(i + 1)) << 4 | decode(b64.charAt(i + 2)) >> 2;
                        push(tmp >> 8 & 0xFF);
                        push(tmp & 0xFF);
                    }

                    return arr;
                }

                function uint8ToBase64(uint8) {
                    var i,
                        extraBytes = uint8.length % 3,
                        // if we have 1 byte left, pad 2 bytes
                    output = "",
                        temp,
                        length;

                    function encode(num) {
                        return lookup.charAt(num);
                    }

                    function tripletToBase64(num) {
                        return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F);
                    }

                    // go through the array every three bytes, we'll deal with trailing stuff later
                    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
                        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
                        output += tripletToBase64(temp);
                    }

                    // pad the end with zeros, but make sure to not forget the extra bytes
                    switch (extraBytes) {
                        case 1:
                            temp = uint8[uint8.length - 1];
                            output += encode(temp >> 2);
                            output += encode(temp << 4 & 0x3F);
                            output += '==';
                            break;
                        case 2:
                            temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
                            output += encode(temp >> 10);
                            output += encode(temp >> 4 & 0x3F);
                            output += encode(temp << 2 & 0x3F);
                            output += '=';
                            break;
                    }

                    return output;
                }

                exports.toByteArray = b64ToByteArray;
                exports.fromByteArray = uint8ToBase64;
            })(typeof exports === 'undefined' ? this.base64js = {} : exports);
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../node_modules/base64-js/lib/b64.js", "/../../../../node_modules/base64-js/lib");
    }, { "buffer": 2, "r7L21G": 4 }], 2: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
             * @license  MIT
             */

            var base64 = require('base64-js');
            var ieee754 = require('ieee754');

            exports.Buffer = Buffer;
            exports.SlowBuffer = Buffer;
            exports.INSPECT_MAX_BYTES = 50;
            Buffer.poolSize = 8192;

            /**
             * If `Buffer._useTypedArrays`:
             *   === true    Use Uint8Array implementation (fastest)
             *   === false   Use Object implementation (compatible down to IE6)
             */
            Buffer._useTypedArrays = function () {
                // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
                // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
                // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
                // because we need to be able to add all the node Buffer API methods. This is an issue
                // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
                try {
                    var buf = new ArrayBuffer(0);
                    var arr = new Uint8Array(buf);
                    arr.foo = function () {
                        return 42;
                    };
                    return 42 === arr.foo() && typeof arr.subarray === 'function'; // Chrome 9-10 lack `subarray`
                } catch (e) {
                    return false;
                }
            }();

            /**
             * Class: Buffer
             * =============
             *
             * The Buffer constructor returns instances of `Uint8Array` that are augmented
             * with function properties for all the node `Buffer` API functions. We use
             * `Uint8Array` so that square bracket notation works as expected -- it returns
             * a single octet.
             *
             * By augmenting the instances, we can avoid modifying the `Uint8Array`
             * prototype.
             */
            function Buffer(subject, encoding, noZero) {
                if (!(this instanceof Buffer)) return new Buffer(subject, encoding, noZero);

                var type = typeof subject === "undefined" ? "undefined" : _typeof(subject);

                // Workaround: node's base64 implementation allows for non-padded strings
                // while base64-js does not.
                if (encoding === 'base64' && type === 'string') {
                    subject = stringtrim(subject);
                    while (subject.length % 4 !== 0) {
                        subject = subject + '=';
                    }
                }

                // Find the length
                var length;
                if (type === 'number') length = coerce(subject);else if (type === 'string') length = Buffer.byteLength(subject, encoding);else if (type === 'object') length = coerce(subject.length); // assume that object is array-like
                else throw new Error('First argument needs to be a number, array or string.');

                var buf;
                if (Buffer._useTypedArrays) {
                    // Preferred: Return an augmented `Uint8Array` instance for best performance
                    buf = Buffer._augment(new Uint8Array(length));
                } else {
                    // Fallback: Return THIS instance of Buffer (created by `new`)
                    buf = this;
                    buf.length = length;
                    buf._isBuffer = true;
                }

                var i;
                if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
                    // Speed optimization -- use set if we're copying from a typed array
                    buf._set(subject);
                } else if (isArrayish(subject)) {
                    // Treat array-ish objects as a byte array
                    for (i = 0; i < length; i++) {
                        if (Buffer.isBuffer(subject)) buf[i] = subject.readUInt8(i);else buf[i] = subject[i];
                    }
                } else if (type === 'string') {
                    buf.write(subject, 0, encoding);
                } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
                    for (i = 0; i < length; i++) {
                        buf[i] = 0;
                    }
                }

                return buf;
            }

            // STATIC METHODS
            // ==============

            Buffer.isEncoding = function (encoding) {
                switch (String(encoding).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'binary':
                    case 'base64':
                    case 'raw':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return true;
                    default:
                        return false;
                }
            };

            Buffer.isBuffer = function (b) {
                return !!(b !== null && b !== undefined && b._isBuffer);
            };

            Buffer.byteLength = function (str, encoding) {
                var ret;
                str = str + '';
                switch (encoding || 'utf8') {
                    case 'hex':
                        ret = str.length / 2;
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = utf8ToBytes(str).length;
                        break;
                    case 'ascii':
                    case 'binary':
                    case 'raw':
                        ret = str.length;
                        break;
                    case 'base64':
                        ret = base64ToBytes(str).length;
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = str.length * 2;
                        break;
                    default:
                        throw new Error('Unknown encoding');
                }
                return ret;
            };

            Buffer.concat = function (list, totalLength) {
                assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' + 'list should be an Array.');

                if (list.length === 0) {
                    return new Buffer(0);
                } else if (list.length === 1) {
                    return list[0];
                }

                var i;
                if (typeof totalLength !== 'number') {
                    totalLength = 0;
                    for (i = 0; i < list.length; i++) {
                        totalLength += list[i].length;
                    }
                }

                var buf = new Buffer(totalLength);
                var pos = 0;
                for (i = 0; i < list.length; i++) {
                    var item = list[i];
                    item.copy(buf, pos);
                    pos += item.length;
                }
                return buf;
            };

            // BUFFER INSTANCE METHODS
            // =======================

            function _hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0;
                var remaining = buf.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }

                // must be an even number of digits
                var strLen = string.length;
                assert(strLen % 2 === 0, 'Invalid hex string');

                if (length > strLen / 2) {
                    length = strLen / 2;
                }
                for (var i = 0; i < length; i++) {
                    var byte = parseInt(string.substr(i * 2, 2), 16);
                    assert(!isNaN(byte), 'Invalid hex string');
                    buf[offset + i] = byte;
                }
                Buffer._charsWritten = i * 2;
                return i;
            }

            function _utf8Write(buf, string, offset, length) {
                var charsWritten = Buffer._charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length);
                return charsWritten;
            }

            function _asciiWrite(buf, string, offset, length) {
                var charsWritten = Buffer._charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length);
                return charsWritten;
            }

            function _binaryWrite(buf, string, offset, length) {
                return _asciiWrite(buf, string, offset, length);
            }

            function _base64Write(buf, string, offset, length) {
                var charsWritten = Buffer._charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length);
                return charsWritten;
            }

            function _utf16leWrite(buf, string, offset, length) {
                var charsWritten = Buffer._charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length);
                return charsWritten;
            }

            Buffer.prototype.write = function (string, offset, length, encoding) {
                // Support both (string, offset, length, encoding)
                // and the legacy (string, encoding, offset, length)
                if (isFinite(offset)) {
                    if (!isFinite(length)) {
                        encoding = length;
                        length = undefined;
                    }
                } else {
                    // legacy
                    var swap = encoding;
                    encoding = offset;
                    offset = length;
                    length = swap;
                }

                offset = Number(offset) || 0;
                var remaining = this.length - offset;
                if (!length) {
                    length = remaining;
                } else {
                    length = Number(length);
                    if (length > remaining) {
                        length = remaining;
                    }
                }
                encoding = String(encoding || 'utf8').toLowerCase();

                var ret;
                switch (encoding) {
                    case 'hex':
                        ret = _hexWrite(this, string, offset, length);
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = _utf8Write(this, string, offset, length);
                        break;
                    case 'ascii':
                        ret = _asciiWrite(this, string, offset, length);
                        break;
                    case 'binary':
                        ret = _binaryWrite(this, string, offset, length);
                        break;
                    case 'base64':
                        ret = _base64Write(this, string, offset, length);
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = _utf16leWrite(this, string, offset, length);
                        break;
                    default:
                        throw new Error('Unknown encoding');
                }
                return ret;
            };

            Buffer.prototype.toString = function (encoding, start, end) {
                var self = this;

                encoding = String(encoding || 'utf8').toLowerCase();
                start = Number(start) || 0;
                end = end !== undefined ? Number(end) : end = self.length;

                // Fastpath empty strings
                if (end === start) return '';

                var ret;
                switch (encoding) {
                    case 'hex':
                        ret = _hexSlice(self, start, end);
                        break;
                    case 'utf8':
                    case 'utf-8':
                        ret = _utf8Slice(self, start, end);
                        break;
                    case 'ascii':
                        ret = _asciiSlice(self, start, end);
                        break;
                    case 'binary':
                        ret = _binarySlice(self, start, end);
                        break;
                    case 'base64':
                        ret = _base64Slice(self, start, end);
                        break;
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        ret = _utf16leSlice(self, start, end);
                        break;
                    default:
                        throw new Error('Unknown encoding');
                }
                return ret;
            };

            Buffer.prototype.toJSON = function () {
                return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };

            // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
            Buffer.prototype.copy = function (target, target_start, start, end) {
                var source = this;

                if (!start) start = 0;
                if (!end && end !== 0) end = this.length;
                if (!target_start) target_start = 0;

                // Copy 0 bytes; we're done
                if (end === start) return;
                if (target.length === 0 || source.length === 0) return;

                // Fatal error conditions
                assert(end >= start, 'sourceEnd < sourceStart');
                assert(target_start >= 0 && target_start < target.length, 'targetStart out of bounds');
                assert(start >= 0 && start < source.length, 'sourceStart out of bounds');
                assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds');

                // Are we oob?
                if (end > this.length) end = this.length;
                if (target.length - target_start < end - start) end = target.length - target_start + start;

                var len = end - start;

                if (len < 100 || !Buffer._useTypedArrays) {
                    for (var i = 0; i < len; i++) {
                        target[i + target_start] = this[i + start];
                    }
                } else {
                    target._set(this.subarray(start, start + len), target_start);
                }
            };

            function _base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf);
                } else {
                    return base64.fromByteArray(buf.slice(start, end));
                }
            }

            function _utf8Slice(buf, start, end) {
                var res = '';
                var tmp = '';
                end = Math.min(buf.length, end);

                for (var i = start; i < end; i++) {
                    if (buf[i] <= 0x7F) {
                        res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i]);
                        tmp = '';
                    } else {
                        tmp += '%' + buf[i].toString(16);
                    }
                }

                return res + decodeUtf8Char(tmp);
            }

            function _asciiSlice(buf, start, end) {
                var ret = '';
                end = Math.min(buf.length, end);

                for (var i = start; i < end; i++) {
                    ret += String.fromCharCode(buf[i]);
                }return ret;
            }

            function _binarySlice(buf, start, end) {
                return _asciiSlice(buf, start, end);
            }

            function _hexSlice(buf, start, end) {
                var len = buf.length;

                if (!start || start < 0) start = 0;
                if (!end || end < 0 || end > len) end = len;

                var out = '';
                for (var i = start; i < end; i++) {
                    out += toHex(buf[i]);
                }
                return out;
            }

            function _utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end);
                var res = '';
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
                }
                return res;
            }

            Buffer.prototype.slice = function (start, end) {
                var len = this.length;
                start = clamp(start, len, 0);
                end = clamp(end, len, len);

                if (Buffer._useTypedArrays) {
                    return Buffer._augment(this.subarray(start, end));
                } else {
                    var sliceLen = end - start;
                    var newBuf = new Buffer(sliceLen, undefined, true);
                    for (var i = 0; i < sliceLen; i++) {
                        newBuf[i] = this[i + start];
                    }
                    return newBuf;
                }
            };

            // `get` will be removed in Node 0.13+
            Buffer.prototype.get = function (offset) {
                console.log('.get() is deprecated. Access using array indexes instead.');
                return this.readUInt8(offset);
            };

            // `set` will be removed in Node 0.13+
            Buffer.prototype.set = function (v, offset) {
                console.log('.set() is deprecated. Access using array indexes instead.');
                return this.writeUInt8(v, offset);
            };

            Buffer.prototype.readUInt8 = function (offset, noAssert) {
                if (!noAssert) {
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset < this.length, 'Trying to read beyond buffer length');
                }

                if (offset >= this.length) return;

                return this[offset];
            };

            function _readUInt16(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
                }

                var len = buf.length;
                if (offset >= len) return;

                var val;
                if (littleEndian) {
                    val = buf[offset];
                    if (offset + 1 < len) val |= buf[offset + 1] << 8;
                } else {
                    val = buf[offset] << 8;
                    if (offset + 1 < len) val |= buf[offset + 1];
                }
                return val;
            }

            Buffer.prototype.readUInt16LE = function (offset, noAssert) {
                return _readUInt16(this, offset, true, noAssert);
            };

            Buffer.prototype.readUInt16BE = function (offset, noAssert) {
                return _readUInt16(this, offset, false, noAssert);
            };

            function _readUInt32(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
                }

                var len = buf.length;
                if (offset >= len) return;

                var val;
                if (littleEndian) {
                    if (offset + 2 < len) val = buf[offset + 2] << 16;
                    if (offset + 1 < len) val |= buf[offset + 1] << 8;
                    val |= buf[offset];
                    if (offset + 3 < len) val = val + (buf[offset + 3] << 24 >>> 0);
                } else {
                    if (offset + 1 < len) val = buf[offset + 1] << 16;
                    if (offset + 2 < len) val |= buf[offset + 2] << 8;
                    if (offset + 3 < len) val |= buf[offset + 3];
                    val = val + (buf[offset] << 24 >>> 0);
                }
                return val;
            }

            Buffer.prototype.readUInt32LE = function (offset, noAssert) {
                return _readUInt32(this, offset, true, noAssert);
            };

            Buffer.prototype.readUInt32BE = function (offset, noAssert) {
                return _readUInt32(this, offset, false, noAssert);
            };

            Buffer.prototype.readInt8 = function (offset, noAssert) {
                if (!noAssert) {
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset < this.length, 'Trying to read beyond buffer length');
                }

                if (offset >= this.length) return;

                var neg = this[offset] & 0x80;
                if (neg) return (0xff - this[offset] + 1) * -1;else return this[offset];
            };

            function _readInt16(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length');
                }

                var len = buf.length;
                if (offset >= len) return;

                var val = _readUInt16(buf, offset, littleEndian, true);
                var neg = val & 0x8000;
                if (neg) return (0xffff - val + 1) * -1;else return val;
            }

            Buffer.prototype.readInt16LE = function (offset, noAssert) {
                return _readInt16(this, offset, true, noAssert);
            };

            Buffer.prototype.readInt16BE = function (offset, noAssert) {
                return _readInt16(this, offset, false, noAssert);
            };

            function _readInt32(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
                }

                var len = buf.length;
                if (offset >= len) return;

                var val = _readUInt32(buf, offset, littleEndian, true);
                var neg = val & 0x80000000;
                if (neg) return (0xffffffff - val + 1) * -1;else return val;
            }

            Buffer.prototype.readInt32LE = function (offset, noAssert) {
                return _readInt32(this, offset, true, noAssert);
            };

            Buffer.prototype.readInt32BE = function (offset, noAssert) {
                return _readInt32(this, offset, false, noAssert);
            };

            function _readFloat(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length');
                }

                return ieee754.read(buf, offset, littleEndian, 23, 4);
            }

            Buffer.prototype.readFloatLE = function (offset, noAssert) {
                return _readFloat(this, offset, true, noAssert);
            };

            Buffer.prototype.readFloatBE = function (offset, noAssert) {
                return _readFloat(this, offset, false, noAssert);
            };

            function _readDouble(buf, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length');
                }

                return ieee754.read(buf, offset, littleEndian, 52, 8);
            }

            Buffer.prototype.readDoubleLE = function (offset, noAssert) {
                return _readDouble(this, offset, true, noAssert);
            };

            Buffer.prototype.readDoubleBE = function (offset, noAssert) {
                return _readDouble(this, offset, false, noAssert);
            };

            Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset < this.length, 'trying to write beyond buffer length');
                    verifuint(value, 0xff);
                }

                if (offset >= this.length) return;

                this[offset] = value;
            };

            function _writeUInt16(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 1 < buf.length, 'trying to write beyond buffer length');
                    verifuint(value, 0xffff);
                }

                var len = buf.length;
                if (offset >= len) return;

                for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
                    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
                }
            }

            Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
                _writeUInt16(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
                _writeUInt16(this, value, offset, false, noAssert);
            };

            function _writeUInt32(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 3 < buf.length, 'trying to write beyond buffer length');
                    verifuint(value, 0xffffffff);
                }

                var len = buf.length;
                if (offset >= len) return;

                for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
                    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
                }
            }

            Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
                _writeUInt32(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
                _writeUInt32(this, value, offset, false, noAssert);
            };

            Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset < this.length, 'Trying to write beyond buffer length');
                    verifsint(value, 0x7f, -0x80);
                }

                if (offset >= this.length) return;

                if (value >= 0) this.writeUInt8(value, offset, noAssert);else this.writeUInt8(0xff + value + 1, offset, noAssert);
            };

            function _writeInt16(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length');
                    verifsint(value, 0x7fff, -0x8000);
                }

                var len = buf.length;
                if (offset >= len) return;

                if (value >= 0) _writeUInt16(buf, value, offset, littleEndian, noAssert);else _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert);
            }

            Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
                _writeInt16(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
                _writeInt16(this, value, offset, false, noAssert);
            };

            function _writeInt32(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
                    verifsint(value, 0x7fffffff, -0x80000000);
                }

                var len = buf.length;
                if (offset >= len) return;

                if (value >= 0) _writeUInt32(buf, value, offset, littleEndian, noAssert);else _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert);
            }

            Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
                _writeInt32(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
                _writeInt32(this, value, offset, false, noAssert);
            };

            function _writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length');
                    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38);
                }

                var len = buf.length;
                if (offset >= len) return;

                ieee754.write(buf, value, offset, littleEndian, 23, 4);
            }

            Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
                _writeFloat(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
                _writeFloat(this, value, offset, false, noAssert);
            };

            function _writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    assert(value !== undefined && value !== null, 'missing value');
                    assert(typeof littleEndian === 'boolean', 'missing or invalid endian');
                    assert(offset !== undefined && offset !== null, 'missing offset');
                    assert(offset + 7 < buf.length, 'Trying to write beyond buffer length');
                    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308);
                }

                var len = buf.length;
                if (offset >= len) return;

                ieee754.write(buf, value, offset, littleEndian, 52, 8);
            }

            Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
                _writeDouble(this, value, offset, true, noAssert);
            };

            Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
                _writeDouble(this, value, offset, false, noAssert);
            };

            // fill(value, start=0, end=buffer.length)
            Buffer.prototype.fill = function (value, start, end) {
                if (!value) value = 0;
                if (!start) start = 0;
                if (!end) end = this.length;

                if (typeof value === 'string') {
                    value = value.charCodeAt(0);
                }

                assert(typeof value === 'number' && !isNaN(value), 'value is not a number');
                assert(end >= start, 'end < start');

                // Fill 0 bytes; we're done
                if (end === start) return;
                if (this.length === 0) return;

                assert(start >= 0 && start < this.length, 'start out of bounds');
                assert(end >= 0 && end <= this.length, 'end out of bounds');

                for (var i = start; i < end; i++) {
                    this[i] = value;
                }
            };

            Buffer.prototype.inspect = function () {
                var out = [];
                var len = this.length;
                for (var i = 0; i < len; i++) {
                    out[i] = toHex(this[i]);
                    if (i === exports.INSPECT_MAX_BYTES) {
                        out[i + 1] = '...';
                        break;
                    }
                }
                return '<Buffer ' + out.join(' ') + '>';
            };

            /**
             * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
             * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
             */
            Buffer.prototype.toArrayBuffer = function () {
                if (typeof Uint8Array !== 'undefined') {
                    if (Buffer._useTypedArrays) {
                        return new Buffer(this).buffer;
                    } else {
                        var buf = new Uint8Array(this.length);
                        for (var i = 0, len = buf.length; i < len; i += 1) {
                            buf[i] = this[i];
                        }return buf.buffer;
                    }
                } else {
                    throw new Error('Buffer.toArrayBuffer not supported in this browser');
                }
            };

            // HELPER FUNCTIONS
            // ================

            function stringtrim(str) {
                if (str.trim) return str.trim();
                return str.replace(/^\s+|\s+$/g, '');
            }

            var BP = Buffer.prototype;

            /**
             * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
             */
            Buffer._augment = function (arr) {
                arr._isBuffer = true;

                // save reference to original Uint8Array get/set methods before overwriting
                arr._get = arr.get;
                arr._set = arr.set;

                // deprecated, will be removed in node 0.13+
                arr.get = BP.get;
                arr.set = BP.set;

                arr.write = BP.write;
                arr.toString = BP.toString;
                arr.toLocaleString = BP.toString;
                arr.toJSON = BP.toJSON;
                arr.copy = BP.copy;
                arr.slice = BP.slice;
                arr.readUInt8 = BP.readUInt8;
                arr.readUInt16LE = BP.readUInt16LE;
                arr.readUInt16BE = BP.readUInt16BE;
                arr.readUInt32LE = BP.readUInt32LE;
                arr.readUInt32BE = BP.readUInt32BE;
                arr.readInt8 = BP.readInt8;
                arr.readInt16LE = BP.readInt16LE;
                arr.readInt16BE = BP.readInt16BE;
                arr.readInt32LE = BP.readInt32LE;
                arr.readInt32BE = BP.readInt32BE;
                arr.readFloatLE = BP.readFloatLE;
                arr.readFloatBE = BP.readFloatBE;
                arr.readDoubleLE = BP.readDoubleLE;
                arr.readDoubleBE = BP.readDoubleBE;
                arr.writeUInt8 = BP.writeUInt8;
                arr.writeUInt16LE = BP.writeUInt16LE;
                arr.writeUInt16BE = BP.writeUInt16BE;
                arr.writeUInt32LE = BP.writeUInt32LE;
                arr.writeUInt32BE = BP.writeUInt32BE;
                arr.writeInt8 = BP.writeInt8;
                arr.writeInt16LE = BP.writeInt16LE;
                arr.writeInt16BE = BP.writeInt16BE;
                arr.writeInt32LE = BP.writeInt32LE;
                arr.writeInt32BE = BP.writeInt32BE;
                arr.writeFloatLE = BP.writeFloatLE;
                arr.writeFloatBE = BP.writeFloatBE;
                arr.writeDoubleLE = BP.writeDoubleLE;
                arr.writeDoubleBE = BP.writeDoubleBE;
                arr.fill = BP.fill;
                arr.inspect = BP.inspect;
                arr.toArrayBuffer = BP.toArrayBuffer;

                return arr;
            };

            // slice(start, end)
            function clamp(index, len, defaultValue) {
                if (typeof index !== 'number') return defaultValue;
                index = ~~index; // Coerce to integer.
                if (index >= len) return len;
                if (index >= 0) return index;
                index += len;
                if (index >= 0) return index;
                return 0;
            }

            function coerce(length) {
                // Coerce length to a number (possibly NaN), round up
                // in case it's fractional (e.g. 123.456) then do a
                // double negate to coerce a NaN to 0. Easy, right?
                length = ~~Math.ceil(+length);
                return length < 0 ? 0 : length;
            }

            function isArray(subject) {
                return (Array.isArray || function (subject) {
                    return Object.prototype.toString.call(subject) === '[object Array]';
                })(subject);
            }

            function isArrayish(subject) {
                return isArray(subject) || Buffer.isBuffer(subject) || subject && (typeof subject === "undefined" ? "undefined" : _typeof(subject)) === 'object' && typeof subject.length === 'number';
            }

            function toHex(n) {
                if (n < 16) return '0' + n.toString(16);
                return n.toString(16);
            }

            function utf8ToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; i++) {
                    var b = str.charCodeAt(i);
                    if (b <= 0x7F) byteArray.push(str.charCodeAt(i));else {
                        var start = i;
                        if (b >= 0xD800 && b <= 0xDFFF) i++;
                        var h = encodeURIComponent(str.slice(start, i + 1)).substr(1).split('%');
                        for (var j = 0; j < h.length; j++) {
                            byteArray.push(parseInt(h[j], 16));
                        }
                    }
                }
                return byteArray;
            }

            function asciiToBytes(str) {
                var byteArray = [];
                for (var i = 0; i < str.length; i++) {
                    // Node's code seems to be doing this and not & 0x7F..
                    byteArray.push(str.charCodeAt(i) & 0xFF);
                }
                return byteArray;
            }

            function utf16leToBytes(str) {
                var c, hi, lo;
                var byteArray = [];
                for (var i = 0; i < str.length; i++) {
                    c = str.charCodeAt(i);
                    hi = c >> 8;
                    lo = c % 256;
                    byteArray.push(lo);
                    byteArray.push(hi);
                }

                return byteArray;
            }

            function base64ToBytes(str) {
                return base64.toByteArray(str);
            }

            function blitBuffer(src, dst, offset, length) {
                var pos;
                for (var i = 0; i < length; i++) {
                    if (i + offset >= dst.length || i >= src.length) break;
                    dst[i + offset] = src[i];
                }
                return i;
            }

            function decodeUtf8Char(str) {
                try {
                    return decodeURIComponent(str);
                } catch (err) {
                    return String.fromCharCode(0xFFFD); // UTF 8 invalid char
                }
            }

            /*
             * We have to make sure that the value is a valid integer. This means that it
             * is non-negative. It has no fractional component and that it does not
             * exceed the maximum allowed value.
             */
            function verifuint(value, max) {
                assert(typeof value === 'number', 'cannot write a non-number as a number');
                assert(value >= 0, 'specified a negative value for writing an unsigned value');
                assert(value <= max, 'value is larger than maximum value for type');
                assert(Math.floor(value) === value, 'value has a fractional component');
            }

            function verifsint(value, max, min) {
                assert(typeof value === 'number', 'cannot write a non-number as a number');
                assert(value <= max, 'value larger than maximum allowed value');
                assert(value >= min, 'value smaller than minimum allowed value');
                assert(Math.floor(value) === value, 'value has a fractional component');
            }

            function verifIEEE754(value, max, min) {
                assert(typeof value === 'number', 'cannot write a non-number as a number');
                assert(value <= max, 'value larger than maximum allowed value');
                assert(value >= min, 'value smaller than minimum allowed value');
            }

            function assert(test, message) {
                if (!test) throw new Error(message || 'Failed assertion');
            }
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../node_modules/buffer/index.js", "/../../../../node_modules/buffer");
    }, { "base64-js": 1, "buffer": 2, "ieee754": 3, "r7L21G": 4 }], 3: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            exports.read = function (buffer, offset, isLE, mLen, nBytes) {
                var e, m;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? nBytes - 1 : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];

                i += d;

                e = s & (1 << -nBits) - 1;
                s >>= -nBits;
                nBits += eLen;
                for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

                m = e & (1 << -nBits) - 1;
                e >>= -nBits;
                nBits += mLen;
                for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

                if (e === 0) {
                    e = 1 - eBias;
                } else if (e === eMax) {
                    return m ? NaN : (s ? -1 : 1) * Infinity;
                } else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            };

            exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = nBytes * 8 - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var i = isLE ? 0 : nBytes - 1;
                var d = isLE ? 1 : -1;
                var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

                value = Math.abs(value);

                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                } else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    } else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }

                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    } else if (e + eBias >= 1) {
                        m = (value * c - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    } else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }

                for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

                e = e << mLen | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

                buffer[offset + i - d] |= s * 128;
            };
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../node_modules/ieee754/index.js", "/../../../../node_modules/ieee754");
    }, { "buffer": 2, "r7L21G": 4 }], 4: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            // shim for using process in browser

            var process = module.exports = {};

            process.nextTick = function () {
                var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
                var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

                if (canSetImmediate) {
                    return function (f) {
                        return window.setImmediate(f);
                    };
                }

                if (canPost) {
                    var queue = [];
                    window.addEventListener('message', function (ev) {
                        var source = ev.source;
                        if ((source === window || source === null) && ev.data === 'process-tick') {
                            ev.stopPropagation();
                            if (queue.length > 0) {
                                var fn = queue.shift();
                                fn();
                            }
                        }
                    }, true);

                    return function nextTick(fn) {
                        queue.push(fn);
                        window.postMessage('process-tick', '*');
                    };
                }

                return function nextTick(fn) {
                    setTimeout(fn, 0);
                };
            }();

            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];

            function noop() {}

            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;

            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };

            // TODO(shtylman)
            process.cwd = function () {
                return '/';
            };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../../../node_modules/process/browser.js", "/../../../../node_modules/process");
    }, { "buffer": 2, "r7L21G": 4 }], 5: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 16/12/4.
             */
            //一些小方法
            var base = {
                isPc: require('../function/is-pc.js'),
                cookie: require('../function/cookie.js'),
                fillZero: require('../function/fill-zero.js'),
                getParent: require('../function/get-parent.js'),
                goTop: require('../function/go-top.js'),
                htmlToDom: require('../function/html-to-dom.js'),
                whetherDisableScroll: require('../function/whether-disable-scroll.js'),
                whenScrollBottom: require('../function/when-scroll-bottom.js'),
                jsonToArray: require('../function/json-to-array.js'),
                secondsToTime: require('../function/seconds-to-time.js'),
                timeCountDown: require('../function/time-count-down.js'),
                strLimit: require('../function/str-limit.js'),
                getOneDom: require('../function/get-one-dom.js'),
                createElement: require('../function/create-element.js'),
                extend: require('../function/extend.js')
            };
            module.exports = base;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/base.js", "/");
    }, { "../function/cookie.js": 7, "../function/create-element.js": 8, "../function/extend.js": 9, "../function/fill-zero.js": 10, "../function/get-one-dom.js": 11, "../function/get-parent.js": 12, "../function/go-top.js": 13, "../function/html-to-dom.js": 14, "../function/is-pc.js": 15, "../function/json-to-array.js": 16, "../function/seconds-to-time.js": 18, "../function/str-limit.js": 19, "../function/time-count-down.js": 20, "../function/when-scroll-bottom.js": 22, "../function/whether-disable-scroll.js": 23, "buffer": 2, "r7L21G": 4 }], 6: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 16/12/4.
             */
            //测试
            (function () {
                var Test = require('../modules/m-test.js');
                var test = new Test({
                    parent: document.querySelector(".main-test"),
                    config: {
                        isClearTimer: true,
                        isShowModule: true
                    },
                    data: {
                        info: "\u4FAF\u4E3D\u6770\u7231\u5468\u534E\u98DE"
                    }
                });
                //重新渲染才和是否清除定时器有关
                setTimeout(function () {
                    test.opt.data.info = "\u5468\u534E\u98DE\u7231\u4FAF\u4E3D\u6770";
                    test.removeModuleDom();
                    test.init();
                }, 3000);
                //显示隐藏和是否清除定时器无关
                setTimeout(function () {
                    test.hide();
                    setTimeout(function () {
                        test.show();
                    }, 2000);
                }, 5000);
            })();
            //底部
            (function () {
                var Footer = require('../modules/m-footer.js');
                new Footer();
            })();
            //遮罩
            (function () {
                var Mask = require('../modules/m-mask.js');
                var mask = new Mask({
                    callback: {
                        click: function click() {
                            console.log('m-mask click callback');
                            mask.hide();
                        }
                    },
                    config: {
                        isTransparent: false
                    }
                });
                //mask.show();
            })();
            //单选开关
            (function () {
                var Radio = require('../modules/m-radio-switch.js');
                var main = document.querySelector('.main-radio-switch');
                var radio = new Radio({
                    checkTxt: {
                        on: '开',
                        off: '关'
                    },
                    status: 'off',
                    isHand: false,
                    clickCallback: function clickCallback(result) {
                        console.log(result);
                    }
                });
                main.appendChild(radio.parentDom);
            })();
            //表格
            (function () {
                var Table = require('../modules/m-table.js');
                var table = new Table({
                    parent: ".main-table",
                    data: {
                        header: [{
                            html: "<div>header0</div>"
                        }, {
                            html: "<div>header1</div>"
                        }, {
                            html: "<div>header2</div>"
                        }],
                        body: [[{
                            html: "<div>body0-0</div>"
                        }, {
                            html: "<div>body1-0</div>"
                        }, {
                            html: "<div>body2-0</div>"
                        }], [{
                            html: "<div>body0-1</div>"
                        }, {
                            html: "<div>body1-1</div>"
                        }, {
                            html: "<div>body2-1</div>"
                        }], [{
                            html: "<div>body0-2</div>"
                        }, {
                            html: "<div>body1-2</div>"
                        }, {
                            html: "<div>body2-2</div>"
                        }]],
                        footer: ""
                    }
                });
            })();
            //验证
            (function () {
                var ValidateInput = require('../modules/m-validate-input.js');
                var aInput = [].slice.call(document.querySelectorAll('.m-validate-input'));
                aInput.forEach(function (v) {
                    var validate = new ValidateInput({ input: v });
                    validate.validateEventBlur();
                });
            })();
            //星评
            (function () {
                var Star = require('../modules/m-star.js');
                var star = new Star({
                    parent: ".main-star",
                    callback: {
                        click: function click(json) {
                            console.log("\u6709\u70B9\u610F\u601D" + json.index);
                        }
                    }
                });
            })();
            //延迟加载
            require('../function/lazyload.js')();
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_e4ef10bd.js", "/");
    }, { "../function/lazyload.js": 17, "../modules/m-footer.js": 24, "../modules/m-mask.js": 25, "../modules/m-radio-switch.js": 26, "../modules/m-star.js": 27, "../modules/m-table.js": 28, "../modules/m-test.js": 29, "../modules/m-validate-input.js": 30, "buffer": 2, "r7L21G": 4 }], 7: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //设置cookie
            function setCookie(json) {
                var opt = json || {};
                var name = opt.name;
                var value = opt.value;
                var expires = opt.expires;
                var myDate = new Date();
                var myTime = myDate.getTime();
                myDate.setTime(myTime + expires * 24 * 60 * 60 * 1000);
                document.cookie = name + '=' + value + '; expires=' + myDate;
            }
            //获取cookie
            function getCookie(json) {
                var opt = json || {};
                var name = opt.name;
                var cookie = document.cookie;
                var arr = cookie.split('; ');
                var value = '';
                arr.forEach(function (v) {
                    var arr2 = v.split('=');
                    if (arr2[0] == name) {
                        value = arr2[1];
                        return false;
                    }
                });
                return value;
            }
            //清除cookie
            function removeCookie(json) {
                var opt = json || {};
                var name = opt.name;
                setCookie(name, '', -1);
            }
            var obj = {
                setCookie: setCookie,
                getCookie: getCookie,
                removeCookie: removeCookie
            };
            module.exports = obj;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/cookie.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 8: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/3/19.
             */
            function createElement(json) {
                var opt = json || {};
                opt.elementName = opt.elementName || 'div'; //标签名称
                opt.attribute = opt.attribute || {}; //普通属性,checked,selected
                opt.custom = opt.custom || {}; //自定义属性
                opt.style = opt.style || ""; //style样式
                var elementNode = document.createElement("" + opt.elementName); //元素节点
                for (var attr0 in opt.attribute) {
                    if (opt.attribute.hasOwnProperty(attr0)) {
                        elementNode[attr0] = opt.attribute[attr0];
                    }
                }
                for (var attr1 in opt.custom) {
                    if (opt.custom.hasOwnProperty(attr1)) {
                        elementNode.setAttribute('data-' + attr1, opt.custom[attr1]);
                    }
                }
                if (opt.style) {
                    elementNode.setAttribute('style', opt.style);
                }
                return elementNode;
            }
            module.exports = createElement;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/create-element.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 9: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            function extend(json) {
                var opt = json || {};
                opt.defaults = opt.defaults || {};
                opt.inherits = opt.inherits || {};
                opt.isDeep = opt.isDeep == false ? opt.isDeep : true; //默认进行深拷贝
                for (var attr in opt.inherits) {
                    if (opt.inherits.hasOwnProperty(attr)) {
                        var defaultsType = Object.prototype.toString.call(opt.defaults[attr]).slice(8, -1).toLowerCase();
                        var inheritsType = Object.prototype.toString.call(opt.inherits[attr]).slice(8, -1).toLowerCase();
                        if (defaultsType == inheritsType && opt.isDeep) {
                            //类型相同
                            if (defaultsType == 'object') {
                                //当为对象
                                extend({ defaults: opt.defaults[attr], inherits: opt.inherits[attr] });
                            } else if (defaultsType == 'array') {
                                //当为数组时
                                opt.inherits[attr].forEach(function (v, i) {
                                    var vDefaultsType = Object.prototype.toString.call(opt.defaults[attr][i]).slice(8, -1).toLowerCase();
                                    var vInheritsType = Object.prototype.toString.call(opt.inherits[attr][i]).slice(8, -1).toLowerCase();
                                    if (vInheritsType == vDefaultsType && opt.isDeep) {
                                        if (vDefaultsType == 'object') {
                                            extend({ defaults: opt.defaults[attr][i], inherits: opt.inherits[attr][i] });
                                        } else {
                                            opt.defaults[attr][i] = opt.inherits[attr][i];
                                        }
                                    } else {
                                        opt.defaults[attr][i] = opt.inherits[attr][i];
                                    }
                                });
                            } else {
                                opt.defaults[attr] = opt.inherits[attr];
                            }
                        } else {
                            //类型不同,直接后面的覆盖前面的
                            opt.defaults[attr] = opt.inherits[attr];
                        }
                    }
                }
                return opt.defaults;
            }
            /*
            var obj1 = extend({
                defaults: {
                    a: 'a',
                    b: {
                        b1: 'b1',
                        b2: 'b2',
                        b3: {
                            c1: 'c1'
                        }
                    }
                },
                inherits: {
                    a: 0,
                    b: {
                        b2: 1,
                        b3: {
                            c2: 2
                        }
                    }
                }
            });
            console.log(obj1);//{ a: 0, b: { b1: 'b1', b2: 1, b3: { c1: 'c1', c2: 2 } } }
            var obj2 = extend({
                defaults: {
                    b: [
                        {a1: 'a1'},
                        {a2: 'a2'}
                    ]
                },
                inherits: {
                    b: [
                        'what?',
                        {b1: 'b1'},
                        {b2: 'b2'}
                    ]
                }
            });
            console.log(obj2);//{ b: [ 'what?', { a2: 'a2', b1: 'b1' }, { b2: 'b2' } ] }
            */
            module.exports = extend;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/extend.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 10: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //补零函数
            function fillZero(json) {
                var opt = json || {};
                var num = opt.num;
                if (num < 10) {
                    return '0' + num;
                } else {
                    return '' + num;
                }
            }
            module.exports = fillZero;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/fill-zero.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 11: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //获取一个原生的dom节点,当传入的是dom,或者是选择器的时候
            function getOneDom(json) {
                var opt = json || {};
                opt.dom = opt.dom || "body"; //这个仅支持传入选择器和原生dom节点
                var resultDom = null;
                if (opt.dom) {
                    //如果是字符串
                    if (Object.prototype.toString.call(opt.dom).slice(8, -1).toLowerCase() == 'string') {
                        resultDom = document.querySelector(opt.dom);
                    }
                    //如果是dom节点
                    if (opt.dom.nodeType && opt.dom.nodeType == 1) {
                        resultDom = opt.dom;
                    }
                }
                return resultDom;
            }
            module.exports = getOneDom;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/get-one-dom.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 12: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            "use strict";
            //获取指定父级

            function getParent(json) {
                var opt = json || {};
                var obj = opt.obj;
                var selector = opt.selector;
                if (!obj) {
                    //第一参数不符合规范
                    console.log('参数错误,第一参数需要一个元素节点对象');
                    return null;
                }
                if (!selector) {
                    //没有第二参数默认选取直接父级
                    return obj.parentNode;
                } else if (typeof selector == 'string') {
                    obj = obj.parentNode;
                    switch (selector.charAt(0)) {
                        case '.':
                            //通过class获取父级
                            while (obj) {
                                if (!obj.classList) {
                                    console.log('no find class');
                                    return null;
                                }
                                if (obj.classList.contains(selector.substring(1))) {
                                    return obj;
                                } else {
                                    obj = obj.parentNode;
                                }
                            }
                            break;
                        case '#':
                            //通过id获取父级
                            while (obj) {
                                if (obj == document) {
                                    console.log('no find id');
                                    return null;
                                }
                                if (obj.id == selector.substring(1)) {
                                    return obj;
                                } else {
                                    obj = obj.parentNode;
                                }
                            }
                            break;
                        default:
                            //通过标签名获取父级
                            while (obj) {
                                if (obj == document) {
                                    console.log('no find tagName');
                                    return null;
                                }
                                if (obj.tagName.toLowerCase() == selector) {
                                    return obj;
                                } else {
                                    obj = obj.parentNode;
                                }
                            }
                            break;
                    }
                }
            }
            module.exports = getParent;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/get-parent.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 13: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //返回顶部
            function goTop(json) {
                var opt = json || {};
                var obj = opt.obj;
                var to = opt.to || '0';
                if (!obj) {
                    console.log('parameter error');
                    return false;
                }
                var doc = document;
                var scale = 6;
                var scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
                var speed = 0;
                var timer = null;
                var fn = function fn() {
                    speed = Math.ceil(scrollT - to / scale);
                    scrollT -= speed;
                    window.scrollTo(0, scrollT);
                    timer = requestAnimationFrame(fn);
                    if (scrollT <= to * 1) {
                        cancelAnimationFrame(timer);
                    }
                };
                obj.addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    ev.preventDefault();
                    scrollT = doc.documentElement.scrollTop || doc.body.scrollTop;
                    requestAnimationFrame(fn);
                });
                doc.addEventListener('touchstart', function () {
                    cancelAnimationFrame(timer);
                });
            }
            module.exports = goTop;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/go-top.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 14: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //html转成DOM节点
            function htmlToDom(json) {
                var opt = json || {};
                var html = opt.html;
                var div = document.createElement('div');
                div.innerHTML = html;
                return div.children[0];
            }
            module.exports = htmlToDom;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/html-to-dom.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 15: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            function isPc() {
                var userAgentInfo = navigator.userAgent;
                var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                var flag = true;
                for (var v = 0; v < Agents.length; v++) {
                    if (userAgentInfo.indexOf(Agents[v]) > 0) {
                        flag = false;
                        break;
                    }
                }
                return flag;
            }
            module.exports = isPc;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/is-pc.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 16: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //对象转数组
            function jsonToArray(json) {
                var opt = json || {};
                var obj = opt.obj;
                var arr = [];
                if (obj instanceof Array) {
                    obj.forEach(function (v, i) {
                        arr.push([i, v]);
                    });
                } else {
                    for (var attr in obj) {
                        if (obj.hasOwnProperty(attr)) {
                            arr.push([attr, obj[attr]]);
                        }
                    }
                }
                return arr;
            }
            module.exports = jsonToArray;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/json-to-array.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 17: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 16/12/17.
             */
            function lazyload(json) {
                var opt = json || {};
                var height = opt.height || 0; //多加载一部分高度的图片
                var interval = opt.interval || 80; //延迟时间
                var doc = document;
                var fn = function fn() {
                    var aImg = [].slice.call(doc.getElementsByClassName('m-lazy-load')); //所有的img元素节点
                    var iLen = aImg.length;
                    if (!iLen) {
                        return false;
                    }
                    //获取top
                    var offsetTop = function offsetTop(obj) {
                        var top = 0;
                        while (obj) {
                            top += obj.offsetTop;
                            obj = obj.offsetParent;
                        }
                        return top;
                    };
                    var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUCB1jYAACAAAFAAGNu5vzAAAAAElFTkSuQmCC';
                    aImg.forEach(function (v) {
                        if (v.getAttribute('src') != v.dataset.src && v.tagName.toLowerCase() == 'img') {
                            v.src = src;
                            v.setAttribute('height', '100%');
                            v.setAttribute('width', '100%');
                            v.style.opacity = '0';
                            v.style.transition = 'opacity 0.4s';
                        }
                    });
                    var iClientH = doc.documentElement.clientHeight;
                    var iScrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                    var iResultTop = iClientH + iScrollTop + height;
                    aImg.forEach(function (v) {
                        var iObjTop = offsetTop(v) - height;
                        var iObjBottom = offsetTop(v) + v.offsetHeight;
                        //height
                        if (iResultTop >= iObjTop && iObjTop >= iScrollTop || iObjBottom > iScrollTop && iObjBottom < iResultTop) {
                            if (v.tagName.toLowerCase() == 'img') {
                                if (v.getAttribute('src') != v.dataset.src) {
                                    v.src = v.dataset.src;
                                    v.removeAttribute('height');
                                    v.removeAttribute('width');
                                }
                            } else {
                                v.style.backgroundImage = 'url(' + v.dataset.src + ')';
                                v.style.backgroundPosition = 'center center';
                                v.style.backgroundRepeat = 'no-repeat';
                            }
                            v.style.opacity = '1';
                            v.classList.add('m-lazy-load-show');
                        }
                    });
                };
                fn();
                var timer = null;
                var fnScroll = function fnScroll() {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        fn();
                    }, interval);
                };
                window.addEventListener('scroll', function () {
                    fnScroll();
                });
            }
            module.exports = lazyload;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/lazyload.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 18: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //秒转时间
            function secondsToTime(json) {
                var opt = json || {};
                var seconds = opt.seconds;
                //天
                var d = Math.floor(seconds / 3600 / 24);
                //时
                var h = Math.floor(seconds / 3600 % 24);
                //分
                var m = Math.floor(seconds % 3600 / 60);
                //秒
                var s = Math.floor(seconds % 60);
                return { d: d, h: h, m: m, s: s, a: seconds };
            }
            module.exports = secondsToTime;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/seconds-to-time.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 19: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //字符数量限制
            function strLimit(json) {
                var opt = json || {};
                var max = opt.max;
                var str = opt.str;
                if (!str) {
                    return '';
                }
                var length = str.length;
                if (length > max) {
                    str = str.substring(0, max);
                }
                return str;
            }
            module.exports = strLimit;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/str-limit.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 20: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //倒计时
            function timeCountDown(json) {
                var opt = json || {};
                var seconds = opt.seconds;
                //运行的回调
                var runCallback = opt.runCallback;
                //结束的回调
                var overCallback = opt.overCallback;
                //时间转换
                var timeTransform = function timeTransform(opt) {
                    var seconds = opt.seconds;
                    //天
                    var d = Math.floor(seconds / 3600 / 24);
                    //时
                    var h = Math.floor(seconds / 3600 % 24);
                    //分
                    var m = Math.floor(seconds % 3600 / 60);
                    //秒
                    var s = Math.floor(seconds % 60);
                    return { d: d, h: h, m: m, s: s, a: seconds };
                };
                if (seconds <= 0) {
                    //时间小于等于0秒
                    seconds = 0;
                    runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                    overCallback && overCallback(); //结束时的回调
                } else {
                    //时间大于0秒
                    runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                    //倒计时走你
                    var timer = setInterval(function () {
                        seconds--;
                        runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                        if (seconds < 0) {
                            seconds = 0;
                            clearInterval(timer);
                            runCallback && runCallback(timeTransform({ seconds: seconds })); //运行时的回调
                            overCallback && overCallback(); //结束时的回调
                        }
                    }, 1000);
                }
            }
            module.exports = timeCountDown;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/time-count-down.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 21: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 16/12/4.
             */
            //验证
            var validate = {
                //是不是空
                isSpace: function isSpace(json) {
                    var opt = json || {};
                    var success = opt.success || function () {
                        console.log('no find success callback');
                    };
                    var fail = opt.fail || function () {
                        console.log('no find fail callback');
                    };
                    var value = opt.value || " ";
                    var valueTrim = value.trim();
                    var b = false;
                    if (valueTrim == '') {
                        b = true;
                        success();
                    } else {
                        fail();
                    }
                    return b;
                },
                //是不是0
                isZero: function isZero(json) {
                    var opt = json || {};
                    var success = opt.success || function () {
                        console.log('no find success callback');
                    };
                    var fail = opt.fail || function () {
                        console.log('no find fail callback');
                    };
                    var value = opt.value || " ";
                    var valueTrim = value.trim();
                    var b = false;
                    if (valueTrim == 0) {
                        b = true;
                        success();
                    } else {
                        fail();
                    }
                    return b;
                },
                //是不是整数(包含0)
                isInteger: function isInteger(json) {
                    var opt = json || {};
                    var success = opt.success || function () {
                        console.log('no find success callback');
                    };
                    var fail = opt.fail || function () {
                        console.log('no find fail callback');
                    };
                    var value = opt.value || " ";
                    var valueTrim = value.trim();
                    var re = /^\d+$/;
                    var b = false;
                    if (re.test(valueTrim)) {
                        b = true;
                        success();
                    } else {
                        fail();
                    }
                    return b;
                },
                //是不是保留了num位小数点
                isReservedDecimal: function isReservedDecimal(json) {
                    var opt = json || {};
                    var success = opt.success || function () {
                        console.log('no find success callback');
                    };
                    var fail = opt.fail || function () {
                        console.log('no find fail callback');
                    };
                    var num = opt.num || 2;
                    var value = opt.value || " ";
                    var valueTrim = value.trim();
                    var re = new RegExp("^\\d+\\.\\d{" + num + "}$");
                    var b = false;
                    if (re.test(valueTrim)) {
                        b = true;
                        success();
                    } else {
                        fail();
                    }
                    return b;
                }
            };
            module.exports = validate;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/validate.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 22: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //当滚动到了浏览器的底部
            function whenScrollBottom(json) {
                var opt = json || {};
                var success = opt.success || function () {};
                var fail = opt.fail || function () {};
                var doc = document;
                var interval = opt.interval || 80; //延迟时间
                var isBottom = true; //假设到达了底部
                var fn = function fn() {
                    var allH = doc.body.offsetHeight;
                    var scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop;
                    var clientHeight = doc.documentElement.clientHeight;
                    if (scrollTop + clientHeight >= allH - 100 && isBottom) {
                        isBottom = false;
                        success();
                        //假设1000毫秒之后数据加载完毕
                        setTimeout(function () {
                            isBottom = true;
                        }, 1000);
                    } else {
                        fail();
                    }
                };
                fn();
                var timer = null;
                var fnScroll = function fnScroll() {
                    clearTimeout(timer);
                    timer = setTimeout(function () {
                        fn();
                    }, interval);
                };
                window.addEventListener('scroll', function () {
                    fnScroll();
                });
            }
            module.exports = whenScrollBottom;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/when-scroll-bottom.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 23: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/1.
             */
            //是否禁止浏览器滚动
            function whetherDisableScroll() {
                var doc = document;
                return {
                    //阻止冒泡
                    stopPropagation: function stopPropagation(ev) {
                        ev.stopPropagation();
                    },
                    //阻止默认事件
                    preventDefault: function preventDefault(ev) {
                        ev.preventDefault();
                    },
                    //阻止冒泡,阻止默认事件
                    returnFalse: function returnFalse(ev) {
                        ev.preventDefault();
                        ev.stopPropagation();
                    },
                    //禁止滚动
                    noScroll: function noScroll() {
                        doc.addEventListener('touchmove', this.preventDefault, false);
                        doc.documentElement.style.overflow = 'hidden';
                    },
                    //解除禁止浏览器滚动
                    yesScroll: function yesScroll() {
                        doc.removeEventListener('touchmove', this.preventDefault, false);
                        doc.documentElement.style.overflow = 'auto';
                    }
                };
            }
            module.exports = whetherDisableScroll;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../function/whether-disable-scroll.js", "/../function");
    }, { "buffer": 2, "r7L21G": 4 }], 24: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //底层方法
            var base = require('../base/base.js');

            //构造函数
            function Fn(json) {
                //外部传进来的参数
                this.opt = base.extend({
                    defaults: {
                        //父级
                        parent: "body", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            click: function click() {}
                        },
                        //配置
                        config: {
                            moduleType: 0, //三种类型 0,1,2
                            isClearTimer: true, //是否清除所有定时器(默认清除)
                            isShowModule: true //是否显示模块(默认显示)
                        },
                        //数据
                        data: {
                            info: "\u5468\u534E\u98DE\u6D4B\u8BD5"
                        }
                    },
                    inherits: json
                });
                //内部的一些属性
                this.moduleDom = null; //内部的模块
                this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
                this.timer = {}; //假设内部有定时器
                this.init(); //初始化
            }

            //初始化
            Fn.prototype.init = function () {
                this.render();
                this.power();
            };

            //渲染
            Fn.prototype.render = function () {
                this.renderModuleDom();
                this.renderParentDom();
            };

            //内部的模块
            Fn.prototype.renderModuleDom = function () {
                this.moduleClass = "m-footer";
                var html = "\n        " + this.renderModuleType0() + "\n        " + this.renderModuleType1() + "\n        " + this.renderModuleType2() + "\n    ";
                this.moduleDom = base.createElement({
                    attribute: {
                        className: this.moduleClass,
                        innerHTML: html
                    }
                });
            };

            Fn.prototype.renderModuleType0 = function () {
                if (this.opt.config.moduleType == 0) {
                    this.moduleClass = "m-footer m-footer-type0";
                    return "\n            <div class=\"m-footer-wrap\">\n                <div class=\"m-footer-header\">\n                    0\n                </div>\n                <div class=\"m-footer-body\">\n                    body\n                </div>\n                <div class=\"m-footer-body\">\n                    body\n                </div>\n            </div>\n        ";
                } else {
                    return "";
                }
            };

            Fn.prototype.renderModuleType1 = function () {
                if (this.opt.config.moduleType == 1) {
                    this.moduleClass = "m-footer m-footer-type1";
                } else {
                    return "";
                }
            };

            Fn.prototype.renderModuleType2 = function () {
                if (this.opt.config.moduleType == 2) {
                    this.moduleClass = "m-footer m-footer-type2";
                } else {
                    return "";
                }
            };

            //外部的容器
            Fn.prototype.renderParentDom = function () {
                this.parentDom = base.getOneDom({ dom: this.opt.parent });
                if (!this.parentDom) {
                    return false;
                }
                if (this.parentDom) {
                    if (this.opt.config.isShowModule) {
                        this.parentDom.appendChild(this.moduleDom);
                    }
                }
            };

            //移除内部的模块
            Fn.prototype.removeModuleDom = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
                //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
                this.clearTimer();
            };

            //清除内部的定时器
            Fn.prototype.clearTimer = function () {
                if (this.opt.config.isClearTimer) {
                    for (var attr in this.timer) {
                        if (this.timer.hasOwnProperty(attr)) {
                            clearInterval(this.timer[attr]);
                            clearTimeout(this.timer[attr]);
                        }
                    }
                }
            };

            //移除外部的容器
            Fn.prototype.removeParentDom = function () {
                //先移除内部的模块
                this.removeModuleDom();
                //再移除外部的容器
                if (this.parentDom) {
                    this.parentDom.parentNode.removeChild(this.parentDom);
                }
            };

            //模块显示
            Fn.prototype.show = function () {
                if (this.parentDom) {
                    this.parentDom.appendChild(this.moduleDom);
                }
            };

            //模块隐藏
            Fn.prototype.hide = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
            };

            //功能
            Fn.prototype.power = function () {};

            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-footer.js", "/../modules");
    }, { "../base/base.js": 5, "buffer": 2, "r7L21G": 4 }], 25: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //底层方法
            var base = require('../base/base.js');

            //构造函数
            function Fn(json) {
                //外部传进来的参数
                this.opt = base.extend({
                    defaults: {
                        //父级
                        parent: "body", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            click: function click() {}
                        },
                        //配置
                        config: {
                            moduleStyle: "", //内部模块的样式(写法和css相同)
                            isTransparent: false, //是不是透明的遮罩(默认不透明)
                            isClearTimer: true, //是否清除所有定时器(默认清除)
                            isShowModule: false //是否显示模块(默认不显示)
                        },
                        //数据
                        data: {
                            info: "\u5468\u534E\u98DE\u6D4B\u8BD5"
                        }
                    },
                    inherits: json
                });
                //内部的一些属性
                this.moduleDom = null; //内部的模块
                this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
                this.timer = {}; //假设内部有定时器
                this.init(); //初始化
            }

            //初始化
            Fn.prototype.init = function () {
                this.render();
                this.power();
            };

            //渲染
            Fn.prototype.render = function () {
                this.renderModuleDom();
                this.renderParentDom();
            };

            //内部的模块
            Fn.prototype.renderModuleDom = function () {
                var isTransparent = '';
                if (this.opt.config.isTransparent) {
                    isTransparent = 'm-mask-transparent';
                }
                this.moduleDom = base.createElement({
                    style: this.opt.config.moduleStyle,
                    attribute: {
                        className: "m-mask " + isTransparent,
                        innerHTML: ""
                    }
                });
            };

            //外部的容器
            Fn.prototype.renderParentDom = function () {
                this.parentDom = base.getOneDom({ dom: this.opt.parent });
                if (!this.parentDom) {
                    return false;
                }
                if (this.parentDom) {
                    if (getComputedStyle(this.parentDom).position == 'static') {
                        this.parentDom.style.position = 'relative';
                    }
                    if (this.opt.config.isShowModule) {
                        this.parentDom.appendChild(this.moduleDom);
                    }
                }
            };

            //移除内部的模块
            Fn.prototype.removeModuleDom = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
                //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
                this.clearTimer();
            };

            //清除内部的定时器
            Fn.prototype.clearTimer = function () {
                if (this.opt.config.isClearTimer) {
                    for (var attr in this.timer) {
                        if (this.timer.hasOwnProperty(attr)) {
                            clearInterval(this.timer[attr]);
                            clearTimeout(this.timer[attr]);
                        }
                    }
                }
            };

            //移除外部的容器
            Fn.prototype.removeParentDom = function () {
                //先移除内部的模块
                this.removeModuleDom();
                //再移除外部的容器
                if (this.parentDom) {
                    this.parentDom.parentNode.removeChild(this.parentDom);
                }
            };

            //模块显示
            Fn.prototype.show = function () {
                if (this.parentDom) {
                    this.parentDom.appendChild(this.moduleDom);
                }
            };

            //模块隐藏
            Fn.prototype.hide = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
            };

            //功能
            Fn.prototype.power = function () {
                this.events();
            };

            //事件
            Fn.prototype.events = function () {
                var self = this;
                this.moduleDom.addEventListener('click', function (ev) {
                    self.opt.callback.click();
                    ev.stopPropagation();
                });
            };

            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-mask.js", "/../modules");
    }, { "../base/base.js": 5, "buffer": 2, "r7L21G": 4 }], 26: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            function Fn(json) {
                this.opt = json || {};
                this.opt.checkTxt = this.opt.checkTxt || { on: '已开启', off: '已关闭' };
                this.opt.status = this.opt.status || 'off';
                this.opt.isHand = this.opt.isHand ? true : false;
                this.opt.clickCallback = this.opt.clickCallback || function () {
                    console.log('点击的回调');
                };
                this.onClass = 'm-radio-switch-active'; //打开时对应状态的class
                this.init();
            }
            Fn.prototype.init = function () {
                this.render();
                this.events();
            };
            Fn.prototype.render = function () {
                var className = "";
                var status = this.opt.status;
                if (status == 'on') {
                    className = this.onClass;
                }
                this.parentDom = document.createElement('div');
                this.parentDom.classList.add("m-radio-switch");
                if (className) {
                    this.parentDom.classList.add(className);
                }
                this.parentDom.innerHTML = "            \n        <div class=\"m-radio-switch-box\">\n            <div class=\"m-radio-switch-run\"></div>\n        </div>\n        <div class=\"m-radio-switch-txt\">" + this.opt.checkTxt[status] + "</div>            \n    ";
            };
            Fn.prototype.on = function () {
                //开
                this.parentDom.classList.add(this.onClass);
                this.opt.status = 'on';
                this.changeTxt();
            };
            Fn.prototype.off = function () {
                //关
                this.parentDom.classList.remove(this.onClass);
                this.opt.status = 'off';
                this.changeTxt();
            };
            Fn.prototype.changeTxt = function () {
                this.parentDom.querySelector('.m-radio-switch-txt').innerHTML = this.opt.checkTxt[this.opt.status];
            };
            Fn.prototype.clickFn = function () {
                var self = this;
                if (!self.opt.isHand) {
                    if (self.opt.status == 'off') {
                        self.on();
                    } else {
                        self.off();
                    }
                }
                self.opt.clickCallback({
                    parentDom: this.parentDom,
                    status: self.opt.status
                });
            };
            Fn.prototype.events = function () {
                var self = this;
                this.parentDom.addEventListener('click', function () {
                    self.clickFn();
                });
            };
            Fn.prototype.remove = function () {
                this.parentDom.parentNode.removeChild(this.parentDom);
            };
            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-radio-switch.js", "/../modules");
    }, { "buffer": 2, "r7L21G": 4 }], 27: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //底层方法
            var base = require('../base/base.js');

            //构造函数
            function Fn(json) {
                //外部传进来的参数
                this.opt = base.extend({
                    defaults: {
                        //父级
                        parent: "body", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            click: function click() {}
                        },
                        //配置
                        config: {
                            moduleStyle: "", //内部模块的样式(写法和css相同)
                            isEvent: true, //默认具备事件
                            isClearTimer: true, //是否清除所有定时器(默认清除)
                            isShowModule: true //是否显示模块(默认显示)
                        },
                        //数据
                        data: {
                            allStarNum: 5,
                            nowStarNum: 5
                        }
                    },
                    inherits: json
                });
                //内部的一些属性
                this.moduleDom = null; //内部的模块
                this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
                this.timer = {}; //假设内部有定时器
                this.init(); //初始化
            }

            //初始化
            Fn.prototype.init = function () {
                this.render();
                this.power();
            };

            //渲染
            Fn.prototype.render = function () {
                this.renderModuleDom();
                this.renderParentDom();
            };

            //内部的模块
            Fn.prototype.renderModuleDom = function () {
                var html = "";
                for (var i = 0; i < this.opt.data.allStarNum; i++) {
                    var className = '';
                    if (i < this.opt.data.nowStarNum) {
                        className = 'm-star-item-active';
                    }
                    html += "<div data-index=\"" + i + "\" class=\"iconfont icon-xingping m-star-item " + className + "\"></div>";
                }
                this.moduleDom = base.createElement({
                    attribute: {
                        className: "m-star",
                        innerHTML: html
                    }
                });
                this.opt.star = this.moduleDom.children;
            };

            //外部的容器
            Fn.prototype.renderParentDom = function () {
                this.parentDom = base.getOneDom({ dom: this.opt.parent });
                if (!this.parentDom) {
                    return false;
                }
                if (this.parentDom) {
                    if (this.opt.config.isShowModule) {
                        this.parentDom.appendChild(this.moduleDom);
                    }
                }
            };

            //移除内部的模块
            Fn.prototype.removeModuleDom = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
                //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
                this.clearTimer();
            };

            //清除内部的定时器
            Fn.prototype.clearTimer = function () {
                if (this.opt.config.isClearTimer) {
                    for (var attr in this.timer) {
                        if (this.timer.hasOwnProperty(attr)) {
                            clearInterval(this.timer[attr]);
                            clearTimeout(this.timer[attr]);
                        }
                    }
                }
            };

            //移除外部的容器
            Fn.prototype.removeParentDom = function () {
                //先移除内部的模块
                this.removeModuleDom();
                //再移除外部的容器
                if (this.parentDom) {
                    this.parentDom.parentNode.removeChild(this.parentDom);
                }
            };

            //模块显示(显示隐藏和是否清除定时器无关)
            Fn.prototype.show = function () {
                if (this.parentDom) {
                    this.parentDom.appendChild(this.moduleDom);
                }
            };

            //模块隐藏(显示隐藏和是否清除定时器无关)
            Fn.prototype.hide = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
            };

            //功能
            Fn.prototype.power = function () {
                this.events();
            };

            //事件
            Fn.prototype.events = function () {
                var self = this;
                if (this.opt.config.isEvent) {
                    this.moduleDom.addEventListener('click', function (ev) {
                        var target = ev.target;
                        if (target.classList.contains('m-star-item')) {
                            var index = target.dataset.index;
                            for (var j = 0; j < self.opt.data.allStarNum; j++) {
                                if (j <= index) {
                                    self.opt.star[j].classList.add('m-star-item-active');
                                } else {
                                    self.opt.star[j].classList.remove('m-star-item-active');
                                }
                            }
                            self.opt.callback.click({ index: index });
                        }
                    });
                }
            };

            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-star.js", "/../modules");
    }, { "../base/base.js": 5, "buffer": 2, "r7L21G": 4 }], 28: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //底层方法
            var base = require('../base/base.js');

            //构造函数
            function Fn(json) {
                //外部传进来的参数
                this.opt = base.extend({
                    defaults: {
                        //父级
                        parent: "body", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            click: function click() {}
                        },
                        //配置
                        config: {
                            isClearTimer: true, //是否清除所有定时器(默认清除)
                            isShowModule: true //是否显示模块(默认显示)
                        },
                        //数据
                        data: {
                            header: [{ html: 'header0' }, { html: 'header1' }, { html: 'header2' }],
                            body: [[{ html: 'body0-0' }, { html: 'body0-1' }, { html: 'body0-2' }], [{ html: 'body1-0' }, { html: 'body1-1' }, { html: 'body1-2' }]],
                            footer: ''
                        }
                    },
                    inherits: json
                });
                //内部的一些属性
                this.moduleDom = null; //内部的模块
                this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
                this.timer = {}; //假设内部有定时器
                this.init(); //初始化
            }

            //初始化
            Fn.prototype.init = function () {
                this.render();
                this.power();
            };

            //渲染
            Fn.prototype.render = function () {
                this.renderModuleDom();
                this.renderParentDom();
            };

            //内部的模块
            Fn.prototype.renderModuleDom = function () {
                this.moduleDom = base.createElement({
                    attribute: {
                        className: "m-table",
                        innerHTML: "\n                <div class=\"m-table-header\">\n                    <div class=\"m-table-row\">\n                        " + this.renderHeader() + "\n                    </div>\n                </div>\n                <div class=\"m-table-body\">\n                    " + this.renderBody() + "\n                </div>\n                <div class=\"m-table-footer\">\n                    " + this.renderFooter() + "\n                </div>\n            "
                    }
                });
            };

            Fn.prototype.renderHeader = function () {
                var html = "";
                this.opt.data.header.forEach(function (v) {
                    html += "\n            <div class=\"m-table-col\">\n                <div class=\"m-table-col-wrap\">\n                    " + v.html + "\n                </div>\n            </div>\n        ";
                });
                return html;
            };

            Fn.prototype.renderBody = function () {
                var html = "";
                this.opt.data.body.forEach(function (v0) {
                    var row = "";
                    v0.forEach(function (v1) {
                        row += "\n                <div class=\"m-table-col\">\n                    <div class=\"m-table-col-wrap\">\n                        " + v1.html + "\n                    </div>\n                </div>\n            ";
                    });
                    html += "<div class=\"m-table-row\">" + row + "</div>";
                });
                return html;
            };

            Fn.prototype.renderFooter = function () {
                return this.opt.data.footer;
            };

            //外部的容器
            Fn.prototype.renderParentDom = function () {
                this.parentDom = base.getOneDom({ dom: this.opt.parent });
                if (!this.parentDom) {
                    return false;
                }
                if (this.parentDom) {
                    if (this.opt.config.isShowModule) {
                        this.parentDom.appendChild(this.moduleDom);
                    }
                }
            };

            //移除内部的模块
            Fn.prototype.removeModuleDom = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
                //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
                this.clearTimer();
            };

            //清除内部的定时器
            Fn.prototype.clearTimer = function () {
                if (this.opt.config.isClearTimer) {
                    for (var attr in this.timer) {
                        if (this.timer.hasOwnProperty(attr)) {
                            clearInterval(this.timer[attr]);
                            clearTimeout(this.timer[attr]);
                        }
                    }
                }
            };

            //移除外部的容器
            Fn.prototype.removeParentDom = function () {
                //先移除内部的模块
                this.removeModuleDom();
                //再移除外部的容器
                if (this.parentDom) {
                    this.parentDom.parentNode.removeChild(this.parentDom);
                }
            };

            //模块显示
            Fn.prototype.show = function () {
                if (this.parentDom) {
                    this.parentDom.appendChild(this.moduleDom);
                }
            };

            //模块隐藏
            Fn.prototype.hide = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
            };

            //功能
            Fn.prototype.power = function () {
                this.events();
            };

            //事件
            Fn.prototype.events = function () {};

            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-table.js", "/../modules");
    }, { "../base/base.js": 5, "buffer": 2, "r7L21G": 4 }], 29: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            //底层方法
            var base = require('../base/base.js');

            //构造函数
            function Fn(json) {
                //外部传进来的参数
                this.opt = base.extend({
                    defaults: {
                        //父级
                        parent: "body", //这个仅支持传入选择器和原生dom节点
                        //回调
                        callback: {
                            click: function click() {}
                        },
                        //配置
                        config: {
                            moduleStyle: "", //内部模块的样式(写法和css相同)
                            isClearTimer: true, //是否清除所有定时器(默认清除)
                            isShowModule: true //是否显示模块(默认显示)
                        },
                        //数据
                        data: {
                            info: "\u5468\u534E\u98DE\u6D4B\u8BD5"
                        }
                    },
                    inherits: json
                });
                //内部的一些属性
                this.moduleDom = null; //内部的模块
                this.parentDom = null; //内部模块的外部承载容器,如果没有也没关系,不过不往里面append罢了
                this.timer = {}; //假设内部有定时器
                this.init(); //初始化
            }

            //初始化
            Fn.prototype.init = function () {
                this.render();
                this.power();
            };

            //渲染
            Fn.prototype.render = function () {
                this.renderModuleDom();
                this.renderParentDom();
            };

            //内部的模块
            Fn.prototype.renderModuleDom = function () {
                this.moduleDom = base.createElement({
                    style: this.opt.config.moduleStyle,
                    custom: {
                        index: 0
                    },
                    attribute: {
                        className: "m-test",
                        innerHTML: "\n                <div class=\"m-test-timer\">0</div>\n                <div class=\"m-test-info\">" + this.opt.data.info + "</div>\n            "
                    }
                });
            };

            //外部的容器
            Fn.prototype.renderParentDom = function () {
                this.parentDom = base.getOneDom({ dom: this.opt.parent });
                if (!this.parentDom) {
                    return false;
                }
                if (this.parentDom) {
                    if (this.opt.config.isShowModule) {
                        this.parentDom.appendChild(this.moduleDom);
                    }
                }
            };

            //移除内部的模块
            Fn.prototype.removeModuleDom = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
                //继续清除一些其他东西,例如定时器(假设有定时器需要被清除)
                this.clearTimer();
            };

            //清除内部的定时器
            Fn.prototype.clearTimer = function () {
                if (this.opt.config.isClearTimer) {
                    for (var attr in this.timer) {
                        if (this.timer.hasOwnProperty(attr)) {
                            clearInterval(this.timer[attr]);
                            clearTimeout(this.timer[attr]);
                        }
                    }
                }
            };

            //移除外部的容器
            Fn.prototype.removeParentDom = function () {
                //先移除内部的模块
                this.removeModuleDom();
                //再移除外部的容器
                if (this.parentDom) {
                    this.parentDom.parentNode.removeChild(this.parentDom);
                }
            };

            //模块显示(显示隐藏和是否清除定时器无关)
            Fn.prototype.show = function () {
                if (this.parentDom) {
                    this.parentDom.appendChild(this.moduleDom);
                }
            };

            //模块隐藏(显示隐藏和是否清除定时器无关)
            Fn.prototype.hide = function () {
                if (this.moduleDom.parentNode) {
                    this.moduleDom.parentNode.removeChild(this.moduleDom);
                }
            };

            //功能
            Fn.prototype.power = function () {
                this.events();
                this.others();
            };

            //事件
            Fn.prototype.events = function () {};

            //其他
            Fn.prototype.others = function () {
                var self = this;
                var interval = self.moduleDom.querySelector('.m-test-timer');
                this.timer.timer1 = setInterval(function () {
                    interval.innerHTML = interval.innerHTML * 1 + 1;
                }, 1000);
            };

            module.exports = Fn;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-test.js", "/../modules");
    }, { "../base/base.js": 5, "buffer": 2, "r7L21G": 4 }], 30: [function (require, module, exports) {
        (function (process, global, Buffer, __argument0, __argument1, __argument2, __argument3, __filename, __dirname) {
            /**
             * Created by zhouhuafei on 17/1/2.
             */
            var base = require('../base/base.js');

            function ValidateInput(json) {
                this.opt = json || {};
                this.input = this.opt.input;
                this.parentClass = this.opt.parentClass || 'm-validate-input-parent';
                this.hintClass = this.opt.hintClass || 'm-validate-input-hint';
                this.errorClass = this.opt.errorClass || 'm-validate-input-error';
                this.validateType = this.input.dataset.validate || [];
                this.validateHintTxt = this.input.dataset.hint || [];
                this.init();
            }
            ValidateInput.prototype.init = function () {
                this.require();
                this.render();
            };
            ValidateInput.prototype.require = function () {
                this.validate = require('../function/validate');
            };
            ValidateInput.prototype.render = function () {
                this.renderParent();
                this.renderHint();
            };
            ValidateInput.prototype.renderParent = function () {
                this.parentDom = this.input.parentNode;
                this.parentDom.classList.add(this.parentClass);
            };
            ValidateInput.prototype.renderHint = function () {
                this.hintDom = document.createElement('em');
                this.hintDom.classList.add(this.hintClass);
            };
            ValidateInput.prototype.renderHintAdd = function (json) {
                var opt = json || {};
                this.hintDom.innerHTML = opt.txt || '本项必填';
                this.parentDom.appendChild(this.hintDom);
                this.input.classList.add(this.errorClass);
            };
            ValidateInput.prototype.renderHintRemove = function () {
                var isHaveHintDom = this.parentDom.querySelector("." + this.hintClass);
                if (isHaveHintDom) {
                    this.parentDom.removeChild(this.hintDom);
                }
                this.input.classList.remove(this.errorClass);
            };
            ValidateInput.prototype.validateSave = function () {
                var self = this;
                var type = self.validateType.split(' ');
                var hintTxt = self.validateHintTxt.split(' ');
                var value = this.input.value;
                var isTrue = true;
                type.forEach(function (v, i) {
                    if (v == 'no-space' && isTrue) {
                        //设置了非空验证
                        self.validate.isSpace({
                            value: value,
                            success: function success() {
                                //空
                                self.renderHintAdd({ txt: hintTxt[i] });
                                isTrue = false;
                            },
                            fail: function fail() {
                                //非空
                                self.renderHintRemove();
                                isTrue = true;
                            }
                        });
                    }
                    if (v == 'no-zero' && isTrue) {
                        //设置了非零验证
                        self.validate.isZero({
                            value: value,
                            success: function success() {
                                //零
                                self.renderHintAdd({ txt: hintTxt[i] });
                                isTrue = false;
                            },
                            fail: function fail() {
                                //非零
                                self.renderHintRemove();
                                isTrue = true;
                            }
                        });
                    }
                    if (v == 'yes-integer' && isTrue) {
                        //设置了整数验证
                        self.validate.isInteger({
                            value: value,
                            success: function success() {
                                //整数
                                self.renderHintRemove();
                                isTrue = true;
                            },
                            fail: function fail() {
                                //非整数
                                self.renderHintAdd({ txt: hintTxt[i] });
                                isTrue = false;
                            }
                        });
                    }
                });
            };
            ValidateInput.prototype.validateEventBlur = function () {
                var self = this;
                if (self.input) {
                    self.input.addEventListener('blur', function () {
                        self.validateSave();
                    });
                }
            };

            module.exports = ValidateInput;
        }).call(this, require("r7L21G"), typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {}, require("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../modules/m-validate-input.js", "/../modules");
    }, { "../base/base.js": 5, "../function/validate": 21, "buffer": 2, "r7L21G": 4 }] }, {}, [6]);