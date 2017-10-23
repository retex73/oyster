/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransportTypes = function () {
    function TransportTypes(transportType) {
        _classCallCheck(this, TransportTypes);

        this._transportType = transportType;

        this.transportTypes = [{
            "type": "bus"
        }, {
            "type": "tube"
        }];
    }

    _createClass(TransportTypes, [{
        key: "transportType",
        set: function set(type) {
            this._transportType = type;
        },
        get: function get() {
            var _this = this;

            return this.transportTypes.find(function (e) {
                return e.type === _this._transportType;
            });
        }
    }]);

    return TransportTypes;
}();

exports.default = TransportTypes;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stations = __webpack_require__(2);

var _stations2 = _interopRequireDefault(_stations);

var _fares = __webpack_require__(3);

var _fares2 = _interopRequireDefault(_fares);

var _transport_types = __webpack_require__(0);

var _transport_types2 = _interopRequireDefault(_transport_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tube Holborn to Earl's Court
 * 328 bus from Earl's Court to Chelsea
 * Tube Earl's court to Hammersmith
 */

var fares = new _fares2.default();

var BUS = new _transport_types2.default('bus').transportType;
var TUBE = new _transport_types2.default('tube').transportType;

console.log(BUS);

fares.barrierEntry(new _stations2.default('Holborn'), TUBE);

// fares.barrierEntry(new Stations("Earl's Court")); 


fares.barrierLeave(new _stations2.default("Earl's Court"), TUBE);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stations = function () {
    function Stations(station) {
        _classCallCheck(this, Stations);

        this._station = station;

        this.stations = [{
            "name": "Holborn",
            "zone": "1"
        }, {
            "name": "Earl's Court",
            "zone": "1,2"
        }, {
            "name": "Wimbledon",
            "zone": "3"
        }, {
            "name": "Hammersmit",
            "zone": "2"
        }];
    }

    _createClass(Stations, [{
        key: "station",
        set: function set(name) {
            return this._station;
        },
        get: function get() {
            var _this = this;

            return this.stations.find(function (e) {
                return e.name === _this._station;
            });
        }
    }]);

    return Stations;
}();

exports.default = Stations;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transport_types = __webpack_require__(0);

var _transport_types2 = _interopRequireDefault(_transport_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fares = function () {
    /**
     * fare is calculated at max fare on entry
     * on exit, max fare is removed, actual fare applied
     * The fare defaults to the minimum price
     * 
     * Anywhere in Zone 1               2.50
     * Any one zone outside zone 1      2.00
     * Any two zones including zone 1   3.00
     * Any two zones excluding zone 1   2.25
     * Any three zones                  3.20
     * Any bus journey                  1.80
     * 
     * Max possible fare is 3.20
     */

    function Fares() {
        var credit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

        _classCallCheck(this, Fares);

        this.credit = credit;
        this.maxFare = 3.20;
        this._currentFare = 0;
        this.zonesTravelled = [];
        this.busJourneyFare = 1.80;

        this.enterBarrier = 'BARRIER_ENTRY';
        this.leaveBarrier = 'BARRIER_LEAVE';

        this.BUS = new _transport_types2.default('bus').transportType;
        this.TUBE = new _transport_types2.default('tube').transportType;
    }

    // Get current fare


    _createClass(Fares, [{
        key: 'barrierEntry',
        value: function barrierEntry(station, method) {
            // Deduct the max fare
            this.currentFare = this.credit - this.maxFare;

            // If travel is by bus, automatically deduct the bus fare
            if (method.type === this.BUS.type) {
                this.currentFare = this.currentFare + this.maxFare - this.busJourneyFare;
            } else {
                // If the journey is by tube, push the zones and do the calculation on barrier exit
                this.zonesTravelled.push(station.station);
            }
        }
    }, {
        key: 'barrierLeave',
        value: function barrierLeave(station, method) {
            // If travel is by bus, the fare has already been deducted
            if (method.type === this.BUS.type) {
                return;
            } else {
                this.zonesTravelled.push(station.station);
                this.calculateFare();
            }
        }
    }, {
        key: 'calculateFare',
        value: function calculateFare() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {

                for (var _iterator = this.zonesTravelled[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var value = _step.value;


                    console.log(value);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return;

            switch (this.zonesTravelled) {
                case '':

            }
            // if zone 1: 
            // remove 2.50 from currentFare

            // if zone 1 doesn't exist
            // and array length is 1
            // remove 2.00

            // if zone 1 exists 
            // and array length is 2
            // remove 3.00

            // if zone 1 doesn't exist 
            // and array length is 2
            // remove 2.25

            // if zone 1 exists and 
            // and array length is greater than 2
            // remove 3.20

            // if travelMethod = 'bus'
            // remove 1.80 
        }
    }, {
        key: 'currentFare',
        get: function get() {
            return this._currentFare;
        }

        // Set current fare
        ,
        set: function set(fare) {
            this._currentFare = fare;
        }
    }]);

    return Fares;
}();

exports.default = Fares;

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map