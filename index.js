"use strict";
exports.__esModule = true;
exports.targetHueSteps = exports.adjustHue = void 0;
var targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
};
exports.targetHueSteps = targetHueSteps;
var adjustHue = function (h) {
    if (h < 0)
        h += Math.ceil(-h / 360) * 360;
    return h % 360;
};
exports.adjustHue = adjustHue;
for (var type in Object.keys(targetHueSteps))
    console.log(type + 'haha');
