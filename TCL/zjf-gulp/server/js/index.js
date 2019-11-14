"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function () {
    function fnA() {
        console.log("a");
    }
    fnA();

    var Tab = function () {
        function Tab() {
            _classCallCheck(this, Tab);

            this.name = "admin";
        }

        _createClass(Tab, [{
            key: "show",
            value: function show() {
                var h = "hello";
                console.log("" + h + this.name);
            }
        }]);

        return Tab;
    }();

    var t = new Tab();
    t.show();
})();
;(function () {
    function fnB() {
        console.log("b");
    }
    fnB();
})();