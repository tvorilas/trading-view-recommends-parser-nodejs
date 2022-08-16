"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INTERVALS_SCHEMA = exports.RECOMMENDATIONS_ENUM = exports.INTERVALS_ENUM = exports.SCREENERS_ENUM = exports.EXCHANGES_ENUM = exports.REQUEST_INDICATORS = void 0;
exports.REQUEST_INDICATORS = [
    'Recommend.Other{}',
    'Recommend.All{}',
    'Recommend.MA{}',
    'RSI{}',
    'RSI[1]{}',
    'Stoch.K{}',
    'Stoch.D{}',
    'Stoch.K[1]{}',
    'Stoch.D[1]{}',
    'CCI20{}',
    'CCI20[1]{}',
    'ADX{}',
    'ADX+DI{}',
    'ADX-DI{}',
    'ADX+DI[1]{}',
    'ADX-DI[1]{}',
    'AO{}',
    'AO[1]{}',
    'Mom{}',
    'Mom[1]{}',
    'MACD.macd{}',
    'MACD.signal{}',
    'Rec.Stoch.RSI{}',
    'Stoch.RSI.K{}',
    'Rec.WR{}',
    'W.R{}',
    'Rec.BBPower{}',
    'BBPower{}',
    'Rec.UO{}',
    'UO{}',
    'close{}',
    'EMA5{}',
    'SMA5{}',
    'EMA10{}',
    'SMA10{}',
    'EMA20{}',
    'SMA20{}',
    'EMA30{}',
    'SMA30{}',
    'EMA50{}',
    'SMA50{}',
    'EMA100{}',
    'SMA100{}',
    'EMA200{}',
    'SMA200{}',
    'Rec.Ichimoku{}',
    'Ichimoku.BLine{}',
    'Rec.VWMA{}',
    'VWMA{}',
    'Rec.HullMA9{}',
    'HullMA9{}',
    'Pivot.M.Classic.S3{}',
    'Pivot.M.Classic.S2{}',
    'Pivot.M.Classic.S1{}',
    'Pivot.M.Classic.Middle{}',
    'Pivot.M.Classic.R1{}',
    'Pivot.M.Classic.R2{}',
    'Pivot.M.Classic.R3{}',
    'Pivot.M.Fibonacci.S3{}',
    'Pivot.M.Fibonacci.S2{}',
    'Pivot.M.Fibonacci.S1{}',
    'Pivot.M.Fibonacci.Middle{}',
    'Pivot.M.Fibonacci.R1{}',
    'Pivot.M.Fibonacci.R2{}',
    'Pivot.M.Fibonacci.R3{}',
    'Pivot.M.Camarilla.S3{}',
    'Pivot.M.Camarilla.S2{}',
    'Pivot.M.Camarilla.S1{}',
    'Pivot.M.Camarilla.Middle{}',
    'Pivot.M.Camarilla.R1{}',
    'Pivot.M.Camarilla.R2{}',
    'Pivot.M.Camarilla.R3{}',
    'Pivot.M.Woodie.S3{}',
    'Pivot.M.Woodie.S2{}',
    'Pivot.M.Woodie.S1{}',
    'Pivot.M.Woodie.Middle{}',
    'Pivot.M.Woodie.R1{}',
    'Pivot.M.Woodie.R2{}',
    'Pivot.M.Woodie.R3{}',
    'Pivot.M.Demark.S1{}',
    'Pivot.M.Demark.Middle{}',
    'Pivot.M.Demark.R1{}',
    'open{}',
    'P.SAR{}',
];
var EXCHANGES_ENUM;
(function (EXCHANGES_ENUM) {
    EXCHANGES_ENUM["NASDAQ"] = "NASDAQ";
    EXCHANGES_ENUM["FX_IDC"] = "FX_IDC";
    EXCHANGES_ENUM["NYSE"] = "NYSE";
    EXCHANGES_ENUM["BINANCE"] = "BINANCE";
    EXCHANGES_ENUM["BITTREX"] = "BITTREX";
})(EXCHANGES_ENUM = exports.EXCHANGES_ENUM || (exports.EXCHANGES_ENUM = {}));
var SCREENERS_ENUM;
(function (SCREENERS_ENUM) {
    SCREENERS_ENUM["forex"] = "forex";
    SCREENERS_ENUM["cfd"] = "cfd";
    SCREENERS_ENUM["crypto"] = "crypto";
})(SCREENERS_ENUM = exports.SCREENERS_ENUM || (exports.SCREENERS_ENUM = {}));
var INTERVALS_ENUM;
(function (INTERVALS_ENUM) {
    INTERVALS_ENUM["1m"] = "1m";
    INTERVALS_ENUM["5m"] = "5m";
    INTERVALS_ENUM["15m"] = "15m";
    INTERVALS_ENUM["1h"] = "1h";
    INTERVALS_ENUM["4h"] = "4h";
    INTERVALS_ENUM["1W"] = "1W";
    INTERVALS_ENUM["1M"] = "1M";
})(INTERVALS_ENUM = exports.INTERVALS_ENUM || (exports.INTERVALS_ENUM = {}));
var RECOMMENDATIONS_ENUM;
(function (RECOMMENDATIONS_ENUM) {
    RECOMMENDATIONS_ENUM["BUY"] = "BUY";
    RECOMMENDATIONS_ENUM["STRONG_BUY"] = "STRONG_BUY";
    RECOMMENDATIONS_ENUM["SELL"] = "SELL";
    RECOMMENDATIONS_ENUM["STRONG_SELL"] = "STRONG_SELL";
    RECOMMENDATIONS_ENUM["NEUTRAL"] = "NEUTRAL";
    RECOMMENDATIONS_ENUM["ERROR"] = "ERROR";
})(RECOMMENDATIONS_ENUM = exports.RECOMMENDATIONS_ENUM || (exports.RECOMMENDATIONS_ENUM = {}));
exports.INTERVALS_SCHEMA = {
    '1m': '|1',
    '5m': '|5',
    '15m': '|15',
    '1h': '|60',
    '4h': '|240',
    '1W': '|1W',
    '1M': '|1M',
};
//# sourceMappingURL=contracts.js.map