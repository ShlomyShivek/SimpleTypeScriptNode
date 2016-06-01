/**
 * Created by shlomy.shivek on 5/31/2016.
 */
"use strict";
var Comp;
(function (Comp) {
    var Mod;
    (function (Mod) {
        var MyTest = (function () {
            function MyTest() {
            }
            MyTest.prototype.isOk = function (s) {
                return true;
            };
            return MyTest;
        }());
        Mod.MyTest = MyTest;
    })(Mod = Comp.Mod || (Comp.Mod = {}));
})(Comp || (Comp = {}));
module.exports = Comp;
//# sourceMappingURL=test.js.map