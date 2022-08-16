"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradingViewScan = void 0;
const tslib_1 = require("tslib");
const contracts_1 = require("./contracts");
const reponseParser_1 = require("./reponseParser");
const SCAN_URL = 'https://scanner.tradingview.com/';
const axios_1 = require("axios");
function getData(symbol, interval) {
    const preparedInterval = (contracts_1.INTERVALS_SCHEMA === null || contracts_1.INTERVALS_SCHEMA === void 0 ? void 0 : contracts_1.INTERVALS_SCHEMA[interval]) || '';
    return {
        symbols: { tickers: [symbol.toUpperCase()], query: { types: [] } },
        columns: contracts_1.REQUEST_INDICATORS.map((i) => i.replace('{}', preparedInterval)),
    };
}
class TradingViewScan {
    constructor(screener, exchange, symbol, interval, axiosInstance = axios_1.default) {
        this.screener = screener;
        this.exchange = exchange;
        this.symbol = symbol;
        this.interval = interval;
        this.axiosInstance = axiosInstance;
    }
    analyze() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.validateExchange();
            this.validateScreener();
            this.validateSymbol();
            return yield this._makeRequest();
        });
    }
    _makeRequest() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const exch_smbl = `${this.exchange.toUpperCase()}:${this.symbol.toUpperCase()}`;
            const reqData = getData(exch_smbl, this.interval);
            try {
                const { data } = yield this.axiosInstance.post(`${SCAN_URL}${this.screener.toLowerCase()}/scan`, reqData);
                const result = new reponseParser_1.ParseTAResponse(data).parse();
                return Object.assign({ screener: this.screener, exchange: this.exchange, symbol: this.symbol, interval: this.interval, time: new Date().toDateString() }, result);
                return result;
            }
            catch (error) {
                throw error;
            }
        });
    }
    validateExchange() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    validateScreener() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
    validateSymbol() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.TradingViewScan = TradingViewScan;
//# sourceMappingURL=main.js.map