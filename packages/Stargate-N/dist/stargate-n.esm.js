import { v4 } from 'uuid';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Machine = function Machine() {
  this.id = v4();
};

var Chevron = /*#__PURE__*/function (_Machine) {
  _inheritsLoose(Chevron, _Machine);

  function Chevron(next, pass, orientation) {
    var _this;

    _this = _Machine.call(this) || this;
    _this.pass = pass;
    _this.orientation = orientation;
    _this.next = next;
    return _this;
  }

  var _proto = Chevron.prototype;

  _proto.process = function process(photons) {
    var _this2 = this;

    if (this.next === undefined) throw Error("`Chevron().next` is undefined in `Chevron().process`.");
    var processed = this.next.process(photons.map(function (photon) {
      var newPhoton = photon;

      for (var _iterator = _createForOfIteratorHelperLoose(_this2.pass), _step; !(_step = _iterator()).done;) {
        var transformation = _step.value;
        newPhoton = transformation(newPhoton);
      } // we can apply lots off stuff here


      return photon;
    }));
    this.imprint = processed;
    return processed;
  };

  _proto.render = function render() {
    if (!this.imprint) throw Error("Chevron hasn't been imprinted yet."); // use photon properties to draw something innteresting
  };

  return Chevron;
}(Machine);

export { Chevron };
//# sourceMappingURL=stargate-n.esm.js.map
